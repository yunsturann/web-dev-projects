import { gql } from "@apollo/client";

export const GET_PHOTO_BY_ID = gql`
  query GetPhotoById($id: uuid!) {
    photos_by_pk(id: $id) {
      id
      description
      created_at
      photo_url
      updated_at
    }
  }
`;
