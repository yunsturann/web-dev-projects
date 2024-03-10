import React, { FC } from "react";
import { TAddOnsItem } from "../types/types";
import {
  FormContext,
  FormContextType,
  useContext,
} from "@/context/FormContext";
import { cn } from "@/lib/utlis";

interface AddOnsItemProps {
  item: TAddOnsItem;
  isSelected: boolean;
  handleClick: (item: TAddOnsItem) => void;
}

const AddOnsItem: FC<AddOnsItemProps> = ({ item, handleClick, isSelected }) => {
  const { isMonthly } = useContext<FormContextType>(FormContext);

  return (
    <div
      className={cn(
        "p-2 sm:p-4 flex flex-wrap justify-between items-center gap-2 sm:gap-4 border border-light-gray rounded-lg cursor-pointer",
        {
          "bg-slate-100 border-purplish-blue": isSelected,
        }
      )}
      onClick={() => handleClick(item)}
      draggable
    >
      {/* CHECKBOX */}
      <div className="px-2 sm:px-4">
        <input
          type="checkbox"
          className="size-4 cursor-pointer"
          checked={isSelected}
          onChange={() => handleClick(item)}
        />
      </div>
      {/* CONTENT */}
      <div className="flex-1">
        <h3 className="text-base sm:text-lg text-marine-blue font-semibold ">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base text-cool-gray">{item.desc}</p>
      </div>
      <div></div>
      {/* PRICE */}
      <p className="text-purplish-blue ">
        +${isMonthly ? item.price.monthly + "/mo" : item.price.yearly + "/yr"}
      </p>
    </div>
  );
};

export default AddOnsItem;
