"use client";

import { RootState } from "@/stores";
import React from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector((state: RootState) => state.basket.basket);
  console.log(basket);

  // calculate total amount of products in the basket
  const totalAmount = basket.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return <div>Basket: {totalAmount.toFixed(2)}</div>;
};

export default Basket;
