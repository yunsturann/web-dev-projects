import { gql } from "@apollo/client";

export const DELETE_PHOTO_BY_ID = gql`
  mutation DeletePhotoById($id: uuid!) {
    delete_photos_by_pk(id: $id) {
      id
    }
  }
`;
