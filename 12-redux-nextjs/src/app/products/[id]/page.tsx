import AddBasketButton from "@/components/add-basket-button";
import { store } from "@/stores";
import { fetchProduct } from "@/stores/products-store";
import { FC } from "react";

interface ProductDetailPageProps {
  params: {
    id: number; // might be also string
  };
}

// export const revalidate = 10;

const ProductDetailPage: FC<ProductDetailPageProps> = async ({
  params: { id },
}) => {
  await store.dispatch(fetchProduct(id));

  const product = store.getState().products.product;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <AddBasketButton product={product} />
    </div>
  );
};

export default ProductDetailPage;
