import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      {/*Text, Left Side */}
      <div className={styles.textContainer}>
        {/*Title & desc */}
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus quae eos nesciunt. Pariatur placeat repellendus
          delectus doloribus.
        </p>
        {/*Buttons */}
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contacts</button>
        </div>
        {/*Brands */}
        <div className={styles.brands}>
          <Image
            src={"/brands.png"}
            alt="brands"
            fill
            className={styles.brand}
          />
        </div>
      </div>
      {/*Image, Right Side */}
      <div className={styles.imgContainer}>
        <Image
          src={"/hero.gif"}
          alt="hero-img"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
