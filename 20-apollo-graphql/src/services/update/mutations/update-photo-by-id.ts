import { gql } from "@apollo/client";

export const UPDATE_PHOTO_BY_ID = gql`
  mutation UpdatePhotoById(
    $id: uuid!
    $photoUrl: String!
    $description: String!
  ) {
    update_photos_by_pk(
      pk_columns: { id: $id }
      _set: { description: $description, photo_url: $photoUrl }
    ) {
      id
    }
  }
`;
