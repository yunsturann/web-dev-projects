import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import { Post } from "@/models/models";

export const addPost = async (formData) => {
  "use server";

  //   const title = formData.get("title");
  //   const desc  = formData.get("desc");
  //   const slug = formData.get("slug");
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    await connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();

    revalidatePath("/posts");
  } catch (error) {}
};

export const deletePost = async (formData) => {
  "use server";
  const id = formData.get("postId");

  try {
    await connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/posts");
  } catch (error) {}
};
