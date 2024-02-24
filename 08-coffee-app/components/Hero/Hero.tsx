"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { heroItems } from "@/constants/constants";
import HeroItem from "./HeroItem";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[600px] bg-brandDark text-light flex justify-center items-center font-second2"
    >
      <div className="container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {heroItems.map((item) => (
            <SwiperSlide key={item.id}>
              <HeroItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
