"use client";

import CardProduct from "@/common/components/fragments/CardProduct";
import CardProductSkeleton from "@/common/components/skeletons/CardProductSkeleton";
import { ProductType } from "@/common/types/product";
import { getProductsQuery } from "@/queries/productQuery";

export default function Products() {
  const { data, error, isFetching } = getProductsQuery();

  if (error) {
    return <h1>Error loading products</h1>;
  }

  const productData = data?.data.data;

  return (
    <div className="w-full">
      <h1 className="my-5 text-3xl font-bold">
        All Products ({productData?.length ?? 0})
      </h1>
      <div className="flex flex-wrap gap-5">
        {isFetching
          ? Array.from({ length: 5 }).map((_, index) => (
              <CardProductSkeleton key={index} />
            ))
          : productData.length > 0 &&
            productData.map((product: ProductType) => (
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
