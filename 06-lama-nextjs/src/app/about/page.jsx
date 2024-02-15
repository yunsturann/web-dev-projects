import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About page of the website",
};

const statics = [
  {
    title: "10 K+",
    desc: "Year of Experience",
  },
  {
    title: "100+",
    desc: "Happy Clients",
  },
  {
    title: "1000+",
    desc: "Projects Completed",
  },
];

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil
          non, distinctio assumenda vel provident! Consequuntur accusamus,
          repudiandae culpa at fugit minus cupiditate unde quos eligendi
          consectetur modi, enim sint obcaecati! Mollitia officia error commodi
          eos! Iure ipsum dolore obcaecati.
        </p>
        <div className={styles.boxes}>
          {statics.map(({ title, desc }, index) => (
            <div key={index} className={styles.box}>
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={"/about.png"} alt="about-img" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
