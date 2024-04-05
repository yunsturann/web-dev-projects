import { useGetProducts } from "@/services/pagination/hooks/useGetProducts";
import React, { FC } from "react";

interface ProductsProps {
  page: number;
  limit: number;
}

const Products: FC<ProductsProps> = ({ limit, page }) => {
  const { data, isLoading, error } = useGetProducts(limit, page);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <ul>
      {data?.products.map((product, index) => (
        <li
          key={product.id}
          className={`py-2 px-4 ${
            index % 2 === 0 ? "bg-gray-300" : "bg-white"
          }`}
        >
          {product.id} - {product.title} - {product.price}
        </li>
      ))}
    </ul>
  );
};

export default Products;
