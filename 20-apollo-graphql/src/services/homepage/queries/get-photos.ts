import { gql } from "@apollo/client";

export const GET_PHOTOS = gql`
  query GetPhotos {
    photos {
      id
      description
      photo_url
    }
  }
`;
