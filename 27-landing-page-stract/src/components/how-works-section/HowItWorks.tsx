// ** React Imports
import React from "react";

// ** Next Imports
import Image from "next/image";

// ** Constants
import { howItWorksItems } from "@/constants";

// ** Custom Components
import Container from "../shared/Container";
import Step from "./Step";

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32">
      <Container>
        {/* Header */}
        <header className="w-2/3 max-w-[630px] mx-auto text-center space-y-4">
          <h2 className="heading_two" data-aos="fade-left">
            How Stract Works
          </h2>
          <p className="text-lg text-var-gray" data-aos="fade-right">
            Data analysis software is a type of software tool used for data
            analysis and reporting. It is designed to help businesses,
            organizations.
          </p>
        </header>

        {/* Content */}
        <div className="mt-14 flex flex-col lg:flex-row justify-between items-center">
          {howItWorksItems.map((item, index) => {
            if (howItWorksItems.length - 1 === index)
              return (
                <Step
                  key={item.title}
                  {...item}
                  aosDelay={(howItWorksItems.length * 150).toString()}
                />
              );

            return (
              <>
                <Step
                  key={item.title}
                  {...item}
                  aosDelay={((index + 1) * 150).toString()}
                />
                <div className="w-[140px] max-lg:h-[140px] h-4 relative max-lg:rotate-90 max-lg:transform max-lg:my-4">
                  <Image
                    src="/images/arrow.png"
                    alt="arrow-vector"
                    fill
                    className="object-contain"
                    data-aos="fade-up"
                    data-aos-delay={((index + 1) * 200).toString()}
                  />
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
