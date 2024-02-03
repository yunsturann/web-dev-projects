import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { prompt, userId, tag } = await req.json();

  try {
    await connectToDB();

    // const newPrompt = new Prompt({ creator: userId, prompt, tag });
    // await newPrompt.save();

    const newPrompt = await Prompt.create({ creator: userId, prompt, tag });

    return NextResponse.json({ newPrompt }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create a new prompt!" },
      { status: 500 }
    );
  }
};
