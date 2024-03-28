import { useQuery } from "@apollo/client";
import { GET_PHOTOS } from "../queries/get-photos";
import { GetPhotosModel } from "../types/get-photos-model";

export default function useGetPhotos() {
  const { data, loading, error } = useQuery<GetPhotosModel>(GET_PHOTOS);

  return {
    data: data?.photos,
    loading,
    error,
  };
}
