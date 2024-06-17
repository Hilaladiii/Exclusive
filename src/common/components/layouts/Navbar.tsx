"use client";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import clsx from "clsx";
import Button from "../elements/Button";
import { useEffect, useState } from "react";
import { getWishlistCountQuery } from "@/queries/productQuery";

const Navbar = () => {
  const pathname = usePathname();
  const { status } = useSession();
  const [visible, setVisible] = useState<boolean>(true);
  const { data, isLoading } = getWishlistCountQuery();

  const count = (data?.data && data?.data.data) || 0;

  const onScroll = () => {
    if (window.scrollY > 45) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.addEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header>
      <div
        className={`${visible ? "hidden" : "flex"} h-[48px] w-full items-center bg-black text-white`}
      >
        <p className="mx-auto">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href="/" className="underline">
            ShopNow
          </Link>
        </p>
      </div>
      <nav
        className={`pt-10" fixed z-50 flex w-full flex-row items-center justify-between transition-all duration-500 ${visible ? "bg-black text-white" : "bg-white"} px-[135px] py-5 pb-4`}
      >
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <div className="space-x-12 text-base">
          <Link
            href="/"
            className={clsx("text-base", {
              underline: pathname == "/",
            })}
          >
            Home
          </Link>
          <Link
            href="/"
            className={clsx("text-base", {
              underline: pathname == "/contact",
            })}
          >
            Contact
          </Link>
          <Link
            href="/"
            className={clsx("text-base", {
              underline: pathname == "/about",
            })}
          >
            About
          </Link>
          {status == "unauthenticated" && (
            <Link
              href="/register"
              className={clsx("text-base", {
                underline: pathname == "/register",
              })}
            >
              SignUp
            </Link>
          )}
        </div>
        <div className="flex flex-row items-center gap-8">
          <div>
            <div className="relative flex flex-1 justify-end">
              <input
                type="text"
                className="rounded-sm bg-secondary1 px-5 py-3 text-sm"
                placeholder="What are you looking for?"
              />
              <IoSearch className="absolute right-4 top-3 size-5 text-gray-400" />
            </div>
          </div>
          {status == "authenticated" && (
            <div
              className={`flex flex-row items-center gap-5 rounded-full px-3 py-1 ${visible ? "bg-gray-100" : "bg-none"} `}
            >
              <Link href="/profile/wishlist">
                <div className="relative size-6 bg-[url(/love.svg)] bg-contain bg-center bg-no-repeat ">
                  <span
                    className={`${count == 0 ? "hidden" : "absolute"} -right-1 -top-1 size-4 rounded-full bg-red-500 text-center text-xs text-white`}
                  >
                    {isLoading ? 0 : count}
                  </span>
                </div>
              </Link>

              <Link href="/cart">
                <div className="size-7 bg-[url(/cart.svg)] bg-contain bg-center bg-no-repeat" />
              </Link>
            </div>
          )}

          <div className="group relative size-8 cursor-pointer rounded-full bg-[url(/user.svg)] bg-center bg-no-repeat p-1">
            <div className="absolute right-0 top-8 z-10 hidden w-56 flex-col gap-3 rounded-sm bg-white p-5 group-hover:flex">
              {status == "authenticated" && (
                <>
                  <Link href="/">Manage My Account</Link>
                  <Link href="/">My Order</Link>
                  <Link href="/">My Cancelations</Link>
                  <Link href="/">My Reviews</Link>
                </>
              )}
              {status == "authenticated" ? (
                <Button size="small" onClick={() => signOut()}>
                  Logout
                </Button>
              ) : (
                <Button onClick={() => signIn()}>Login</Button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <hr className="border-black/20" />
    </header>
  );
};

export default Navbar;
