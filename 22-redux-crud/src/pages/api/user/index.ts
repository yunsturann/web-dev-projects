// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "@/lib/models/User";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === "POST") {
      const body = req.body;

      await User.create(body);

      res.status(201).json({ message: "User created" });
    } else if (req.method === "GET") {
      const users = await User.find({});
      res.status(200).json(users);
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
