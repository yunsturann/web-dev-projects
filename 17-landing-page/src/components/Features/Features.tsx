import React from "react";
import Container from "../Container";
import { featureItems } from "@/constants";
import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <section className="bg-very-light-gray py-24 max-md:text-center">
      <Container className="max-md:px-12">
        {/* HEADER */}
        <header className="space-y-6 mb-16">
          <h2 className="heading_two">Why choose Easybank?</h2>
          <p className="text-grayish-blue text-lg">
            We leverage Open Banking to turn your bank account into your
            financial hub.
            <br /> Control your finances like never before.
          </p>
        </header>
        {/* FEATURES LIST */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureItems.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Features;
