import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
    }
  }
`;
