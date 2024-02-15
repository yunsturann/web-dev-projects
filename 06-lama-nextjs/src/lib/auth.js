import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "@/models/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    await connectToDb();
    // Check if user exists in the database
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("User not found");

    // Check if the password is correct
    const validPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!validPassword) throw new Error("Invalid password");

    // Return the user
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("An error occurred while logging in");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // If the user is signing in with GitHub
      if (account.provider === "github") {
        try {
          await connectToDb();
          // Check if user exists in the database
          const user = await User.findOne({ email: profile.email });
          // If not, create a new user
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      // If the user is signing in with any other provider
      return true;
    },
  },
});
