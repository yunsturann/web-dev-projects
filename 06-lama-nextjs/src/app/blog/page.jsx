import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";

const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 600 },
  }); // 1 hour revalidation = 3600 seconds
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export const metadata = {
  title: "Blog",
  description: "This is the blog page",
};

const BlogPage = async () => {
  // FETCH DATA WITH API ROUTE
  const posts = await getPosts();
  // FETCH DATA WITH SERVER ACTION
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post._id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
