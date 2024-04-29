// ** React Imports
import React from "react";

// ** Next Imports
import Image from "next/image";

// ** Constants
import { navItems } from "@/constants";

// ** Custom Components
import Container from "../Container";
import NavItem from "./NavItem";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <Container className="h-16 md:h-24 border-b border-gray-200 flex justify-between items-center">
        {/* LEFT SIDE */}
        <div className="h-full flex items-center gap-x-6 md:gap-x-12 ">
          {/* LOGO */}
          <Link href={"/"}>
            <Image src="/images/logo.svg" alt="Logo" width={140} height={40} />
          </Link>

          {/* NAVIGATION ITEMS */}
          <nav className="h-full flex items-center">
            <ul className="h-full flex items-center gap-x-6">
              {navItems.map((item) => (
                <NavItem key={item.name} {...item} />
              ))}
            </ul>
          </nav>
        </div>
        {/* Right SIDE */}
        <div className="flex items-center gap-x-6 md:gap-10">
          {/* BASKET */}
          <Image
            src="/images/icon-cart.svg"
            alt="cart"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-75 transition"
          />
          {/* PROFILE */}
          <div className="cursor-pointer rounded-full border border-transparent hover:border-primary-orange transition">
            <Image
              src="/images/image-avatar.png"
              alt="user"
              width={40}
              height={40}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
