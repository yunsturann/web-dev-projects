import Container from "@/components/Container";
import FilterSection from "@/components/FilterSection.tsx/FilterSection";
import FlagList from "@/components/FlagList/FlagList";
import { useGetFlags } from "@/services/homepage/hooks/useGetFlags";
import React from "react";

const HomePage = () => {
  const { data, isLoading, error } = useGetFlags();

  if (error) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <Container className="flex-1 flex flex-col">
      {/* FILTER SECTION */}
      <FilterSection />
      {/* FLAG LIST & FLAGS*/}
      {data ? <FlagList flags={data} /> : null}
    </Container>
  );
};

export default HomePage;
