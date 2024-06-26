import Container from "@/components/Container";
import FilterSection from "@/components/FilterSection.tsx/FilterSection";
import FlagList from "@/components/FlagList/FlagList";

import React from "react";

const HomePage = () => {
  // const currencyKeys = data.map((country) => Object.keys(country.currencies));

  return (
    <Container className="flex-1 flex flex-col">
      {/* FILTER SECTION */}
      <FilterSection />
      {/* FLAG LIST & FLAGS*/}
      <FlagList />
    </Container>
  );
};

export default HomePage;
