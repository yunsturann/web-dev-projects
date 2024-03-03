import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./database";
import { User } from "@/models/models";
import bcrypt from "bcrypt";
import { authConfig } from "./authConfig";
import github from "next-auth/providers/github";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    github,
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     console.log(credentials);
    //     try {
    //       const user = await login(credentials);
    //       if (user) {
    //         return user;
    //       }
    //     } catch (error) {
    //       return null;
    //     }
    //   },
    // }),
  ],
  callbacks: {},
});

async function login(credentials: any) {
  try {
    await connectToDb();
    // check if user exists
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("User not found!");
    }
    // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Invalid password!");
    }
    return user;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
