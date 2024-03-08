import { pricingItems } from "@/constants/constants";
import { FormContext, FormContextType } from "@/contexts/FormContext";
import React, { useContext } from "react";

const Step4 = () => {
  const { activePlanIndex, isMonthly, selectedAddOns, setStep } =
    useContext<FormContextType>(FormContext);

  const plan = pricingItems[activePlanIndex];

  const totalPriceCalculator = () => {
    let sum = 0;
    if (isMonthly) {
      sum = plan.price.monthly;
      selectedAddOns.forEach((addOn) => {
        sum += addOn.price.monthly;
      });
      return sum;
    }
    sum = plan.price.yearly;
    selectedAddOns.forEach((addOn) => {
      sum += addOn.price.yearly;
    });
    return sum;
  };
  const totalPrice = totalPriceCalculator();

  return (
    <div className="h-full ">
      {/* PLAN & ADD-ONS SECTION */}
      <div className="bg-slate-100 p-4 sm:p-6 rounded-lg">
        {/* SELECTED PLAN */}
        <div className="flex items-center justify-between text-marine-blue">
          <div className="">
            <h2 className="text-lg font-semibold">
              {plan.title} {isMonthly ? "(Monthly)" : "(Yearly)"}
            </h2>
            <span
              className="underline text-gray-400 hover:text-gray-600 cursor-pointer transition"
              onClick={() => setStep(2)}
            >
              Change
            </span>
          </div>
          <p className="font-medium text-lg">
            $
            {isMonthly ? plan.price.monthly + "/mo" : plan.price.yearly + "/yr"}
          </p>
        </div>
        {/* SEPARATOR */}
        <hr className="h-0.5 bg-gray-300 my-2 sm:my-4" />
        {/* ADD-ONS */}
        <div className="space-y-2 sm:space-y-4">
          {selectedAddOns.map((addOn) => (
            <div key={addOn.id} className="flex justify-between items-center">
              <p className="text-gray-400">{addOn.title}</p>
              <span className="text-marine-blue ">
                +$
                {isMonthly
                  ? addOn.price.monthly + "/mo"
                  : addOn.price.yearly + "/yr"}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* TOTAL PRICE SECTION */}
      <div className="flex justify-between items-center p-4 sm:p-6">
        <p className="text-gray-400">
          Total {isMonthly ? "(per month)" : "(per year)"}
        </p>
        <span className="text-purplish-blue text-xl font-bold">
          +$
          {isMonthly ? totalPrice + "/mo" : totalPrice + "/yr"}
        </span>
      </div>
    </div>
  );
};

export default Step4;
