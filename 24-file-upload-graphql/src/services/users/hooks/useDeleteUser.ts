import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../mutations/delete-user";
import { GET_USERS } from "../queries/get-users";

export default function useDeleteUser() {
  const [deleteUser, { data, loading, error }] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  return { deleteUser, data, loading, error };
}
