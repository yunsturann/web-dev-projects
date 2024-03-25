import { GetBlogModel } from "@/services/Homepage/types/GetBlogModel";

export type GetBlogResponse = {
  success: boolean;
  data: GetBlogModel;
};
