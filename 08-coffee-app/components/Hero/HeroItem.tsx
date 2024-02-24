import React from "react";
import Button from "../Buttons/Button";
import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";

interface HeroItemProps {
  id: number;
  label1: string;
  label2: string;
  label3: string;
  src: string;
  text1: string;
  text2: string;
}

const HeroItem: React.FC<HeroItemProps> = ({
  label1,
  label2,
  label3,
  src,
  text1,
  text2,
}) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
      {/*Left Section */}
      <header className="flex flex-col justify-center pt-10 gap-5 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          {label1}{" "}
          <span className="font-pacifiko bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-green-200">
            {" "}
            {label2}{" "}
          </span>{" "}
          {label3}
        </h2>
        <div className="flex justify-center items-center">
          <Button
            icon={<BiChevronRight size={30} />}
            label="Visit"
            className="bg-secondary font-second2 text-xl hover:scale-105 "
          />
        </div>
      </header>
      {/*Right Section */}
      <div className=" flex justify-center items-center ">
        <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] grid place-items-center ">
          <Image
            src={src}
            alt="slider-item"
            fill
            className="object-contain animate-spin-slower"
            priority={true}
          />
          <p className="absolute top-0 left-0 bg-secondary p-4 rounded-xl bg-opacity-90 hover:bg-opacity-70 transition">
            {text1}
          </p>
          <p className="absolute bottom-0 right-0 bg-secondary p-4 rounded-xl bg-opacity-90 hover:bg-opacity-70 transition">
            {text2}
          </p>
        </div>
      </div>
    </article>
  );
};

export default HeroItem;
