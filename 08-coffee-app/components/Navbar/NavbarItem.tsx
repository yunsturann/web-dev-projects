import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  name: string;
  link: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, link }) => {
  return (
    <Link href={link} className="navItem cursor-pointer ">
      {name}
    </Link>
  );
};

export default NavbarItem;
