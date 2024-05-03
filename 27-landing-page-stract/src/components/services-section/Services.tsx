// ** React Imports
import React from "react";

// Constants
import { services } from "@/constants";

// ** Custom Components
import Container from "../shared/Container";
import Service from "./Service";

const Services = () => {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <header className="w-2/3 max-w-[630px] mx-auto text-center space-y-4">
          <h2 className="heading_two" data-aos="fade-right">
            Explore Our Data <br />
            <span className="text-var-blue">Services</span>
          </h2>
          <p className="text-lg text-var-gray" data-aos="fade-left">
            Data analysis software is a type of software tool used for data
            analysis and reporting. It is designed to help businesses,
            organizations.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-4 md:gap-y-10 md:gap-x-8">
          {services.map((service, index) => {
            if (index === 0) {
              return <Service key={service.title} {...service} isActive />;
            }
            return (
              <Service
                key={service.title}
                {...service}
                aosDelay={((index + 1) * 150).toString()}
              />
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Services;
