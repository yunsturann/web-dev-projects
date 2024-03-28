import PhotoForm from "@/components/shared/PhotoForm";
import { useGetPhoto } from "@/services/update/hooks/useGetPhoto";
import { useUpdatePhoto } from "@/services/update/hooks/useUpdatePhoto";
import { IPhotoForm } from "@/services/update/types/photo-form";
import { useRouter } from "next/router";
import React from "react";

const UpdatePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, loading } = useGetPhoto(id as string);
  const { updatePhoto, error: updateError } = useUpdatePhoto();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  if (!data) {
    return <div>No data found...</div>;
  }
  if (updateError) {
    return <div>Update Error...</div>;
  }

  const onSubmit = (data: IPhotoForm) => {
    updatePhoto({
      variables: {
        id: id as string,
        photoUrl: data.photoUrl,
        description: data.description,
      },
    });
    router.push("/");
  };

  return (
    <div>
      <h1 className="text-center py-4 font-semibold text-2xl">Update Page</h1>
      <PhotoForm
        initialData={{
          description: data.description,
          photoUrl: data.photo_url,
        }}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default UpdatePage;
