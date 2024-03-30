import React from "react";

import SearchCountry from "./SearchCountry";
import FilterByRegion from "./FilterByRegion";

const FilterSection = () => {
  return (
    <section className="h-32 flex flex-col sm:flex-row justify-between gap-x-4 items-center">
      {/* SEARCH FORM */}
      <SearchCountry />
      {/* FILTER BY REGION */}
      <FilterByRegion />
    </section>
  );
};

export default FilterSection;
