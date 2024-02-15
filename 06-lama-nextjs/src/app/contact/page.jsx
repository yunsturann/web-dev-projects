import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact page of the website",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {/* Left, image container */}
      <div className={styles.imgContainer}>
        <Image
          src={"/contact.png"}
          alt="Contact Image"
          fill
          className={styles.img}
        />
      </div>
      {/* Right, form container */}
      <div className={styles.formContainer}>
        {/* Form */}
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
