"use client";

import FlashSaleDuration from "./FlashSaleDuration";
import FlashSaleProducts from "./FlashSaleProducts";
import Button from "@/common/components/elements/Button";

export default function FlashSale() {
  return (
    <section className="flex w-full flex-col">
      <FlashSaleDuration />
      <div>
        <FlashSaleProducts />
        <Button variant="primary" className="mx-auto mt-14 flex">
          View All Products
        </Button>
      </div>
    </section>
  );
}
