import { GoogleGenAI } from "@google/genai";

export const runtime = "edge";

export async function POST(req) {
  try {
    const body = await req.json();
    const messages = Array.isArray(body?.messages) ? body.messages : [];

    if (!messages.length) {
      return new Response(JSON.stringify({ error: "No messages provided" }), { status: 400 });
    }

    if (!process.env.GOOGLE_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing API key" }), { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      history: messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
    });

    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    const userPrompt = lastMessage?.content || "Generate a React project for Sandpack";
    
    // Force AI to respond strictly with JSON for Sandpack files
    const stream = await chat.sendMessageStream({
      message:
        `${userPrompt}\n\nGenerate a complete React project. Respond ONLY with JSON containing the files. Include at least App.jsx and index.css. Example format:\n{\n\"App.jsx\": \"import React from 'react';\n\nexport default function App() {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n}\",\n\"index.css\": \"body { margin: 0; font-family: Arial, sans-serif; }\"\n}\n\nNo extra text, no explanations, just the JSON with properly escaped strings.`,
    });

    let aiResponse = "";
    for await (const chunk of stream) {
      aiResponse += chunk.text;
    }

    // Extract JSON safely
    let files = {};
    console.log("Raw AI response:", aiResponse);
    
    // Try to find JSON in the response
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        files = JSON.parse(jsonMatch[0]);
        console.log("Parsed files:", files);
      } catch (err) {
        console.error("AI returned invalid JSON:", err, aiResponse);
        return new Response(
          JSON.stringify({ error: "AI did not return valid JSON", raw: aiResponse }),
          { status: 500 }
        );
      }
    } else {
      console.error("No JSON found in AI response:", aiResponse);
      return new Response(
        JSON.stringify({ error: "No JSON found in AI response", raw: aiResponse }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ files }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("POST /api/ai error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
