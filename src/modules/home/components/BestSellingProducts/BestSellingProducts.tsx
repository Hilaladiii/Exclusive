import Button from "@/common/components/elements/Button";
import BadgeSection from "@/common/components/fragments/BadgeSection";
import BestProducts from "./BestProducts";

export default function BestSellingProducts() {
  return (
    <section>
      <div className="flex flex-row items-end justify-between">
        <BadgeSection title="This Month" section="Best Selling Products" />
        <div>
          <Button variant="primary"> View All</Button>
        </div>
      </div>
      <BestProducts />
    </section>
  );
}
