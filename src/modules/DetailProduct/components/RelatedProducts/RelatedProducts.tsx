"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import BadgeCategory from "@/common/components/elements/BadgeCategory";
import CardProduct from "@/common/components/fragments/CardProduct";
import { getProductsQuery } from "@/queries/productQuery";
import { ProductType } from "@/common/types/product";

export default function RelatedProducts() {
  const { data, isFetching, error } = getProductsQuery();
  const productList = data?.data.data || [];
  const displayProduct =
    productList.length > 8 ? productList.slice(0, 8) : productList;
  if (error) {
    return <h1>error</h1>;
  }
  if (isFetching) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="mt-10">
      <BadgeCategory title="Related Products" />
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        pagination={{ clickable: true }}
        enabled={true}
        className="mt-12"
      >
        {displayProduct.length > 0 &&
          displayProduct.map((product: ProductType, i: number) => {
            return (
              <SwiperSlide key={i} className="cursor-grab">
                <CardProduct
                  image={product.image}
                  price={product.price}
                  promotionValue={product.promotionValue}
                  rating={product.rating}
                  title={product.name}
                  id={product.id_product}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
