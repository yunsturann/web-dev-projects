import { verifyJwtToken } from "@/libs/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookieList = cookies();
  const { value: token } = cookieList.get("token") ?? { value: null };

  if (!token) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const verifiedToken = await verifyJwtToken(token);

  if (!verifiedToken) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  return NextResponse.json(verifiedToken, { status: 200 });
}
