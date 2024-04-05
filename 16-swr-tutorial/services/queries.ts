import { logger } from "@/lib/utils";
import { Todo } from "@/types";
import useSWR from "swr";

export function useTodos() {
  return useSWR<Todo[]>("/api/todo", { use: [logger] });
}
