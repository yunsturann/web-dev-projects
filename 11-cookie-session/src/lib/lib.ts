import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: string;
  username?: string;
  img?: string;
  isPro?: boolean;
  isBlocked?: boolean;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "turan-session",
  cookieOptions: {
    httpOnly: true, // it prevents client side javascript to access the cookie, we can only access it through the server
    secure: process.env.NODE_ENV === "production" ? true : false, // it only sends the cookie over https in production
  },
};
