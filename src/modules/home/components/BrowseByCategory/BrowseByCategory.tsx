import BadgeSection from "@/common/components/fragments/BadgeSection";
import CategoryPhone from "@/common/components/fragments/CategoryPhone";
import {
  IconCamera,
  IconComputer,
  IconGaming,
  IconHeadPhone,
  IconPhone,
  IconSmartWatch,
} from "./IconCategory";

export default function BrowseByCategory() {
  return (
    <section>
      <BadgeSection
        title="Categories"
        section="Browse By Category"
      ></BadgeSection>
      <div className="mt-10 flex flex-row gap-10">
        <CategoryPhone title="Phones">
          <IconPhone></IconPhone>
        </CategoryPhone>
        <CategoryPhone title="Computers">
          <IconComputer></IconComputer>
        </CategoryPhone>
        <CategoryPhone title="SmartWatch">
          <IconSmartWatch></IconSmartWatch>
        </CategoryPhone>
        <CategoryPhone title="Camera">
          <IconCamera />
        </CategoryPhone>
        <CategoryPhone title="HeadPhones">
          <IconHeadPhone></IconHeadPhone>
        </CategoryPhone>
        <CategoryPhone title="Gaming">
          <IconGaming />
        </CategoryPhone>
      </div>
    </section>
  );
}
