import BlogList from "@/components/BlogList/BlogList";
import useGetBlogs from "@/services/Homepage/hooks/useGetBlogs";
import React from "react";

const HomePage = () => {
  const { data, error, isLoading, isValidating } = useGetBlogs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="bg-gray-200 flex-1 max-h-screen overflow-auto">
      <h1 className="heading_one my-8">Blogs</h1>
      <BlogList blogs={data} />
    </div>
  );
};

export default HomePage;
