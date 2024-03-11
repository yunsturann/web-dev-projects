"use server";
import { TInitialState } from "@/types/types";
import { getIronSession } from "iron-session";
import { ISessionData, defaultSession, sessionOptions } from "./session";
import { cookies } from "next/headers";
import { User } from "@/models/models";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const getSession = async () => {
  const session = await getIronSession<ISessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const loginUser = async (
  prevState: TInitialState,
  formData: FormData
): Promise<TInitialState> => {
  const { username, password } = Object.fromEntries(formData);

  try {
    const user = await User.findOne({ username });
    // if user not found
    if (!user) {
      return { error: "Invalid username" };
    }
    // if password not match
    const isPasswordMatch = await bcrypt.compare(
      password.toString(),
      user.password
    );
    if (!isPasswordMatch) {
      return { error: "Invalid password" };
    }
    // set session
    const session = await getSession();
    session.userId = user._id.toString();
    session.username = user.username;
    session.email = user.email;
    session.img = user.img;
    session.isAdmin = user.isAdmin;
    session.isLoggedIn = true;
    await session.save();

    return { success: true };
  } catch (error: any) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
