"use client";
import { createTodo, deleteTodo } from "@/services/api";
import { axiosInstance } from "@/services/fetcher";
import { useCreateTodo } from "@/services/mutatitons";
import { useTodos } from "@/services/queries";
import React, { FormEvent } from "react";

const Todos = () => {
  const { data, mutate, isValidating } = useTodos();
  const { trigger, isMutating } = useCreateTodo();

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("todo") as string;

    // await axiosInstance.post("/api/todo", { title });
    // mutate();
    // await createTodo("/api/todo", { arg: { title } });
    // mutate();

    trigger(
      { title },
      {
        optimisticData: data && [
          ...data,
          { _id: Math.random(), title: title + " (optimistic)" },
        ],
        rollbackOnError: true,
      }
    );
  };

  const handleDeleteAllTodos = async () => {
    const res = await axiosInstance.delete("/api/todo");
    if (res.data.success) {
      alert("All todos deleted");
    }
    mutate();
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo({ id });
    mutate();
  };

  return (
    <div className="border py-12 px-8 space-y-6">
      <h1 className="text-center text-xl font-semibold">Todos</h1>
      {/* ADD TODO FORM */}
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="todo"
          className="outline-none border rounded-l-md p-2 focus:ring-1 focus:ring-slate-400"
          required
        />
        <button
          type="submit"
          className="border p-2 rounded-r-md hover:bg-slate-100"
          disabled={isValidating || isMutating}
        >
          {isValidating ? "Adding..." : "Add Todo"}
        </button>
      </form>

      {/* LIST TODOS */}
      <ul className="space-y-2">
        {data?.map((todo) => (
          <li key={todo._id} className="flex justify-between items-center">
            <p>{todo.title}</p>
            {/* {todo.title} - {todo._id} */}
            <span
              className="p-2 bg-gray-100 cursor-pointer"
              onClick={() => handleDeleteTodo(todo._id)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
      {/* DELETE ALL TODOS */}

      <button
        className="border p-2 rounded-md hover:bg-slate-100"
        onClick={handleDeleteAllTodos}
      >
        Delete All
      </button>
    </div>
  );
};

export default Todos;
