import { chatSession, GenAiCode } from "@/config/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const result = await chatSession.sendMessage(prompt);

  
    const resp = await result.response.text();

    

    return NextResponse.json({result:resp});
  } catch (e) {
   return NextResponse.json({error:e});
  }
}
