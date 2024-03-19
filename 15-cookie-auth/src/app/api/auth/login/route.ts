import { getJwtSecretKey } from "@/libs/auth";
import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  // go to db to check if user exists and password is correct
  if (username === "user" && password === "user") {
    const token = await new SignJWT({
      username,
      role: "user",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(getJwtSecretKey());

    const response = NextResponse.json({ success: true }, { status: 200 });

    response.cookies.set({
      name: "token",
      value: token,
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
