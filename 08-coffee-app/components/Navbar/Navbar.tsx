import React, { FC } from "react";
import { menuDatas } from "@/constants/constants";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import Button from "../Buttons/Button";
import { FaCoffee } from "react-icons/fa";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/75 shadow-lg text-light">
      <div className="container py-3">
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
          className="flex items-center  justify-between"
        >
          {/* Logo */}
          <Link href={"/"} className="flex items-center gap-2">
            <Image src="/images/logo/1.png" alt="logo" height={50} width={50} />
            <h1 className="font-pacifiko font-bold text-xl md:text-2xl lg:text-3xl">
              CoffeeApp
            </h1>
          </Link>
          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xl py-4">
            {menuDatas.map((menu) => (
              <NavbarItem key={menu.id} {...menu} />
            ))}
          </nav>
          {/* Order Button*/}
          <Button
            className="font-second2 bg-brandDark text-xl hover:scale-105 duration-300"
            icon={<FaCoffee />}
            label="Order"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
