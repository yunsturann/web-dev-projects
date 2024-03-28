export interface PhotoModel {
  id?: string;
  photo_url: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}

export interface GetPhotoModel {
  photos_by_pk: PhotoModel;
}
