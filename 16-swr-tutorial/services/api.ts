import { axiosInstance } from "./fetcher";

export const createTodo = async (
  url: string,
  { arg }: { arg: { title: string } }
) => {
  await axiosInstance.post(url, { title: arg.title });
};

export const deleteTodo = async ({ id }: { id: string }) => {
  await axiosInstance.delete(`/api/todo/${id}`);
};
