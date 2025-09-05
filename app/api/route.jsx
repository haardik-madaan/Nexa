import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Parse incoming body
    const body = await req.json();
    console.log("Incoming body:", body);   // 👈 Debug

    const messages = body?.messages || []; // fallback to empty array

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "No messages provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await model.generateContent({
      contents: messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }))
    });

    return new Response(
      JSON.stringify({ reply: result.response.text() }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Gemini API error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
