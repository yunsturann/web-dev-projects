// ** Utils
import { formatVoteNumber } from "../../../../lib/utils";

// ** Types
import { IBook } from "../../../../types";

// ** Custom Components
import Stars from "../../../shared/stars";

interface CardsSectionProps {
  topTitle: string;
  topBooks: IBook[];
  bottomTitle: string;
  bottomBooks: IBook[];
}

const CardsSection = (props: CardsSectionProps) => {
  const { bottomBooks, bottomTitle, topBooks, topTitle } = props;

  return (
    <div className="card-section">
      {/* top */}
      <div className="top">
        <h2>{topTitle}</h2>

        <ul>
          {topBooks.map((book) => (
            <li key={book.id}>
              {/* img left */}
              <img src={book.image} alt={book.name} />

              {/* content */}
              <div className="content">
                <h3>{book.name}</h3>
                <p className="author">{book.author}</p>
                {/* Stars and votes */}
                <div className="evaluations">
                  <Stars activeStarNumber={book.star} />
                  <span className="vote">
                    {formatVoteNumber(book.votes)} votes
                  </span>
                </div>

                <p className="desc line-clamp-3">{book.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* bottom  */}
      <div className="bottom">
        <h2>{bottomTitle}</h2>

        <ul>
          {bottomBooks.map((book) => (
            <li key={book.id}>
              {/* img */}
              <img src={book.image} alt={book.name} />

              {/* Content */}
              <h3>{book.name}</h3>

              <p className="author">{book.author}</p>

              <Stars activeStarNumber={book.star} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardsSection;
