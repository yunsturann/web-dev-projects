import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface ServiceProps {
  title: string;
  desc: string;
  img: string;
  isActive?: boolean;
}

const Service: FC<ServiceProps> = (props) => {
  const { title, desc, img, isActive = false } = props;
  return (
    <li
      className={cn("bg-gray-200 rounded-lg p-5 shadow-lg", {
        "bg-var-blue text-white ": isActive,
      })}
    >
      <Image
        src={img}
        alt={title}
        width={56}
        height={56}
        className="mb-8 object-contain"
      />

      <h3 className="text-2xl mb-3 font-semibold">{title}</h3>
      <p className="opacity-75">{desc}</p>
    </li>
  );
};

export default Service;
