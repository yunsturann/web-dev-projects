import axios from "axios";
import useSWR from "swr";
import { GetBlogModel } from "../types/GetBlogModel";

export default function useGetBlogs() {
  const fetcher = async (url: string) => {
    const response = await axios.get(url);

    return response.data;
  };

  const { data, isLoading, error, isValidating, mutate } = useSWR<
    GetBlogModel[]
  >(process.env.NEXT_PUBLIC_BASE_URL + "/api/blog", fetcher);

  return { data, isLoading, error, isValidating, mutate };
}
