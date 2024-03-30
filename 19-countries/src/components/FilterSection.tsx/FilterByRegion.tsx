import React, { ChangeEvent } from "react";
import { regionItems } from "@/constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { filterCountries } from "@/store/countries-store";

const FilterByRegion = () => {
  console.log("Filtered By Region rendered");

  const dispatch = useDispatch<AppDispatch>();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    dispatch(filterCountries(region));
  };

  return (
    <select
      onChange={handleSelectChange}
      className="py-3 px-6 outline-none shadow-md rounded-md group bg-white dark:bg-dark-blue-dm text-base sm:text-lg"
    >
      <option value="" className="group-focus:hidden ">
        Filter by Region
      </option>
      {regionItems.map((region) => (
        <option key={region.name} value={region.value}>
          {region.name}
        </option>
      ))}
    </select>
  );
};

export default FilterByRegion;
