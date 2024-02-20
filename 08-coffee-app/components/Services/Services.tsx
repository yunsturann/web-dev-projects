import React from "react";
import { servicesItems } from "@/constants/constants";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section className="py-10 sm:py-14 ">
      <div className="container space-y-14">
        {/* title */}
        <header className="space-y-4">
          <h2 className="heading_two font-second2">Best Coffee For You</h2>
          <hr className="h-1 w-full max-w-xl mx-auto bg-gradient-to-r from-secondary to-primary/50" />
        </header>
        {/* services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {servicesItems.map((item) => (
            <ServiceItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
