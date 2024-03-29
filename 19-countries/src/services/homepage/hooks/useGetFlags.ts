import axios from "axios";
import useSWR from "swr";
import { GetFlagModel } from "../types/GetFlagModel";

export const useGetFlags = () => {
  const fetcher = async (url: string) => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + url);
    return res.data;
  };

  return useSWR<GetFlagModel[]>("/all", fetcher);
};
