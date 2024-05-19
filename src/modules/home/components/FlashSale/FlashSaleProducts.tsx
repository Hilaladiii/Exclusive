import { Swiper, SwiperSlide } from "swiper/react";

import CardProduct from "@/common/components/fragments/CardProduct";
import { getProductsPromotionQuery } from "@/queries/productQuery";
import { ProductType } from "@/common/types/product";

export default function FlashSaleProducts() {
  const { data, error, isFetching } = getProductsPromotionQuery();
  const productPromotion = data?.data.data || [];
  if (error) {
    return <h1>error ngab</h1>;
  }
  if (isFetching) {
    return <h1>Loading...</h1>;
  }
  const displayProduct =
    productPromotion.length > 8
      ? productPromotion.slice(0, 8)
      : productPromotion;
  return (
    <div className="mt-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        enabled={true}
      >
        {displayProduct.length > 0 &&
          displayProduct.map((product: ProductType, i: number) => {
            return (
              <SwiperSlide key={i} className="cursor-grab">
                <CardProduct
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  title={product.name}
                  promotionValue={product.promotionValue}
                  id={product.id_product}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
