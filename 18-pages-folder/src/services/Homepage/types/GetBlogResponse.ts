export type GetBlogResponse = {
  success: boolean;
  data: {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  };
};
