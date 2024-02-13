import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <Image src={"/about.png"} alt="about-img" width={500} height={500} />
    </div>
  );
};

export default AboutPage;
