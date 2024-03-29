import React, { FC } from "react";
import { PricingItem } from "../types/types";
import Image from "next/image";
import { cn } from "@/lib/utlis";

interface PricingCardProps {
  item: PricingItem;
  isMonthly: boolean;
  isActive: boolean;
  handleClick: (id: number) => void;
}

const PricingCard: FC<PricingCardProps> = ({
  item,
  isMonthly,
  isActive,
  handleClick,
}) => {
  return (
    <div
      className={cn(
        "sm:h-[230px] w-full sm:max-w-[230px] border border-light-gray rounded-lg p-2 sm:p-4 flex sm:flex-col gap-x-4 sm:justify-between cursor-pointer shadow-sm transition duration-300",
        {
          "bg-magnolia": isActive,
          "border-purplish-blue": isActive,
        }
      )}
      onClick={() => handleClick(item.id)}
    >
      <Image src={item.icon} alt={item.title} width={40} height={40} />

      {/* CONTENT */}
      <div className="text-marine-blue">
        <h3 className="font-semibold ">{item.title}</h3>
        <p className="text-cool-gray text-sm sm:text-base">
          ${isMonthly ? item.price.monthly + "/mo" : item.price.yearly + "/yr"}
        </p>
        <p className=" text-purplish-blue max-sm:text-xs">
          {!isMonthly && "2 months free"}
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
