import { SessionOptions } from "iron-session";

export interface ISessionData {
  userId?: string;
  username?: string;
  email?: string;
  img?: string;
  isAdmin?: boolean;
  isLoggedIn: boolean;
}

export const defaultSession: ISessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "todo-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};
