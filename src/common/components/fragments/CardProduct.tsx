import Image from "next/image";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import Button from "../elements/Button";
import Stars from "../elements/Stars";
import { useState } from "react";
import { cn } from "@/common/lib/utils";
import Link from "next/link";
import { wishListProductMutation } from "@/queries/productQuery";
import { useSession } from "next-auth/react";
import { unWishlistProductMutation } from "@/queries/productQuery";

export default function CardProduct({
  image,
  promotionValue = 0,
  title,
  price,
  rating,
  id,
  wishlisted = false,
}: {
  image: string;
  promotionValue?: number;
  title: string;
  price: number;
  rating: number;
  id: string;
  wishlisted?: boolean;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const wishlistMutation = wishListProductMutation();
  const unWishlistMutation = unWishlistProductMutation();
  const { data } = useSession();
  const email = data?.user?.email ?? "";

  const handleWishListMutate = async () => {
    await wishlistMutation.mutateAsync({ email, id });
  };

  const handleUnWishListMutate = async () => {
    await unWishlistMutation.mutateAsync(id);
  };

  return (
    <div className="w-72 rounded shadow-md">
      <div className="group relative flex items-center justify-center pb-8 pt-16">
        <Link href={`/products/${id}`} className="cursor-pointer">
          <Image
            src={image}
            width={200}
            height={200}
            alt={title}
            className={cn(
              "h-36 w-36 object-contain",
              isLoading ? "scale-100 blur-sm" : "scale-100 blur-0",
            )}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        </Link>
        <div className="absolute left-5 top-5">
          {promotionValue != 0 && (
            <p className="rounded bg-secondary2 px-5 py-2 text-xs text-white">
              -{promotionValue}%
            </p>
          )}
        </div>
        {wishlisted ? (
          <HiHeart
            size={20}
            className="absolute right-5 top-5 cursor-pointer text-secondary2"
            onClick={() => handleUnWishListMutate()}
          />
        ) : (
          <HiOutlineHeart
            size={20}
            className="absolute right-5 top-5 cursor-pointer "
            onClick={() => handleWishListMutate()}
          />
        )}
        <Button
          variant="black"
          size="small"
          className="absolute bottom-0 hidden w-full rounded-t-none text-center group-hover:grid"
        >
          Add To Cart
        </Button>
      </div>
      <div className="px-5 py-4">
        <h3 className="text-base font-medium">{title}</h3>
        <div className="mt-2 flex items-center gap-2">
          <p className="font-medium text-secondary2">
            ${price * (1 - promotionValue / 100)}
          </p>
          {promotionValue != 0 && (
            <p className="text-gray-400 line-through">${price}</p>
          )}
        </div>
        <Stars rating={rating} />
      </div>
    </div>
  );
}
