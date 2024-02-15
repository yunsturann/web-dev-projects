import { connectToDb } from "@/lib/utils";
import { Post } from "@/models/models";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
