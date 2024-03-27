import { useMutation } from "@apollo/client";
import { DELETE_PHOTO_BY_ID } from "../mutations/delete-photo-by-id";
import { GET_PHOTOS } from "../queries/get-photos";

export default function useDeletePhotoById() {
  const [deletePhoto, { loading, error, data }] = useMutation(
    DELETE_PHOTO_BY_ID,
    {
      refetchQueries: [{ query: GET_PHOTOS }],
    }
  );

  return {
    deletePhoto,
    loading,
    error,
    data,
  };
}
