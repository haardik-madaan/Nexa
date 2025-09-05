import { GoogleGenAI } from "@google/genai";
import { exec } from "child_process";
import { promisify } from "util";
import os from "os";
import { configDotenv } from "dotenv";

configDotenv();

const platform = os.platform();
const asyncExecute = promisify(exec);
const History = [];

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

// ---------------- Tool: Execute Shell Commands ----------------
async function executeCommand({ command }) {
  try {
    const { stdout, stderr } = await asyncExecute(command);
    if (stderr) return `Error: ${stderr}`;
    return `Success: ${stdout || "Command executed successfully"}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

const executeCommandDeclaration = {
  name: "executeCommand",
  description: "Execute a single terminal/shell command",
  parameters: {
    type: "OBJECT",
    properties: {
      command: {
        type: "STRING",
        description: 'Single command, e.g. "mkdir calculator"',
      },
    },
    required: ["command"],
  },
};

const availableTools = {
  executeCommand,
  "execute-command": executeCommand, // alias
};

// ---------------- AI Generate Content ----------------
async function safeGenerateContent(model, request) {
  let retries = 5;
  let delay = 2000;
  for (let i = 0; i < retries; i++) {
    try {
      return await ai.models.generateContent(request);
    } catch (err) {
      if (err.status === 429) {
        console.log(`Rate limited. Retrying in ${delay / 1000}s...`);
        await new Promise((res) => setTimeout(res, delay));
        delay *= 2;
      } else {
        throw err;
      }
    }
  }
  throw new Error("Max retries reached for API call");
}

// ---------------- Main Agent ----------------
export async function runAgent(userProblem) {
  History.push({ role: "user", parts: [{ text: userProblem }] });

  while (true) {
    const response = await safeGenerateContent("gemini-2.5-pro", {
      model: "gemini-2.5-pro",
      contents: History,
      config: {
        systemInstruction: `You are a Website builder expert... 
Current OS: ${platform}`,
        tools: [{ functionDeclarations: [executeCommandDeclaration] }],
      },
    });

    if (response.functionCalls && response.functionCalls.length > 0) {
      const { name, args } = response.functionCalls[0];
      const funCall = availableTools[name];
      if (!funCall) break;

      const result = await funCall(args);

      History.push({ role: "model", parts: [{ functionCall: response.functionCalls[0] }] });
      History.push({ role: "user", parts: [{ functionResponse: { name, response: { result } } }] });
    } else {
      const output = response.text;
      History.push({ role: "model", parts: [{ text: output }] });
      return output; // <-- return back to API route
    }
  }
}
