import styles from "./page.module.css";
import Link from "next/link";
import AddBasketButton from "@/components/add-basket-button";
import { store } from "@/stores";
import { fetchProducts } from "@/stores/products-store";
import { ProductType } from "@/types/product";

export default async function Home() {
  await store.dispatch(fetchProducts());

  const { products } = store.getState().products as { products: ProductType[] };

  return (
    <>
      <h1>Home Page</h1>
      <div className="products-wrapper">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h4 className="product-title">{product.title}</h4>
            <p>{product.price}</p>
            <AddBasketButton product={product} />
            <Link href={`/products/${product.id}`}>See detail</Link>
          </div>
        ))}
      </div>
    </>
  );
}
