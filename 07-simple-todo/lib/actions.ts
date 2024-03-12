"use server";
import { Todo, User } from "@/models/models";
import { connectToDb } from "./database";
import { revalidatePath } from "next/cache";
import { ITodo, TInitialState } from "@/types/types";
import { InitialState } from "@/types/types";
import bcrypt from "bcrypt";
import { getSession } from "./authActions";
import { redirect } from "next/navigation";

export async function addTodo(
  prevState: InitialState,
  formData: FormData
): Promise<InitialState> {
  const session = await getSession();
  if (!session.isLoggedIn)
    return { success: false, message: "You are not logged in!" };
  const todo = formData.get("todo");
  const userId = session.userId;

  try {
    await connectToDb();
    // check if todo is already exists
    const isTodoExists = await Todo.exists({ todo });
    if (isTodoExists) {
      return { success: false, message: "Todo already exists!" };
    }
    // create a todo
    await Todo.create({ todo, user: userId });
    // revalidate the home page
    revalidatePath("/");
    return { success: true, message: "Todo added successfully!" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong!" };
  }
}

export async function getTodos(): Promise<ITodo[]> {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/login");
  }
  try {
    await connectToDb();
    const todos: ITodo[] = await Todo.find({ user: session.userId });

    return todos;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function deleteTodo(formData: FormData) {
  const id = formData.get("id");
  try {
    await connectToDb();
    await Todo.deleteOne({ _id: id });
    revalidatePath("/addTodo");
    return { success: true, message: "Todo deleted successfully!" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong!" };
  }
}

// for user

export const registerUser = async (
  prevState: TInitialState,
  formData: FormData
): Promise<any> => {
  const { username, email, password, confirmPassword, image } =
    Object.fromEntries(formData);

  // check if password and confirmPassword are the same
  if (password !== confirmPassword) {
    return { error: "Passwords do not match!" };
  }

  try {
    await connectToDb();
    // check if username already exists
    const isUsernameExists = await User.exists({ username });
    if (isUsernameExists) {
      return { error: "Username already exists!" };
    }
    // check if email already exists
    const isEmailExists = await User.exists({ email });
    if (isEmailExists) {
      return { error: "Email already exists!" };
    }
    // hash the password
    const salt = await bcrypt.genSalt(10);

    const pass = password.toString();

    const hashedPassword = await bcrypt.hash(pass, salt);

    // create a user
    await User.create({
      username,
      email,
      password: hashedPassword,
      img: image,
    });

    return { success: true };
  } catch (error: any) {
    console.log(error.message);
    return { error: error.message.split(":")[2] || error.message };
  }
};
