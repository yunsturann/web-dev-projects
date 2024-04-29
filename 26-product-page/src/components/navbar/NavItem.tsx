import Link from "next/link";
import React, { FC } from "react";

interface Props {
  name: string;
  url: string;
}

const NavItem: FC<Props> = (props) => {
  const { name, url } = props;

  return (
    <li className="nav-item flex items-center text-dark-grayish-blue hover:text-very-dark-blue transition duration-300 h-full">
      <Link href={url} className="h-full flex items-center">
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
