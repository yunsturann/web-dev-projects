import { addOnItems } from "@/constants/constants";
import React, { useContext } from "react";
import AddOnsItem from "../AddOnsItem";
import { TAddOnsItem } from "../../types/types";
import { FormContext, FormContextType } from "@/contexts/FormContext";

const Step3 = () => {
  const { selectedAddOns, setSelectedAddOns } =
    useContext<FormContextType>(FormContext);

  const handleSelect = (item: TAddOnsItem) => {
    // Check if the item is already in the selectedAddOns array
    setSelectedAddOns(
      selectedAddOns.includes(item)
        ? selectedAddOns.filter((i) => i.id !== item.id)
        : [...selectedAddOns, item]
    );
  };

  return (
    <div className="h-full space-y-3 sm:space-y-5">
      {addOnItems.map((item, index) => {
        const isSelected = selectedAddOns.includes(item);
        return (
          <AddOnsItem
            key={item.id}
            item={item}
            handleClick={handleSelect}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};

export default Step3;
