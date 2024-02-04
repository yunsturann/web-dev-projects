import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return NextResponse.json(prompts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch all prompts!", error },
      { status: 500 }
    );
  }
}
