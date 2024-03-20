import Todo from "@/lib/TodoModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  // Delete the todo with the given id
  try {
    await Todo.deleteOne({ _id: id });
    return NextResponse.json({ message: "Todo deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
