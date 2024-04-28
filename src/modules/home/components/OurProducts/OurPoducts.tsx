import Button from "@/common/components/elements/Button";
import BadgeSection from "@/common/components/fragments/BadgeSection";
import OurProductsList from "./OurProductsList";

export default function OurProducts() {
  return (
    <section>
      <div className="flex flex-row items-end justify-between">
        <BadgeSection title="Our Products" section="Explore Our Products" />
        <div>
          <Button variant="primary"> View All</Button>
        </div>
      </div>
      <OurProductsList />
    </section>
  );
}
