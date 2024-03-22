import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { BlogFormDataType } from "@/types";

interface BlogFormProps {
  heading: string;
  initialData: BlogFormDataType;
  handleSubmit: (e: FormEvent, formData: BlogFormDataType) => void;
}

const BlogForm: FC<BlogFormProps> = ({
  heading,
  initialData,
  handleSubmit,
}) => {
  const [formData, setFormData] = useState<BlogFormDataType>(initialData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="flex flex-col gap-4 text-lg"
      onSubmit={(e) => handleSubmit(e, formData)}
    >
      <h2 className="text-2xl font-semibold text-center">{heading}</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="title"
        required
        className="outline-none border border-gray-300 p-2 py-4 rounded-md mt-8"
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="content"
        rows={5}
        required
        className="outline-none border border-gray-300 p-2 py-4 rounded-md resize-none"
      ></textarea>
      <button
        type="submit"
        className="px-4 py-3 font-medium bg-green-500 hover:bg-green-400 transition duration-300 "
      >
        {heading}
      </button>
    </form>
  );
};

export default BlogForm;
