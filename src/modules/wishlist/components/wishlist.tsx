"use client";

import CardProduct from "@/common/components/fragments/CardProduct";
import CardProductSkeleton from "@/common/components/skeletons/CardProductSkeleton";
import { ProductType } from "@/common/types/product";
import { getWishlistQuery } from "@/queries/productQuery";

export default function Wishlist() {
  const { data, error, isFetching } = getWishlistQuery();
  if (error) {
    return <h1>error</h1>;
  }
  const wishlist = data?.data.data;

  return (
    <div className="w-full">
      <h1 className="my-5 text-3xl font-bold">
        Wishlist Products ({wishlist?.length ?? 0})
      </h1>
      <div className="flex flex-wrap gap-5">
        {isFetching
          ? Array.from({ length: 5 }).map((_, index) => (
              <CardProductSkeleton key={index} />
            ))
          : wishlist.length > 0 &&
            wishlist.map((product: ProductType, index: number) => (
              <CardProduct
                title={product.name}
                image={product.image}
                price={product.price}
                rating={product.rating}
                promotionValue={product.promotionValue}
                key={product.id_product}
                id={product.id_product}
                wishlisted={product.wishlisted}
              />
            ))}
      </div>
    </div>
  );
}
