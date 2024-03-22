import React, { FormEvent } from "react";
import { useRouter } from "next/router";
import BlogForm from "@/components/BlogForm/BlogForm";
import { BlogFormDataType } from "@/types";
import usePostBlog from "@/services/Blog/hooks/usePostBlog";

const initialFormData: BlogFormDataType = {
  title: "",
  content: "",
};

const BlogCreatePage = () => {
  const router = useRouter();
  const { trigger } = usePostBlog();

  const handleSubmit = async (e: FormEvent, formData: BlogFormDataType) => {
    e.preventDefault();

    try {
      await trigger(formData);

      router.push("/");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex-1 py-8">
      <BlogForm
        heading="Add Blog"
        initialData={initialFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default BlogCreatePage;
