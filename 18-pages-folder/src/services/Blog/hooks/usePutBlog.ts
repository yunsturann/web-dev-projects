import { GetBlogModel } from "@/services/Homepage/types/GetBlogModel";
import axios from "axios";
import useSWRMutation from "swr/mutation";
import { BlogUpdateModel } from "../types";

export default function usePutBlog() {
  const fetcher = async (url: string, { arg }: { arg: BlogUpdateModel }) => {
    const response = await axios.put(url + "/" + arg._id, arg);
    return response.data;
  };

  return useSWRMutation<boolean, any, any, BlogUpdateModel>(
    "/api/blog",
    fetcher
  );
}
