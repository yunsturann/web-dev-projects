import "./stars.scss";

// ** Custom Components
import Star from "./star";

interface StarsProps {
  totalStarNumber?: number;
  activeStarNumber: number;
}

const Stars = (props: StarsProps) => {
  const { totalStarNumber = 5, activeStarNumber } = props;

  const stars = [];
  let j = activeStarNumber;

  for (let i = 0; i < totalStarNumber; i++) {
    if (j) {
      stars.push(<Star color="#FF971D" />);
      j--;
    } else {
      stars.push(<Star />);
    }
  }

  return <div className="stars">{stars}</div>;
};

export default Stars;
