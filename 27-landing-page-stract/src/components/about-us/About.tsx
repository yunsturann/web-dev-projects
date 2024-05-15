// ** React Imports
import React from "react";

// ** Next Imports
import Image from "next/image";

// ** Custom Components
import Container from "../shared/Container";
import Button from "../ui/Button";
import Rating from "./Rating";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-var-black text-white relative"
    >
      <Container className="flex flex-col lg:flex-row justify-between gap-20">
        {/* Left Img */}
        <div
          className="flex-1 relative min-h-[320px] lg:h-[460px] w-2/3 lg:w-full mx-auto"
          data-aos="flip-up"
        >
          <Image
            src="/images/about-us.png"
            alt="About-us-image"
            fill
            className="object-cover"
          />
        </div>
        {/* Content */}
        <div className="flex-1 max-lg:text-center">
          <h2
            className="text-4xl lg:text-5xl font-semibold leading-[1.2]"
            data-aos="slide-up"
          >
            Know More About
            <br /> Stract
          </h2>
          <p className="mt-4 mb-8 text-var-gray" data-aos="slide-up">
            Stract is very important because of some security threats and
            cyber-attacks. This software protects the data. Cybersecurity is
            important because not only it helps to secure information but also
            our system from virus attack. Cybersecurity is important because not
            only it helps to secure information but also our system.
          </p>
          {/* ratings */}
          <div className="flex items-center max-lg:justify-center gap-x-6 lg:gap-x-16">
            <Rating number="4.5/5" title="Customer Rating" aosDelay="150" />
            <Rating number="425" title="Security Testing" aosDelay="300" />
          </div>
          <div data-aos="slide-up">
            <Button className="mt-12">Learn More</Button>
          </div>
        </div>
      </Container>
      {/* top-left circle*/}
      <div className="absolute top-0 left-0 size-24 bg-var-blue rounded-br-full"></div>
      {/* Bottom-right triangle */}
      <div className="absolute bottom-6 right-0">
        <Image
          src="/images/triangle.png"
          alt="triangle-vector"
          width={48}
          height={68}
        />
      </div>
    </section>
  );
};

export default About;
