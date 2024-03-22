import Blog from "@/models/Blog";
import { GetBlogModel } from "@/services/Homepage/types/GetBlogModel";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  data?: GetBlogModel;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    if (req.method === "DELETE") {
      await Blog.findByIdAndDelete(req.query.id);

      res.status(200).json({ success: true });
    } else if (req.method === "PUT") {
      await Blog.findByIdAndUpdate(req.query.id, req.body);

      res.status(200).json({ success: true });
    } else if (req.method === "GET") {
      const blog = await Blog.findById(req.query.id);
      // If blog is not found
      if (!blog) {
        return res.status(404).json({ success: false });
      }

      res.status(200).json({ success: true, data: blog });
    }
  } catch (error) {
    res.status(500).json({ success: false });
  }
}
