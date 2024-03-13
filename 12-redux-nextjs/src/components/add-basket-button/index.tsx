"use client";

import { FC } from "react";
import { ProductType } from "@/types/product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/stores";
import { addToBasket } from "@/stores/basket-store";

interface AddBasketButtonProps {
  product: ProductType;
}

const AddBasketButton: FC<AddBasketButtonProps> = ({ product }) => {
  // const dispatch = useDispatch(); it also works
  const dispatch = useDispatch<AppDispatch>();

  const handleAddBasket = () => {
    dispatch(addToBasket(product));
  };

  return <button onClick={handleAddBasket}>Add to basket</button>;
};

export default AddBasketButton;
