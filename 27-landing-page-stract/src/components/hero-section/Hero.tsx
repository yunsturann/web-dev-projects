/* eslint-disable @next/next/no-img-element */

import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-var-black text-white">
      <div
        className="w-3/4 max-w-[700px] mx-auto mt-52 flex flex-col gap-y-12 text-center"
        data-aos="zoom-in-down"
        data-aos-once="true"
      >
        {/* Content */}
        <header>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 leading-[1.2]">
            <span className="text-var-blue underlined-item">Secure</span> your
            business,
            <br /> Secure your{" "}
            <span className="text-var-blue underlined-item">future</span>
          </h1>
          <p className="text-base sm:text-lg text-var-gray">
            Data analysis software is a type of software tool used for data
            analysis and reporting. It is designed to help businesses,
            organizations, and individuals process, visualize,
          </p>
        </header>
      </div>
      {/* Dashboard Image  */}
      <div
        className="relative bottom-0 left-0 text-blue-400 w-full flex justify-center"
        data-aos="zoom-in-down"
        data-aos-once="true"
      >
        <img src="/images/dashboard.png" alt="dashboard-image" />
      </div>
    </section>
  );
};

export default Hero;
