/* eslint-disable @next/next/no-img-element */
// ** React
import React from "react";
// ** Nextjs
import Link from "next/link";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="bg-bg bg-cover h-[102vh] w-full text-white mt-[-75px] relative overflow-hidden">
      <div className="h-full w-[90%] max-w-[1450px] mx-auto flex justify-center items-center gap-20 pt-[82px] ">
        <div className="grid items-center gap-6 grid-cols-1 md:grid-cols-2">
          <img
            src="images/hero-image.png"
            alt="product image"
            className="mx-auto rounded-xl order-last min-w-[500px] md:min-w-[800px] max-sm:px-5"
          />
          <div className="flex flex-col justify-center max-md:items-center space-y-4 max-md:text-center ">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter ">
                Visualize Success Daily
              </h2>
              <p className="max-w-[500px] md:text-xl text-gray-300">
                Take control of your projects with our simple yet powerful
                Kanban board.
              </p>
            </div>
            <Link href="sign-up">
              <Button text="Start Planning Now &#8594;" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
