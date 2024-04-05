import axios from "axios";
import useSWR from "swr";
import { GetProductsModel } from "../types/get-products-model";

export function useGetProducts(limit: number, page: number) {
  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    return res.data;
  };

  return useSWR<GetProductsModel>(
    `${process.env.NEXT_PUBLIC_DUMMY_URL}/products?limit=${limit}&skip=${
      (page - 1) * limit
    }&select=title,price`,
    fetcher
  );
}
