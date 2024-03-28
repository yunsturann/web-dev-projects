import PhotoForm from "@/components/shared/PhotoForm";
import useAddPhoto from "@/services/create/hooks/useAddPhoto";
import { IPhotoForm } from "@/services/update/types/photo-form";
import React, { useState } from "react";
import { UseFormReset, set } from "react-hook-form";

const CreatePage = () => {
  const { addPhoto, data, error, loading } = useAddPhoto();
  const [message, setMessage] = useState<string>("");

  const onSubmit = (data: IPhotoForm, reset?: UseFormReset<IPhotoForm>) => {
    addPhoto({
      variables: { photo_url: data.photoUrl, description: data.description },
    });
    reset && reset();

    setMessage("Photo added successfully");

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div>
      <h1 className="text-center py-4 font-semibold text-2xl">CreatePage</h1>
      <PhotoForm
        initialData={{ description: "", photoUrl: "" }}
        onSubmit={onSubmit}
      />
      {message && <p className="text-center py-4 ">{message}</p>}
    </div>
  );
};

export default CreatePage;
