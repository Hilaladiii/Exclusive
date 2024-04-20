import BannerSideLink from "./BannerSideLink/BannerSideLink";
import BestSellingProducts from "./BestSellingProducts/BestSellingProducts";
import BrowseByCategory from "./BrowseByCategory/BrowseByCategory";
import FlashSale from "./FlashSale/FlashSale";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <BannerSideLink />
      <FlashSale />
      <BrowseByCategory />
      <BestSellingProducts />
    </div>
  );
}
