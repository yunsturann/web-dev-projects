import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { tag } = params;

  try {
    await connectToDB();

    let prompts = await Prompt.find({}).populate("creator");

    prompts = prompts.filter(
      (prompt) => prompt.tag.toLowerCase() === "#" + tag.toLowerCase()
    );

    return NextResponse.json(prompts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to find tags!" },
      { status: 500 }
    );
  }
}
