import { BlogFormDataType } from "@/types";
import axios from "axios";
import useSWRMutation from "swr/mutation";

export default function usePostBlog() {
  const fetcher = async (url: string, { arg }: { arg: BlogFormDataType }) => {
    const res = await axios.post(url, arg);
    return res.data;
  };
  // <Response, any, any, Body/RequestType>
  const { trigger } = useSWRMutation<boolean, any, any, BlogFormDataType>(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/blog",
    fetcher
  );

  return { trigger };
}

// export default function usePostBlog() {
//   const fetcher = async (url: string, { arg }: { arg: BlogFormDataType }) => {
//     const res = await axios.post(url, arg);
//     return res.data;
//   };

//   return useSWRMutation<boolean, any, any, BlogFormDataType>(
//     process.env.NEXT_PUBLIC_BASE_URL + "/api/blog",
//     fetcher
//   );
// }
