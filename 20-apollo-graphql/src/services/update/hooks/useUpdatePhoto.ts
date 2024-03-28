import { useMutation } from "@apollo/client";
import { UPDATE_PHOTO_BY_ID } from "../mutations/update-photo-by-id";
import { GET_PHOTOS } from "@/services/homepage/queries/get-photos";

export function useUpdatePhoto() {
  const [updatePhoto, { data, error, loading }] = useMutation(
    UPDATE_PHOTO_BY_ID,
    {
      refetchQueries: [{ query: GET_PHOTOS }],
    }
  );

  return { updatePhoto, data, error, loading };
}
