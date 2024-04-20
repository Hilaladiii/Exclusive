import CategoriesLinkHome from "./CategoriesLinkHome";
import SwiperPromotionHome from "./SwiperPromotionHome";

export default function BannerSideLink() {
  return (
    <section className="flex flex-row justify-between">
      <CategoriesLinkHome />
      <div className="mr-20 min-h-full w-1 bg-black/20" />
      <SwiperPromotionHome />
    </section>
  );
}
