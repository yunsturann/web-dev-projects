import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
// import { getSinglePost } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getSinglePost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const getSinglePost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getSinglePost(slug);
  // const post = await getSinglePost(slug);

  return (
    <div className={styles.container}>
      {/* Left section */}
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="Post image" fill className={styles.img} />
        </div>
      )}
      {/* Right section */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        {/*Detail */}
        <div className={styles.detail}>
          {/* Author */}
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          {/* Publish Date */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 10)}
            </span>
          </div>
        </div>
        {/* Description */}
        <p className={styles.content}>{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
