import Link from "next/link";
import React, { FC } from "react";

interface ColumnProps {
  links: {
    name: string;
    href: string;
  }[];
  title: string;
}

const Column: FC<ColumnProps> = (props) => {
  const { links, title } = props;
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6 md:mb-8">{title}</h3>
      <ul className="flex flex-col gap-y-3 md:gap-y-5">
        {links.map(({ name, href }) => (
          <li
            key={name}
            className="text-var-gray text-xs hover:text-yellow-400 transition duration-300"
          >
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;
