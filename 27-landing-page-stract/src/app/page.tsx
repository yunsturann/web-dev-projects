// ** React Imports
import React from "react";

// ** Custom Components
import Hero from "@/components/hero-section/Hero";
import Users from "@/components/users-section/Users";
import Services from "@/components/services-section/Services";
import Security from "@/components/security-section/Security";
import About from "@/components/about-us/About";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Users />
      <Services />
      <Security />
      <About />
    </>
  );
};

export default HomePage;
