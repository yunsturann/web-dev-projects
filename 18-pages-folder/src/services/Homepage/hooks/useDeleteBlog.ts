import axios from "axios";
import useSWRMutation from "swr/mutation";

export default function useDeleteBlog() {
  const fetcher = async (url: string, { arg }: { arg: string }) => {
    const res = await axios.delete(`${url}/${arg}`);
    return res.data;
  };

  return useSWRMutation<boolean, any, any, string>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`,
    fetcher
  );
}
