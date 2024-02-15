import { Post, User } from "@/models/models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    // connect to db
    await connectToDb();
    // get posts from db
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get all posts");
  }
};

export const getSinglePost = async (slug) => {
  try {
    // connect to db
    await connectToDb();
    // get single post from db
    // const post = await Post.findOne({slug });
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get post");
  }
};

export const getSingleUser = async (userId) => {
  noStore();
  try {
    await connectToDb();
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get user");
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get all users");
  }
};
