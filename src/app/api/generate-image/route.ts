import OpenAI from "openai";
import { NextResponse } from "next/server";
import { OPENAI_API_KEY } from "@/contant/config";
import { coloredStatusCode } from "colored-status-code";

export const maxDuration = 60;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      quality: "standard",
    });

    return NextResponse.json({ imageUrl: response.data[0].url });
  } catch (error) {
    console.error(coloredStatusCode(500), error);

    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 }
    );
  }
}