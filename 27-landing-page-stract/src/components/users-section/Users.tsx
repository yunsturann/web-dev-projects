// ** React Imports
import React from "react";

// ** Next.js Imports
import Image from "next/image";

// ** Custom Components
import Container from "../shared/Container";

const Users = () => {
  return (
    <section
      className="pt-24 lg:pt-96 pb-4 sm:pb-16 lg:pb-24"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="500"
    >
      <Container className="relative h-36">
        <Image
          src="/images/users.png"
          alt="users"
          fill
          className="object-cover"
        />
      </Container>
    </section>
  );
};

export default Users;
