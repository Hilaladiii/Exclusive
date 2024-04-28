import Button from "@/common/components/elements/Button";
import ArrivalContent from "@/common/components/fragments/ArrivalContent";
import BadgeSection from "@/common/components/fragments/BadgeSection";
import Image from "next/image";
import Link from "next/link";

export default function NewArrival() {
  return (
    <section>
      <BadgeSection title="Featured" section="New Arrival" />
      <div className="mt-10 grid h-[600px] grid-cols-4 grid-rows-2 gap-10 max-2xl:h-[500px]">
        <div
          className="col-span-2 row-span-2 flex items-end rounded-sm bg-black
      bg-[url(/ps5.png)] bg-contain bg-bottom bg-no-repeat p-10"
        >
          <ArrivalContent
            title="PlayStation5"
            description="Black and White version of the PS5 coming out on sale"
            href="/"
          />
        </div>
        <div
          className="col-span-2 flex items-end rounded-sm bg-black bg-[url(/woman.png)] bg-contain bg-right-bottom bg-no-repeat
        p-10"
        >
          <ArrivalContent
            title="Women's Collections"
            description="Featured woman collections that give you antoher vibe"
            href="/"
          />
        </div>
        <div
          className=" flex items-end rounded-sm bg-black bg-[url(/speakers.png)] bg-contain bg-center bg-no-repeat p-10"
          style={{ backgroundSize: "50%" }}
        >
          <ArrivalContent
            title="Speakers"
            description="Amazon wireless speakers"
            href="/"
          />
        </div>
        <div
          className=" flex items-end rounded-sm bg-black bg-[url(/parfumes.png)] bg-contain bg-center bg-no-repeat p-10"
          style={{ backgroundSize: "50%" }}
        >
          <ArrivalContent
            title="Parfume"
            description="GUCCI INTENSE OUD EDP"
            href="/"
          />
        </div>
      </div>
    </section>
  );
}
