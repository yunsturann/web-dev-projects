import axios from "axios";
import { GetBlogResponse } from "../../Homepage/types/GetBlogResponse";
import useSWR from "swr";

export default function useGetBlog(id: string) {
  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    return res.data;
  };

  return useSWR<GetBlogResponse>(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/blog/" + id,
    fetcher
  );
}
