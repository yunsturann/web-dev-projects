"use server";
import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import { Post, User } from "@/models/models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (formData) => {
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
  const id = formData.get("postId");

  try {
    await connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/posts");
  } catch (error) {}
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, img, password, confirmPassword } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) return { error: "Passwords do not match" };

  try {
    await connectToDb();
    // Check if user exists in the database
    const user = await User.findOne({ username });
    if (user) return { error: "User already exists" };
    // check email exists
    const uniqueEmail = await User.findOne({ email });
    if (uniqueEmail) return { error: "Email already exists" };

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    // Save the user to the database
    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "An error occurred while registering the user" };
  }
};

export async function login(prevState, formData) {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
    return { success: true };
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
}
