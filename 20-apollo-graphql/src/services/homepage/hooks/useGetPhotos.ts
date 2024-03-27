import { useQuery } from "@apollo/client";
import { GET_PHOTOS } from "../queries/get-photos";
import { GetPhotoModel } from "../types/get-photo-model";

export default function useGetPhotos() {
  const { data, loading, error } = useQuery<GetPhotoModel>(GET_PHOTOS);

  return {
    data: data?.photos,
    loading,
    error,
  };
}
