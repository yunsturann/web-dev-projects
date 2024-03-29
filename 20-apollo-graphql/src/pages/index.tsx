import UseLazyQuery from "@/components/homepage/UseLazyQuery";
import useDeletePhotoById from "@/services/homepage/hooks/useDeletePhotoById";
import useGetPhotos from "@/services/homepage/hooks/useGetPhotos";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const { data, error, loading } = useGetPhotos();
  const { deletePhoto } = useDeletePhotoById();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  const handleDelete = async (id: string) => {
    try {
      await deletePhoto({ variables: { id } });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="pb-40">
      <h1 className="text-center py-4 font-semibold text-2xl">
        {t("pageTitles.home", { username: "Yunus" })}
      </h1>
      <ul className="w-1/2 space-y-4 mx-auto">
        {data?.map((photo) => (
          <li
            key={photo.id}
            className="flex justify-between items-center bg-gray-50 p-3"
          >
            <header>
              <h2 className="text-lg font-medium mb-2">
                {photo.photo_url.slice(0, 40)}
              </h2>
              <p>{photo.description}</p>
            </header>
            <div className="space-x-3">
              <span className="text-red-500 cursor-pointer bg-gray-300 hover:opacity-80 p-3 transition duration-300">
                <Link href={`/update/${photo.id}`}>{t("edit")}</Link>
              </span>
              <span
                className="text-red-500 cursor-pointer bg-gray-300 hover:opacity-80 p-3 transition duration-300"
                onClick={() => handleDelete(photo.id)}
              >
                X
              </span>
            </div>
          </li>
        ))}
      </ul>
      <hr className="py-4" />
      <UseLazyQuery />
    </div>
  );
};

export default HomePage;
