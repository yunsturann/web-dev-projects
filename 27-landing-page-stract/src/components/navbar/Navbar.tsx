// ** React Imports
import React from "react";

// ** Next Imports
import Image from "next/image";

// ** Constants
import { navItems } from "@/constants";

// ** Custom Components
import Container from "../shared/Container";
import NavItem from "./NavItem";
import Button from "../ui/Button";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav
      className="fixed lg:absolute top-0 w-full py-4 lg:py-16 bg-var-black/80 z-10"
      data-aos="fade-down"
      data-aos-once="true"
    >
      <Container className="flex items-center justify-between">
        {/* LOGO */}

        <Link href="/">
          <Image src="/images/brand.png" alt="brand" width={120} height={37} />
        </Link>

        {/* NAV-ITEMS */}
        <ul className="hidden lg:flex items-center gap-x-9">
          {navItems.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </ul>
        {/* CONTACT US BTN */}
        <Button className="hidden lg:block">
          <Link href="/contact">Contact Us</Link>
        </Button>

        {/* MOBILE NAV */}
        <MobileNav />
      </Container>
    </nav>
  );
};

export default Navbar;
