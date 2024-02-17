"use server";
import { Todo } from "@/models/models";
import { connectToDb } from "./database";
import { revalidatePath } from "next/cache";
import { ITodo } from "@/types/types";
import { InitialState } from "@/types/types";

export async function addTodo(
  prevState: InitialState,
  formData: FormData
): Promise<InitialState> {
  const todo = formData.get("todo");
  try {
    await connectToDb();
    // check if todo is already exists
    const isTodoExists = await Todo.exists({ todo });
    if (isTodoExists) {
      return { success: false, message: "Todo already exists!" };
    }
    // create a todo
    await Todo.create({ todo });
    // revalidate the home page
    revalidatePath("/");
    return { success: true, message: "Todo added successfully!" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong!" };
  }
}

export async function getTodos(): Promise<ITodo[]> {
  try {
    await connectToDb();
    const todos: ITodo[] = await Todo.find();

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
    revalidatePath("/");
    return { success: true, message: "Todo deleted successfully!" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong!" };
  }
}
