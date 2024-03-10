"use server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "./lib/lib";
import { cookies } from "next/headers";
import { defaultSession } from "@/lib/lib";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// DUMMY DATA from DB
let username = "john",
  isPro = false,
  isBlocked = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  //////////////////////////////////
  // CHECK USER IN THE DATABASE
  //session.isBlocked = isBlocked;
  //session.isPro = isPro;

  return session;
};

export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();
  // const { username, password } = Object.fromEntries(formData);
  const formUsername = formData.get("username") as string;
  const formPassword = formData.get("password") as string;

  // CHECK USER IN THE DATABASE
  if (formUsername !== username) {
    return { error: "Wrong credentials" };
  }

  session.userId = "1";
  session.username = formUsername;
  session.isPro = isPro;
  session.isLoggedIn = true;

  // save the session
  await session.save();
  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export const changePremium = async () => {
  const session = await getSession();

  // update user premium status in the database
  isPro = !session.isPro;
  session.isPro = isPro; // isPro from database
  await session.save();
  revalidatePath("/profile");
};

export const updateUsername = async (formData: FormData) => {
  const session = await getSession();
  const newUsername = formData.get("username") as string;

  // update user username in the database
  username = newUsername;
  session.username = newUsername;
  await session.save();

  revalidatePath("/profile");
};
