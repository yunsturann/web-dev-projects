import Image from "next/image";
import React from "react";

interface TestimonialItemProps {
  id: number;
  name: string;
  text: string;
  img: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  name,
  text,
  img,
  id,
}) => {
  return (
    <article
      className="p-6 h-[360px] max-w-sm mx-auto rounded-2xl text-light shadow-xl bg-gradient-to-b from-primary/70 to-primary "
      data-aos="fade-down"
      data-aos-delay={`${(id + 1) * 100}`}
    >
      {/* IMAGE */}
      <Image
        src={img}
        alt={name}
        width={160}
        height={160}
        className="object-container rounded-full mx-auto"
      />
      {/* TEXT */}
      <div className="text-center  mt-4 space-y-2">
        <h3 className="font-poppins text-xl font-bold tracking-wider">
          {name}
        </h3>
        <p className="text-gray-200">{text}</p>
      </div>
    </article>
  );
};

export default TestimonialItem;
