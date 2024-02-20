"use client";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Banner from "@/components/Banner/Banner";
import Download from "@/components/DownloadSection/Download";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Download />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
