// ** React Imports
import React from "react";

// ** Custom Container
import Container from "../shared/Container";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-var-black -z-10"></div>
      {/* Contact Container */}
      <Container className="bg-var-blue py-12 md:py-20 flex flex-col items-center justify-center rounded-lg">
        {/* Header */}
        <header className="w-2/3 max-w-[630px] mx-auto text-center space-y-4 text-white mb-12">
          <h2 className="heading_two" data-aos="fade-left">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-80" data-aos="fade-right">
            Data analysis software is a type of software tool used for data
            analysis and reporting. It is designed to help businesses,
            organizations.
          </p>
        </header>
        {/* Contact Button */}
        <Button variant="black" data-aos="fade-left">
          Contact us
        </Button>
      </Container>
    </div>
  );
};

export default Contact;
