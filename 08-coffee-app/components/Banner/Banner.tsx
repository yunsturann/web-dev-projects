import { coffeeTypes } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import { GrSecure } from "react-icons/gr";

const Banner = () => {
  return (
    <section className="py-10 md:py-14 relative mb-60">
      {/* BACKGROUND */}
      <div className="absolute inset-0 ">
        <Image
          src="/images/h2.jpg"
          alt="bg"
          fill
          className="object-cover -z-20 rotate-180"
        />
        {/* BG OVERLAY*/}
        <div className="absolute inset-0 bg-black/10 -z-10 "></div>
      </div>
      {/* CONTAINER CONTENT*/}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="flex justify-center items-center" data-aos="zoom-in">
          <Image
            src="/images/2.png"
            alt="banner"
            width={400}
            height={400}
            className="object-contain animate_zigzag"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center gap-4  max-sm:text-center">
          <h2
            className="text-4xl font-semibold font-second2"
            data-aos="fade-up"
          >
            Premium Coffee
          </h2>
          <p className="text-sm text-gray-900" data-aos="fade-up">
            Experience Luxury in Every Cup: Discover Our Premium Coffee
            Selection. Sourced from the Finest Beans, Delight Your Senses with
            Rich Aromas and Exquisite Flavors. Elevate Your Coffee Ritual Today!
          </p>
          <div className="flex justify-between items-start gap-4 mt-3">
            {/*Left Section Icons */}
            <div className="basis-2/5 flex flex-col gap-3">
              {coffeeTypes.map((item, index) => (
                <div
                  key={item.id}
                  className="flex max-sm:flex-col max-sm:justify-center items-center gap-2 font-poppins"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100 + 1}`}
                >
                  <div
                    className="rounded-full p-3"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <item.icon size={26} />
                  </div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            {/*Right Section Tea Lover */}
            <div
              className="basis-3/5 space-y-2 border-l-4 border-primary/70 pl-2"
              data-aos="slide-left"
            >
              <h3 className="text-2xl font-semibold font-second2">Tea Lover</h3>
              <p className="text-sm text-gray-900">
                Tea Enthusiasts, Rejoice! Explore Our Diverse Range of Fine
                Blends and Experience Pure Serenity in Every Sip. Elevate Your
                Tea Time Today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
