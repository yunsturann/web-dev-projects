import React, { FC } from "react";

interface RatingProps {
  number: string;
  title: string;
  aosDelay?: string;
}

const Rating: FC<RatingProps> = ({ number, title, aosDelay = "100" }) => {
  return (
    <div
      className="flex flex-col gap-y-3"
      data-aos="slide-up"
      data-aos-delay={aosDelay}
    >
      <h3 className="text-4xl lg:text-5xl font-semibold text-var-blue">
        {number}
      </h3>
      <p className="text-white">{title}</p>
    </div>
  );
};

export default Rating;
