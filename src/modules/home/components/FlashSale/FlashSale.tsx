"use client";

import BadgeCategory from "@/common/components/elements/BadgeCategory";
import Duration from "./Duration";

export default function FlashSale() {
  return (
    <div className="flex w-full flex-col">
      <BadgeCategory title="Today's" />
      <Duration />
    </div>
  );
}
