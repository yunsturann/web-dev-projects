import { useMutation } from "@apollo/client";
import { ADD_PHOTO } from "../mutations/add-photo";
import { GET_PHOTOS } from "@/services/homepage/queries/get-photos";

export default function useAddPhoto() {
  const [addPhoto, { data, error, loading }] = useMutation(ADD_PHOTO, {
    refetchQueries: [
      {
        query: GET_PHOTOS,
      },
    ],
  });

  return {
    addPhoto,
    data,
    error,
    loading,
  };
}
