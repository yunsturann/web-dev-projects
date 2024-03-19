"use server";

import { cookies } from "next/headers";
import { verifyJwtToken } from "./auth";

export const getSession = async () => {
  const cookieList = cookies();
  const { value: token } = cookieList.get("token") ?? { value: null };

  if (!token) {
    return { success: false };
  }

  const verifiedToken = await verifyJwtToken(token);

  if (!verifiedToken) {
    return { success: false };
  }

  return verifiedToken;
};
