"use client";

import CardProduct from "@/common/components/fragments/CardProduct";
import { ProductType } from "@/common/types/product";
import { getProductsQuery } from "@/queries/productQuery";

export default function Products() {
  const { data, error, isFetching } = getProductsQuery();
  if (error) {
    return <h1>error</h1>;
  }
  if (isFetching) {
    return <h1>Loading...</h1>;
  }
  const productData = data?.data.data;
  return (
    <div className="w-full">
      <h1 className="my-5 text-3xl font-bold">
        All Products ({productData.length})
      </h1>
      <div className="flex flex-wrap gap-5">
        {productData.length > 0 &&
          productData.map((product: ProductType, index: number) => (
            <CardProduct
              title={product.name}
              image={product.image}
              price={product.price}
              rating={product.rating}
              promotionValue={product.promotionValue}
              key={product.id_product}
              id={product.id_product}
            />
          ))}
      </div>
    </div>
  );
}
