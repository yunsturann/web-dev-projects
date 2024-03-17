import Image from "next/image";
import React from "react";

const CardBack = () => {
  return (
    <div className="relative left-1/2 top-3 ">
      <Image
        src="/images/bg-card-back.png"
        alt="Card Back"
        width={320}
        height={220}
      />
      <p className="absolute top-[44%] right-10 text-sm text-white tracking-widest font-semibold">
        123
      </p>
    </div>
  );
};

export default CardBack;
