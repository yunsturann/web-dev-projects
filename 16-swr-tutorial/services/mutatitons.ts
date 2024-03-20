import useSWRMutation from "swr/mutation";
import { useTodos } from "./queries";
import { createTodo } from "./api";

export const useCreateTodo = () => {
  const { mutate } = useTodos();

  return useSWRMutation("/api/todo", createTodo, {
    onError() {
      console.error("error");
    },
    onSuccess() {
      mutate();
    },
  });
};
