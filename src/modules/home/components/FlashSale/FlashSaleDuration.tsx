"use client";
import dynamic from "next/dynamic";

const TimerClient = dynamic(
  () => import("@/common/components/elements/Timer"),
  { ssr: false },
);
export default function FlashSaleDuration() {
  return (
    <div className="mt-10 flex flex-row items-end gap-10">
      <h2 className="text-4xl font-semibold">Flash Sales</h2>
      <TimerClient targetDateTime="2024-04-30T00:00:00" />
    </div>
  );
}
