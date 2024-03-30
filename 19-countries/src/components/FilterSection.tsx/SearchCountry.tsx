import { AppDispatch } from "@/store";
import { searchCountries } from "@/store/countries-store";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";

const SearchCountry = () => {
  console.log("Search Rendered");
  const dispatch = useDispatch<AppDispatch>();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(searchCountries(searchTerm));
  }, [searchTerm, dispatch]);

  return (
    <div className="group flex items-center gap-4 bg-white dark:bg-dark-blue-dm px-6 w-1/3 min-w-[300px] shadow-md rounded-md">
      <IoIosSearch size={24} />
      <input
        type="text"
        name="search"
        placeholder="Search for a country..."
        className="text-lg w-full py-3 outline-none bg-white dark:bg-dark-blue-dm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchCountry;
