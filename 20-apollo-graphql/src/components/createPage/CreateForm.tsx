import useAddPhoto from "@/services/create/hooks/useAddPhoto";
import React from "react";

const CreateForm = () => {
  const { addPhoto, data, error, loading } = useAddPhoto();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  if (data) {
    console.log(data);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // get the values from the form
    const form = new FormData(e.target as HTMLFormElement);
    const photoUrl = form.get("photoUrl") as string;
    const description = form.get("description") as string;

    addPhoto({ variables: { photo_url: photoUrl, description: description } });
  };
  return (
    <div className="bg-slate-200 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 flex flex-col gap-3 w-1/2"
      >
        <input
          type="text"
          placeholder="Photo Url..."
          className="text-lg px-3 py-2"
          name="photoUrl"
        />
        <input
          type="text"
          placeholder="Description..."
          className="text-lg px-3 py-2"
          name="description"
        />
        <button type="submit" className="bg-green-400 p-2">
          Add Photo
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
