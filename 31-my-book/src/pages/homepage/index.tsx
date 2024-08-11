import "./homepage.scss";

// ** Custom Components
import Hero from "../../components/shared/hero";
import BookPromotionArea from "../../components/homepage/book-promotion-area";

const Homepage = () => {
  return (
    <>
      <Hero
        title="read and add your insight"
        desc="find your favorite book and read it here for free"
      />
      <BookPromotionArea />
    </>
  );
};

export default Homepage;
