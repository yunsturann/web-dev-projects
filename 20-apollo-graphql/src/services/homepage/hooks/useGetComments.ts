import { useLazyQuery } from "@apollo/client";
import { GET_COMMENTS } from "../queries/get-comments";
import { GetCommentsModel } from "../types/get-comments-model";

export default function useGetLazyComments() {
  const [getComments, { loading, data, error }] =
    useLazyQuery<GetCommentsModel>(GET_COMMENTS);

  return {
    getComments,
    loading,
    data: data?.comments,
    error,
  };
}
