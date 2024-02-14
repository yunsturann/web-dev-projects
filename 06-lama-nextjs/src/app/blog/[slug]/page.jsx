import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      {/* Left section */}
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20145983/pexels-photo-20145983/free-photo-of-isik-gokyuzu-hava-uzay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Post image"
          fill
          className={styles.img}
        />
      </div>
      {/* Right section */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        {/*Detail */}
        <div className={styles.detail}>
          {/* Avatar */}
          <Image
            src="https://images.pexels.com/photos/20145983/pexels-photo-20145983/free-photo-of-isik-gokyuzu-hava-uzay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Post image"
            height={70}
            width={70}
            className={styles.avatar}
          />
          {/* Author */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Yunus Turan</span>
          </div>
          {/* Publish Date */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>16.01.2002</span>
          </div>
        </div>
        {/* Description */}
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          delectus unde? Esse hic porro dolorum laudantium nam illo earum,
          repellendus labore vero, vel natus est? Architecto consectetur dolores
          molestiae. Excepturi deleniti veritatis maxime provident ipsum
          delectus omnis consequatur vel vero!
        </p>
      </div>
    </div>
  );
};

export default SinglePostPage;
