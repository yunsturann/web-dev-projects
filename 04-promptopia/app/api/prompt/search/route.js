import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const searchQuery = req.nextUrl.searchParams.get("search");

  let temp = [];
  let results = [];

  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    temp = prompts.filter((prompt) =>
      prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    temp = [
      ...temp,
      ...prompts.filter((prompt) =>
        prompt.tag.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    ];

    temp = [
      ...temp,
      ...prompts.filter((prompt) =>
        prompt.creator.username
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      ),
    ];

    results = Array.from(new Set(temp.map(JSON.stringify))).map(JSON.parse);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to search prompts!" },
      { status: 500 }
    );
  }
}
