import UseLazyQuery from "@/components/homepage/UseLazyQuery";
import useDeletePhotoById from "@/services/homepage/hooks/useDeletePhotoById";
import useGetPhotos from "@/services/homepage/hooks/useGetPhotos";
import React from "react";

const HomePage = () => {
  const { data, error, loading } = useGetPhotos();
  const { deletePhoto } = useDeletePhotoById();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  const handleDelete = (id: string) => {
    deletePhoto({ variables: { id } });
  };

  return (
    <div className="pb-40">
      <h1>First Apollo App</h1>
      <ul className="w-1/2 space-y-4">
        {data?.map((photo) => (
          <li
            key={photo.id}
            className="flex justify-between items-center bg-gray-50 p-3"
          >
            <p>{photo.description}</p>
            <span
              className="text-red-500 cursor-pointer bg-gray-300 hover:opacity-80 p-3 transition duration-300"
              onClick={() => handleDelete(photo.id)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
      <hr className="py-4" />
      <UseLazyQuery />
    </div>
  );
};

export default HomePage;
