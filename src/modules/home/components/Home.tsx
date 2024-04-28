import BannerSideLink from "./BannerSideLink/BannerSideLink";
import BestSellingProducts from "./BestSellingProducts/BestSellingProducts";
import BrowseByCategory from "./BrowseByCategory/BrowseByCategory";
import FlashSale from "./FlashSale/FlashSale";
import MusicExperience from "./MusicExperience/MusicExperience";
import NewArrival from "./NewArrival/NewArrival";
import OurProducts from "./OurProducts/OurPoducts";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <BannerSideLink />
      <FlashSale />
      <BrowseByCategory />
      <BestSellingProducts />
      <MusicExperience />
      <OurProducts />
      <NewArrival />
    </div>
  );
}
