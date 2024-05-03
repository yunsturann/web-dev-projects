"use client";

// ** React Imports
import React, { useEffect } from "react";

// ** Aos Imports
import AOS from "aos";
import "aos/dist/aos.css";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return <>{children}</>;
};

export default Provider;
