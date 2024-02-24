"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { testimonials } from "@/constants/constants";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 sm:py-14">
      <div className="container space-y-14">
        {/* title */}
        <header className="space-y-4">
          <h2 className="heading_two font-second2">Testimonials</h2>
          <hr className="h-1 w-full max-w-xl mx-auto bg-gradient-to-r from-secondary to-primary/50" />
        </header>
        {/* TESTIMONIALS */}

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
