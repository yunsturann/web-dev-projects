import Image from "next/image";
import React from "react";
import CardLogo from "./CardLogo";

const CardFront = () => {
  return (
    <div className="relative left-1/3 bottom-3 text-white">
      <Image
        src="/images/bg-card-front.png"
        alt="Card Front"
        width={320}
        height={220}
      />
      <div className="absolute top-0 left-0 size-full p-4 flex flex-col justify-between">
        <CardLogo />
        <div className="space-y-3">
          {/* CARD NUMBER */}
          <p className="tracking-widest text-xl">1234 5678 9123 0000</p>
          <div className="flex justify-between items-center text-sm">
            <p className="uppercase tracking-wider">Yunus Turan</p>
            <p>09/26</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
