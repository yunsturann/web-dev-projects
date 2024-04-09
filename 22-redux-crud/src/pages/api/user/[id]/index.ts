// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "@/lib/models/User";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  try {
    if (req.method === "DELETE") {
      await User.findByIdAndDelete(id);

      res.status(200).json({ message: "User deleted", _id: id });
    } else if (req.method === "PUT") {
      await User.findByIdAndUpdate(id, req.body);

      res.status(200).json({ message: "User updated", _id: id });
    } else if (req.method === "GET") {
      const user = await User.findById(id);
      res.status(200).json(user);
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
