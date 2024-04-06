import { useQuery } from "@apollo/client";
import { GetUsersModel } from "../types/get-user-model";
import { GET_USERS } from "../queries/get-users";

export default function useGetUsers() {
  const { data, loading, error } = useQuery<GetUsersModel>(GET_USERS);

  return {
    data: data?.users,
    loading,
    error,
  };
}
