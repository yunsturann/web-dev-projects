import { signUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body: unknown = await req.json();

  const result = signUpSchema.safeParse(body);

  let zodErrors = {};
  if (!result.success) {
    console.log(result.error);
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}
