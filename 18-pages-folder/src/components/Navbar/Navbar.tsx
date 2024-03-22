import { navItems } from "@/constants";
import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 h-20 text-white  px-8">
      {/* LOGO */}
      <Link href="/" className="hover:text-yellow-500 transition duration-300">
        LOGO
      </Link>
      {/* NAV ITEMS */}
      <nav className="flex gap-4">
        {navItems.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
