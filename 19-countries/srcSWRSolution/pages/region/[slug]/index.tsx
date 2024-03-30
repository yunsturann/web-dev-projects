import Container from "@/components/Container";
import FilterSection from "@/components/FilterSection.tsx/FilterSection";
import FlagList from "@/components/FlagList/FlagList";
import { regionItems } from "@/constants";
import { useGetFlags } from "@/services/homepage/hooks/useGetFlags";
import { useRouter } from "next/router";

import React from "react";

const FilteredPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, isLoading, error } = useGetFlags(`/region/${slug}`);

  const isValidRegion = regionItems.some((region) => region.value === slug);

  if (!isValidRegion) {
    router.push("/");
  }

  return (
    <Container className="flex-1 flex flex-col">
      {/* FILTER SECTION */}
      <FilterSection />
      {/* FLAG LIST & FLAGS*/}
      {data ? <FlagList flags={data} /> : null}
    </Container>
  );
};

export default FilteredPage;
