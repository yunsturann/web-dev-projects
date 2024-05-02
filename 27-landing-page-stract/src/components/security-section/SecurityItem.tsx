// ** React Import
import React, { FC } from "react";

// ** Next Imports
import Image from "next/image";

// ** Utils
import { cn } from "@/lib/utils";

interface SecurityItemProps {
  title: string;
  desc: string;
  img: string;
  isActive?: boolean;
}

const SecurityItem: FC<SecurityItemProps> = (props) => {
  const { title, desc, img, isActive } = props;
  return (
    <div
      className={cn("flex items-start justify-between gap-4 p-6 rounded-lg", {
        "bg-white shadow-lg": isActive,
      })}
    >
      <Image src={img} alt={title} width={50} height={50} />
      <div>
        <h3 className="mb-3 font-bold text-xl ">{title}</h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default SecurityItem;
