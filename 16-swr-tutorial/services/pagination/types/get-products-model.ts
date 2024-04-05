interface ProductModel {
  id: number;
  title: string;
  price: number;
}

export interface GetProductsModel {
  products: ProductModel[];
}
