import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      {/* top section */}
      <div className={styles.top}>
        {/* img part */}
        {post.img ? (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="post" fill className={styles.img} />
          </div>
        ) : (
          <div
            className={styles.imgContainer}
            style={{
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              background: "gray",
            }}
          >
            <div>IMG not found</div>
          </div>
        )}
        {/* date part */}
        <span className={styles.date}>
          {post.createdAt.toString().slice(0, 10)}
        </span>
      </div>

      {/* bottom section */}
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
