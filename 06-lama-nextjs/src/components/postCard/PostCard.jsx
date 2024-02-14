import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      {/* top section */}
      <div className={styles.top}>
        {/* img part */}
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20145983/pexels-photo-20145983/free-photo-of-isik-gokyuzu-hava-uzay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post"
            fill
            className={styles.img}
          />
        </div>
        {/* date part */}
        <span className={styles.date}>16.01.2002</span>
      </div>

      {/* bottom section */}
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          laboriosam beatae dolores natus debitis molestiae facilis eligendi,
          Lorem ipsum dolor sit amet. officia qui, eum culpa et iste in maxime.
        </p>
        <Link href={"/blog/post"} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
