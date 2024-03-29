import PhotoForm from "@/components/shared/PhotoForm";
import useAddPhoto from "@/services/create/hooks/useAddPhoto";
import { IPhotoForm } from "@/services/update/types/photo-form";
import React, { useState } from "react";
import { UseFormReset } from "react-hook-form";
import { useTranslation } from "react-i18next";

const CreatePage = () => {
  const { t } = useTranslation();
  const { addPhoto, data, error, loading } = useAddPhoto();
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (
    data: IPhotoForm,
    reset?: UseFormReset<IPhotoForm>
  ) => {
    try {
      await addPhoto({
        variables: { photo_url: data.photoUrl, description: data.description },
      });
    } catch (error: any) {
      alert(error.message);
    }
    reset && reset();

    setMessage("Photo added successfully");

    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div>
      <h1 className="text-center py-4 font-semibold text-2xl">
        {t("pageTitles.create")}
      </h1>
      <PhotoForm
        initialData={{ description: "", photoUrl: "" }}
        onSubmit={onSubmit}
      />
      {message && <p className="text-center py-4 ">{message}</p>}
    </div>
  );
};

export default CreatePage;
