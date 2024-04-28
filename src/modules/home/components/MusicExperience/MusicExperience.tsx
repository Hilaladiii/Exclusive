"use client";

import Button from "@/common/components/elements/Button";
import Image from "next/image";
import dynamic from "next/dynamic";

const MucicExperienceWithTime = dynamic(
  () => import("./MusicExperienceDuration"),
  {
    ssr: false,
  },
);

export default function MusicExperience() {
  return (
    <div className="mt-36 flex h-[500px] w-full flex-row justify-between bg-black px-14 py-16">
      <div className="space-y-8">
        <h1 className="text-base font-semibold text-button1">Categories</h1>
        <h2 className="w-[443px] text-5xl font-semibold text-text">
          Enhance Your Music Experience
        </h2>
        <MucicExperienceWithTime targetDateTime="2024-04-30T00:00:00" />
        <Button variant="button1" size="big">
          Buy Now!
        </Button>
      </div>
      <Image
        src="/JBLRemoveBG.png"
        alt="Jbl Music"
        width={900}
        height={900}
        className="max-3xl:w-[500px] max-3xl:drop-shadow-[0_0_60px_rgba(255,255,255,0.5)] h-auto w-auto
        object-contain drop-shadow-[0_0_100px_rgba(255,255,255,0.5)]
        max-2xl:w-[450px] max-2xl:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)]"
        priority
      />
    </div>
  );
}
