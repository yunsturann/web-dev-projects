import { navItems } from "@/constants";
import Link from "next/link";
import React, { FC } from "react";

type NavItemProps = (typeof navItems)[number];

const NavItem: FC<NavItemProps> = ({ name, path }) => {
  return (
    <Link
      href={path}
      className="hover:bg-gray-600 hover:text-yellow-500 px-3 py-2 rounded-lg transition duration-300"
    >
      <p>{name}</p>
    </Link>
  );
};

export default NavItem;
