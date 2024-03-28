import { useQuery } from "@apollo/client";
import { GET_PHOTO_BY_ID } from "../queries/get-photo-by-id";
import { GetPhotoModel } from "../types/get-photo-model";

export function useGetPhoto(id: string) {
  const { data, loading, error } = useQuery<GetPhotoModel>(GET_PHOTO_BY_ID, {
    variables: { id },
  });

  return { data: data?.photos_by_pk, loading, error };
}
