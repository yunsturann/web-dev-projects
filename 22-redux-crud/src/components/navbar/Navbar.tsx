// ** React
import React from "react";

// ** Custom Components
import Container from "../Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="py-4 sm:py-5 bg-gray-700 text-white shadow-md">
      <Container className="flex justify-between items-center ">
        {/* Logo */}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-wider">
          <Link href={"/"}>Redux</Link>
        </h2>

        {/* Nav List */}
        <nav className="space-x-4">
          <Link
            href={"/"}
            className="text-lg sm:text-xl font-medium px-3 p-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            href={"/user/create"}
            className="text-lg sm:text-xl font-medium px-3 p-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Add User
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
