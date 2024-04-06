import { gql } from "@apollo/client";

export const INSERT_USER = gql`
  mutation ADD_USER($name: String!, $cv: String!) {
    insert_users_one(object: { name: $name, cv: $cv }) {
      id
      cv
      created_at
      name
    }
  }
`;
