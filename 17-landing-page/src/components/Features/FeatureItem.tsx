import Image from "next/image";
import React, { FC } from "react";

interface FeatureItemProps {
  title: string;
  description: string;
  img: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ description, img, title }) => {
  return (
    <li className="flex flex-col gap-6 max-md:items-center">
      <Image src={img} alt={title} width={70} height={70} />
      <h3 className="text-dark-blue text-xl font-medium mt-2">{title}</h3>
      <p className="text-grayish-blue">{description}</p>
    </li>
  );
};

export default FeatureItem;
