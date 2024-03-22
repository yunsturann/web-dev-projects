import BlogForm from "@/components/BlogForm/BlogForm";
import useGetBlog from "@/services/Blog/hooks/useGetBlog";
import usePutBlog from "@/services/Blog/hooks/usePutBlog";
import { BlogFormDataType } from "@/types";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";

const BlogUpdatePage = () => {
  const router = useRouter();

  const { data, isLoading, error } = useGetBlog(router.query.id as string);
  const { trigger } = usePutBlog();

  if (!data?.success) {
    return <div>Blog not found</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  const initialData = {
    title: data.data.title,
    content: data.data.content,
  };

  const handleSubmit = async (e: FormEvent, formData: BlogFormDataType) => {
    e.preventDefault();
    const arg = {
      _id: router.query.id as string,
      title: formData.title,
      content: formData.content,
    };

    try {
      await trigger(arg);
      router.push("/");
    } catch (error) {
      alert("Failed to update blog");
    }
  };

  return (
    <div className="flex-1 py-8">
      <BlogForm
        heading="Edit Blog"
        initialData={initialData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default BlogUpdatePage;
