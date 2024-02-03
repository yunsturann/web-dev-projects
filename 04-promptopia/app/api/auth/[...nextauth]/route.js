import User from "@models/user";
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({
          email: session.user.email,
        });

        session.user.id = sessionUser._id.toString();
        // make sure which user is currently online
        return session;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async signIn({ profile }) {
      try {
        //serverless -> lambda -> dynamodb

        await connectToDB();

        // check if a user already exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        // if not, create a new user in the database
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
