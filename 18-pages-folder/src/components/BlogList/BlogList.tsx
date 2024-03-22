import useDeleteBlog from "@/services/Homepage/hooks/useDeleteBlog";
import { GetBlogModel } from "@/services/Homepage/types/GetBlogModel";
import Link from "next/link";
import React, { FC } from "react";
import { FaEdit } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

interface BlogListProps {
  blogs: GetBlogModel[];
}

const BlogList: FC<BlogListProps> = ({ blogs }) => {
  const { trigger } = useDeleteBlog();

  const handleDelete = async (id: string) => {
    try {
      await trigger(id);
    } catch (error) {
      alert("Error deleting blog");
    }
  };

  return (
    <ul className="space-y-3">
      {blogs.map((blog) => (
        <li
          key={blog._id}
          className="border border-black p-4 flex justify-between items-start "
        >
          {/* CONTENT */}
          <div className="flex-grow">
            <h2 className="text-xl font-medium ">{blog.title}</h2>
            <span className="text-xs">
              {blog.createdAt.toString().slice(0, 10)}
            </span>
            <p>{blog.content}</p>
          </div>
          {/* ICONS */}
          <div className="space-x-2">
            <Link href={`/blog/update/${blog._id}`}>
              <button className="p-1 hover:text-yellow-500 transition duration-300">
                <FaEdit className="size-6" />
              </button>
            </Link>
            <button
              className="p-1 hover:text-red-500 transition duration-300"
              onClick={() => handleDelete(blog._id)}
            >
              <FaX className="size-6" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
