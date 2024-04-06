import { useMutation } from "@apollo/client";
import { INSERT_USER } from "../mutations/insert-user";
import { GET_USERS } from "@/services/users/queries/get-users";

export default function useInsertUser() {
  const [addUser, { data, error, loading }] = useMutation(INSERT_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  return {
    addUser,
    data: data?.insert_users_one,
    error,
    loading,
  };
}
