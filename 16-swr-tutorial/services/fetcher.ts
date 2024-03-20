import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL!,
});

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
