import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { create } from "zustand";

export interface ITodo {
  id: string;
  createdAt: string;
  description: string;
  isWatched: boolean;
  title: string;
  userId: string;
}

interface TodoStore {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  fetchTodos: (userId: string) => void;
}

export const useTodosStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({ todos: [...state.todos, todo] }));
  },
  fetchTodos: async (userId) => {
    if (!userId) return set({ todos: [] });

    try {
      const response = await getDocs(collection(db, "todos"));
      const data = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ITodo[];

      set({ todos: data });
    } catch (error) {
      set({ todos: [] });
    }
  },
}));
