import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function GET(res: Request) {
  const { searchParams } = new URL(res.url);
  const src = searchParams.get("url");

  if (!src) {
    return NextResponse.json({ error: "img src is required" });
  }

  try {
    const response = await fetch(src);
    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: { "Content-Type": "image/png" },
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Error fetching the image" },
      { status: 500 }
    );
  }
}
