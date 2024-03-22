// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Blog from "@/models/Blog";
import { BlogType } from "@/services/Blog/types";
import { BlogFormDataType } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = (BlogFormDataType & {}) | { error: string } | BlogType[] | boolean;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === "POST") {
      const { title, content } = req.body;

      await Blog.create({ title, content });

      res.status(200).json(true);
    } else if (req.method === "GET") {
      const blogs = await Blog.find({});

      res.status(200).json(blogs);
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
