import { connectToDb } from "@/lib/utils";
import { Post } from "@/models/models";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { slug } = params;
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
