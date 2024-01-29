import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { formData: userData } = await req.json();

    //confirm data exist
    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    //check for duplicate emails
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
    }
    //hash password
    userData.password = await bcrypt.hash(userData.password, 10);

    await User.create(userData);

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
