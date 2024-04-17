import CategoriesLinkHome from "./BannerSideLink/CategoriesLinkHome";
import SwiperPromotionHome from "./BannerSideLink/SwiperPromotionHome";
import BrowseByCategory from "./BrowseByCategory/BrowseByCategory";
import FlashSale from "./FlashSale/FlashSale";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-row justify-between">
        <CategoriesLinkHome />
        <div className="mr-20 min-h-full w-1 bg-black/20" />
        <SwiperPromotionHome />
      </div>
      <FlashSale />
      <BrowseByCategory />
    </div>
  );
}
