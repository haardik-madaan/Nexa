import { GenAiCode } from "@/config/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const result = await GenAiCode.sendMessage(prompt);

    // Get the AI response text
    const resp = await result.response.text();

    let parsed;
    try {
      // Attempt to parse JSON
      parsed = JSON.parse(resp);
    } catch (parseError) {
      // Fallback: return raw text if parsing fails
      parsed = { raw: resp, parseError: parseError.message };
    }

    return NextResponse.json(parsed);
  } catch (e) {
    return NextResponse.json({
      error: e.message || "Something went wrong",
    });
  }
}
