import Image from "next/image";
import React, { FC } from "react";

interface StepProps {
  img: string;
  title: string;
  desc: string;
  aosDelay?: string;
}

const Step: FC<StepProps> = (props) => {
  const { img, title, desc, aosDelay = "100" } = props;
  return (
    <div
      className="flex flex-col items-center gap-y-8 text-center w-full max-w-[260px]"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {/* Image */}
      <div>
        <Image src={img} alt={title} height={140} width={140} />
      </div>
      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-var-gray">{desc}</p>
      </div>
    </div>
  );
};

export default Step;
