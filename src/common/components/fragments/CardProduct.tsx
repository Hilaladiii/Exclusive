import Image from "next/image";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import Button from "../elements/Button";
import Stars from "../elements/Stars";
import { useState } from "react";

export default function CardProduct() {
  const [isWishlist, setIsWishlist] = useState<boolean>(false);
  return (
    <div className="w-72 rounded shadow-md">
      <div className="group relative flex items-center justify-center pb-8 pt-16">
        <Image
          src={"/product.jpg"}
          width={200}
          height={200}
          alt={"product"}
          className="h-36 w-36 object-contain"
          loading="lazy"
        />
        <div className="absolute left-5 top-5">
          <p className="rounded bg-secondary2 px-5 py-2 text-xs text-white">
            -40%
          </p>
        </div>
        {isWishlist ? (
          <HiHeart
            size={20}
            className="absolute right-5 top-5 cursor-pointer text-secondary2"
            onClick={() => setIsWishlist(false)}
          />
        ) : (
          <HiOutlineHeart
            size={20}
            className="absolute right-5 top-5 cursor-pointer "
            onClick={() => setIsWishlist(true)}
          />
        )}
      </div>
      <div className="px-5 py-4">
        <h3 className="text-base font-medium">HAVIT HV-G92 Gamepad</h3>
        <div className="mt-2 flex items-center gap-2">
          <p className="font-medium text-secondary2">${100 * (1 - 40 / 100)}</p>
          <p className="text-gray-400 line-through">$100</p>
        </div>
        <Stars rating={4.8} />
        <Button variant="black" size="small" className="mt-4 w-full">
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
