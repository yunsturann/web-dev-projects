import { resolve } from "styled-jsx/css";
import styles from "./postUser.module.css";
import Image from "next/image";
import { getSingleUser } from "@/lib/data";

// const getUser = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) throw new Error("Failed to fetch user");
//   //   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // const user = await getUser(userId);

  const user = await getSingleUser(userId);

  return (
    <div className={styles.container}>
      <Image
        src={user.img || "/noavatar.png"}
        alt="Post image"
        height={70}
        width={70}
        className={styles.avatar}
      />

      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
