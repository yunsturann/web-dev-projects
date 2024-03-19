import Image from "next/image";
import React from "react";
import CardLogo from "./CardLogo";
import { useFormContext } from "react-hook-form";
import { FormType } from "@/types";

const CardFront = () => {
  const { watch } = useFormContext<FormType>();
  const { cardNumber, cardholder, expDate } = watch();

  return (
    <div className="absolute lg:relative max-lg:top-20 lg:left-1/3 lg:bottom-3 text-white z-30">
      <Image
        unoptimized
        src="/images/bg-card-front.png"
        alt="Card Front"
        width={320}
        height={220}
      />
      <div className="absolute top-0 left-0 size-full p-4 flex flex-col justify-between">
        <CardLogo />
        <div className="space-y-3">
          {/* CARD NUMBER */}
          <p className="tracking-widest text-xl">
            {cardNumber || "#### #### #### ####"}
          </p>

          <div className="flex justify-between items-center text-sm">
            <p className="uppercase tracking-wider">
              {cardholder || "Cardholder"}
            </p>
            <p>{`${expDate?.month || "••"}/${expDate?.year || "••"}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
