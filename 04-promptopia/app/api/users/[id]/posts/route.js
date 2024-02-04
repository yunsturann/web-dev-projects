import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: id }).populate("creator");

    return NextResponse.json(prompts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch all prompts!", error },
      { status: 500 }
    );
  }
}
