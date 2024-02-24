"use client";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return <>{children}</>;
};

export default Provider;
