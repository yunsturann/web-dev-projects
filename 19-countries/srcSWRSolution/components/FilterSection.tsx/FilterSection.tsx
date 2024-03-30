import React, { ChangeEvent, useState } from "react";
import { regionItems } from "@/constants";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/router";

const FilterSection = () => {
  const router = useRouter();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    if (region === "all") {
      router.push(`/`);
      return;
    }
    router.push(`/region/${region}`);
  };

  return (
    <section className="h-32 flex flex-col sm:flex-row justify-between gap-x-4 items-center">
      {/* SEARCH FORM */}
      <form className="group flex items-center gap-4 bg-white dark:bg-dark-blue-dm px-6 w-1/3 min-w-[300px] shadow-md rounded-md">
        <IoIosSearch size={24} />
        <input
          type="text"
          name="search"
          placeholder="Search for a country..."
          className="text-lg w-full py-3 outline-none bg-white dark:bg-dark-blue-dm"
        />
      </form>

      {/* FILTER BY REGION */}
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
    </section>
  );
};

export default FilterSection;
