// ** React Imports
import React from "react";

// ** Next Imports
import Image from "next/image";

// ** Constants
import { securityItems } from "@/constants";

// ** Custom Components
import Container from "../shared/Container";
import SecurityItem from "./SecurityItem";

const Security = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F9FAFC]">
      <Container className="space-y-12">
        {/* Header */}
        <header className="w-2/3 max-w-[630px] mx-auto text-center space-y-4">
          <h2 className="heading_two" data-aos="fade-left">
            Cyber Security <br /> Penetration Testing Data
          </h2>
          <p className="text-lg text-var-gray" data-aos="fade-right">
            Data analysis software is a type of software tool used for data
            analysis and reporting. It is designed to help businesses,
            organizations.
          </p>
        </header>

        {/* CONTENT */}
        <div className="flex justify-center lg:justify-between gap-x-6">
          {/* left-img */}
          <div className="flex-1 hidden lg:block relative">
            <Image
              src="/images/security.png"
              alt="security"
              fill
              className="object-cover"
            />
          </div>

          {/* Security Features*/}
          <ul className="lg:w-1/2 xl:w-[35%]">
            {securityItems.map((item, index) => {
              if (index === 0) {
                return <SecurityItem key={item.title} {...item} isActive />;
              }
              return (
                <SecurityItem
                  key={item.title}
                  {...item}
                  aosDelay={((index + 1) * 150).toString()}
                />
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Security;
