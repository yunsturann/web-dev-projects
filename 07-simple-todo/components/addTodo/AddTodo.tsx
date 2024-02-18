"use client";
import { addTodo } from "@/lib/actions";
import { InitialState } from "@/types/types";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

const SubmitButton = () => {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full sm:w-1/5 p-2 bg-blue-400 uppercase max-sm:rounded-lg sm:rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out hover:bg-blue-500 focus:outline-none "
      disabled={status.pending}
    >
      {status.pending ? "Adding..." : "Add"}
    </button>
  );
};

const initialState: InitialState = {
  success: false,
  message: "",
};

const AddTodo = () => {
  const ref = useRef<HTMLFormElement>(null);

  const [formState, formAction] = useFormState(addTodo, initialState);

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();
    }
  }, [formState]);

  return (
    <div className="flex flex-col items-center gap-y-2 justify-center text-lg">
      {/* Form */}
      <form
        action={formAction}
        ref={ref}
        className="flex max-sm:flex-col max-sm:space-y-3 w-full sm:w-2/3"
      >
        <input
          type="text"
          placeholder="todo"
          name="todo"
          required
          className="px-4 py-2 flex-1 border-none outline-none max-sm:rounded-lg sm:rounded-l-lg bg-gray-100  focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out "
        />
        <SubmitButton />
      </form>
      <p className="text-rose-400 text-base">
        {formState.success || formState.message}
      </p>
    </div>
  );
};

export default AddTodo;
