import Link from "next/link";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>yunusdev</div>

      <Link href={"https://www.youtube.com/@LamaDev"} className={styles.text}>
        💗 Lamadev Youtube &copy; All rights reserved.
      </Link>
    </div>
  );
};

export default Footer;
