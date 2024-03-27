import { gql } from "@apollo/client";

export const ADD_PHOTO = gql`
  mutation AddPhoto($photo_url: String!, $description: String!) {
    insert_photos_one(
      object: { photo_url: $photo_url, description: $description }
    ) {
      id
      photo_url
      description
    }
  }
`;
