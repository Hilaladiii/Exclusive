import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { CATEGORIES } from "@/common/constant/categories";

export default function CategoriesLinkHome() {
  return (
    <div className="relative mt-10 flex w-2/3 flex-col gap-3 text-base">
      {CATEGORIES.map((category, index) => (
        <div key={index} className="group flex flex-row">
          <Link href={`/${category.href}`}>
            <div className="flex flex-row items-center gap-2">
              {category.category}{" "}
              {category.sub_category && category.sub_category.length > 0 ? (
                <HiChevronRight />
              ) : null}
            </div>
          </Link>
          {category.sub_category && category.sub_category.length > 0 && (
            <div className="absolute -right-80 z-10 hidden max-w-md flex-wrap gap-5 rounded bg-white p-5 shadow-lg group-hover:flex">
              {category.sub_category.map((sub, subIndex) => (
                <Link key={subIndex} href={`/${category.href}/${sub.sub}`}>
                  {sub.sub.charAt(0).toUpperCase() + sub.sub.slice(1)}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
