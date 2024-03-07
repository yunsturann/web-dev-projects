import { pricingItems } from "@/constants/constants";
import React, { useContext, useState } from "react";
import PricingCard from "../PricingCard";
import Button from "../ui/Button";
import { cn } from "@/lib/utlis";
import { FormContext, FormContextType } from "@/contexts/FormContext";

const Step2 = () => {
  const { isMonthly, setIsMonthly, activePlanIndex, setActivePlanIndex } =
    useContext<FormContextType>(FormContext);

  return (
    <div className="h-full space-y-6">
      {/* Pricing */}
      <div className="flex justify-between gap-4 lg:gap-10">
        {pricingItems.map((item, index) => {
          const isActive = activePlanIndex === index;
          return (
            <PricingCard
              key={item.id}
              item={item}
              isMonthly={isMonthly}
              isActive={isActive}
              handleClick={(id) => setActivePlanIndex(id)}
            />
          );
        })}
      </div>
      {/* OPTIONS */}
      <div className="bg-slate-100 flex justify-center items-center gap-4 p-2 rounded-xl text-purplish-blue">
        <Button
          variant={isMonthly ? "default" : "outline"}
          className={cn("border-pastel-blue focus:ring-0 font-medium ", {
            "bg-purplish-blue hover:bg-purplish-blue/80 text-white": isMonthly,
          })}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </Button>
        <Button
          variant={!isMonthly ? "default" : "outline"}
          className={cn(
            "border-pastel-blue hover:bg-slate-200 focus:ring-0 font-medium",
            {
              "bg-purplish-blue hover:bg-purplish-blue/80 text-white":
                !isMonthly,
            }
          )}
          onClick={() => setIsMonthly(false)}
        >
          Yearly
        </Button>
      </div>
    </div>
  );
};

export default Step2;
