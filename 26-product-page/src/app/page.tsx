// ** React Imports
import React from "react";

// ** Custom Components
import Container from "@/components/Container";
import ProductSlider from "@/components/product-slider/ProductSlider";
import ProductInfo from "@/components/product-info/ProductInfo";

// ** Constants
import { product } from "@/constants";

const HomePage = () => {
  return (
    <div className="flex-1 flex items-center">
      <Container className="flex flex-col md:flex-row justify-between gap-y-12">
        <ProductSlider images={product.images} />
        <ProductInfo product={product} />
      </Container>
    </div>
  );
};

export default HomePage;
