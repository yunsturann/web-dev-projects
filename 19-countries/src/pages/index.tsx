import Container from "@/components/Container";
import { useGetFlags } from "@/services/homepage/hooks/useGetFlags";
import React from "react";

const HomePage = () => {
  const { data, isLoading, error } = useGetFlags();

  if (error) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  console.log(data);

  return (
    <Container className="flex-1">
      {/* FILTER SECTION */}

      {/* FLAG LIST & FLAGS*/}
    </Container>
  );
};

export default HomePage;
