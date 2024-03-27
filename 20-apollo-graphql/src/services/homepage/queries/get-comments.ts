import { gql } from "@apollo/client";

export const GET_COMMENTS = gql`
  query GetComments {
    comments {
      id
      comment
    }
  }
`;
