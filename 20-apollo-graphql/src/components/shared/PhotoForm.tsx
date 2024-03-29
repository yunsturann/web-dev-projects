import { IPhotoForm } from "@/services/update/types/photo-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC } from "react";
import { UseFormReset, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

interface PhotoFormProps {
  initialData: IPhotoForm;
  onSubmit: (data: IPhotoForm, reset?: UseFormReset<IPhotoForm>) => void;
}

const schema = yup.object().shape({
  photoUrl: yup.string().required("Photo Url is required"),
  description: yup.string().required("Description is required"),
});

const PhotoForm: FC<PhotoFormProps> = ({ initialData, onSubmit }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IPhotoForm>({
    resolver: yupResolver(schema),
    defaultValues: initialData,
  });

  return (
    <div className="bg-slate-200 flex justify-center items-center p-6">
      <form
        className="bg-slate-200 flex flex-col gap-3 w-1/2"
        onSubmit={handleSubmit((data) => onSubmit(data, reset))}
      >
        <input
          type="text"
          placeholder={t("formPlaceholder.photoUrl")}
          className="text-lg px-3 py-2"
          {...register("photoUrl")}
        />
        {errors.photoUrl && (
          <p className="text-red-500 text-sm">{errors.photoUrl.message}</p>
        )}
        <input
          type="text"
          placeholder={t("formPlaceholder.description")}
          className="text-lg px-3 py-2"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
        <button
          type="submit"
          className="bg-green-400 p-2 disabled:opacity-50 disabled:cursor-not-allowed "
          disabled={isSubmitting}
        >
          {initialData.description && initialData.photoUrl
            ? isSubmitting
              ? t("submitBtn.isloading.edit")
              : t("submitBtn.edit")
            : isSubmitting
            ? t("submitBtn.isloading.create")
            : t("submitBtn.create")}
        </button>
      </form>
    </div>
  );
};

export default PhotoForm;
