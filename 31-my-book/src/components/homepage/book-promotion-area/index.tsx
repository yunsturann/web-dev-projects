import "./book-promotion-area.scss";
// ** Constants
import {
  bookByGenres,
  popularBooks,
  recomendations,
  recommendendBooks,
} from "../../../constants";

// ** Custom components
import LeftSideList from "./left-side-list";
import CardsSection from "./cards-section";

const BookPromotionArea = () => {
  return (
    <div className="book-promotion-area">
      <div className="wrapper">
        {/* Left Filter Section */}
        <div className="left-side">
          {/* Book By Genre */}
          <LeftSideList title="Book By Genre" items={bookByGenres} />
          {/* Recommendations */}
          <LeftSideList title="Recomendations" items={recomendations} />
        </div>

        {/* Right Section Wrapper */}
        <div className="right-side">
          <CardsSection
            topTitle="Recommended"
            topBooks={recommendendBooks}
            bottomTitle="Popular"
            bottomBooks={popularBooks}
          />

          <CardsSection
            topTitle="This new story"
            topBooks={recommendendBooks}
            bottomTitle="Which they like"
            bottomBooks={popularBooks}
          />
        </div>
      </div>
    </div>
  );
};

export default BookPromotionArea;
