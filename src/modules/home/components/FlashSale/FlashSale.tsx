"use client";

import BadgeCategory from "@/common/components/elements/BadgeCategory";
import FlashSaleDuration from "./FlashSaleDuration";
import FlashSaleProducts from "./FlashSaleProducts";

export default function FlashSale() {
  return (
    <div className="flex w-full flex-col">
      <BadgeCategory title="Today's" />
      <FlashSaleDuration />
      <div>
        <FlashSaleProducts />
      </div>
    </div>
  );
}
