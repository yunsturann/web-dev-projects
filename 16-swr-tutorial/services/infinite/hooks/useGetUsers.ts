import axios from "axios";
import useSWRInfinite from "swr/infinite";
import { GetUsersModel } from "../types/get-user-model";

export function useGetUsers() {
  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    return res.data;
  };
  //https://dummyjson.com/users?limit=5&skip=10&select=firstName,age
  const getKey = (pageIndex: number, previousPageData: GetUsersModel) => {
    if (previousPageData && !previousPageData.users.length) return null;
    return `https://dummyjson.com/users?limit=5&skip=${
      pageIndex * 5
    }&select=firstName,age`;
  };

  return useSWRInfinite<GetUsersModel>(getKey, fetcher);
}
