"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import CardProduct from "@/common/components/fragments/CardProduct";

export default function OurProductsList() {
  return (
    <div className="mt-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        pagination={{ clickable: true }}
        enabled={true}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => {
          return (
            <SwiperSlide key={i}>
              <CardProduct />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
