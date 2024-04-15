"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  {
    src: "/banner.webp",
    alt: "promotion",
  },
  {
    src: "/banner.webp",
    alt: "promotion",
  },
  {
    src: "/banner.webp",
    alt: "promotion",
  },
  {
    src: "/banner.webp",
    alt: "promotion",
  },
];

export default function Banner() {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      loop
      autoplay={{ delay: 4000 }}
      className="mt-10"
    >
      {images.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <Image
              alt={item.alt}
              src={item.src}
              width={1300}
              height={1300}
              className="h-auto w-full object-cover"
              priority
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
