import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

// get a prompt

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connectToDB();

    const prompt = await Prompt.findById(id).populate("creator");

    if (!prompt) {
      return NextResponse.json(
        { message: "Prompt not found!", error },
        { status: 404 }
      );
    }

    return NextResponse.json(prompt, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch prompt!", error },
      { status: 500 }
    );
  }
}

// patch put

export async function PATCH(req, { params }) {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return NextResponse.json(
        { message: "Prompt not found!", error },
        { status: 404 }
      );
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return NextResponse.json(existingPrompt, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to patch prompt!", error },
      { status: 500 }
    );
  }
}

// delete

export async function DELETE(req, { params }) {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);

    return NextResponse.json(
      { message: "Prompt deleted succesfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete prompt!", error },
      { status: 500 }
    );
  }
}
