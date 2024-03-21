import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-x-6 justify-between min-h-[80vh] bg-white relative">
      {/* CONTENT */}
      <div className="basis-full md:basis-1/2 py-16 flex items-center justify-center ">
        <div className="w-2/3 md:w-1/2 space-y-8">
          <h1 className="text-3xl sm:text-5xl text-dark-blue">
            Next generation digital banking
          </h1>
          <p className="text-lg text-grayish-blue">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button className="gradient rounded-full px-8 py-3 hover:opacity-80">
            Request Invite
          </Button>
        </div>
      </div>
      {/* BG IMAGE */}
      <div className="basis-full md:basis-1/2 bg-mobile md:bg-desktop max-md:object-cover bg-right md:bg-left-bottom bg-no-repeat min-h-[300px]">
        {/* after xl */}
        <Image
          src={"/images/image-mockups.png"}
          alt="bg-mockups"
          width={850}
          height={850}
          className="absolute object-cover z-10 -bottom-28 -right-24 hidden xl:block"
        />
        {/* between md-xl  */}
        <Image
          src={"/images/image-mockups.png"}
          alt="bg-mockups"
          width={550}
          height={550}
          className="absolute object-cover z-10 bottom-24 -right-40 lg:-right-32 hidden md:block xl:hidden"
        />
        {/* from 0 to md  */}
        <Image
          src={"/images/image-mockups.png"}
          alt="bg-mockups"
          width={350}
          height={350}
          className="absolute object-cover z-10 -top-24 right-0 block md:hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
