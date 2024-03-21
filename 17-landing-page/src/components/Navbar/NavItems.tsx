import { navItems } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

const NavItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* DESKTOP NAV */}
      <ul className="hidden lg:flex gap-6 text-grayish-blue">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="pb-[3px] bg-white hover:gradient "
          >
            <li className="py-6 bg-white">{item.name}</li>
          </Link>
        ))}
      </ul>
      {/* MOBILE NAV */}
      <div className="block lg:hidden">
        {/* BUTTON */}
        <div
          className="cursor-pointer hover:text-red-500 transition duration-300"
          onClick={handleMenu}
        >
          {isOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
        </div>
        {/* MOBILEMENU */}
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
};

export default NavItems;
