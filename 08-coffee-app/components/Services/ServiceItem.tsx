import Image from "next/image";
import React from "react";

interface ServiceItemProps {
  name: string;
  desc: string;
  src: string;
  aosDelay: string;
}

const ServiceItem: React.FC<ServiceItemProps> = (item) => {
  return (
    <article
      className="group hover:bg-gray-200 p-4 h-full flex flex-col items-center shadow-2xl rounded-2xl text-center transition duration-300"
      data-aos="fade-down"
      data-aos-once="false"
      data-aos-delay={item.aosDelay}
    >
      {/* image */}
      <Image
        src={item.src}
        alt={item.name}
        width={200}
        height={200}
        className="object-contain group-hover:scale-110 transition duration-300 rotate-0 group-hover:rotate-12"
      />
      {/* title */}

      <h3 className="font-poppins font-bold text-2xl mb-2 text-dark">
        {item.name}
      </h3>
      {/* description */}
      <p className="text-dark/90">{item.desc}</p>
    </article>
  );
};

export default ServiceItem;
