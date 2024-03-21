import Articles from "@/components/Articles/Articles";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex-1">
      <Hero />
      <Features />
      <Articles />
    </div>
  );
};

export default HomePage;
