import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header>
      <div className="flex h-[48px] w-full items-center bg-black text-white ">
        <p className="mx-auto">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href="/" className="underline">
            ShopNow
          </Link>
        </p>
      </div>
      <nav className="flex w-full flex-row items-center justify-between bg-white px-[135px] pb-4 pt-10">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <div className="space-x-12 text-base">
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          <Link href="/">SignUp</Link>
        </div>
        <div>
          <div className="relative flex flex-1 justify-end">
            <input
              type="text"
              className="rounded-sm bg-secondary1 px-5 py-3 text-sm"
              placeholder="What are you looking for?"
            />
            <IoSearch className="absolute right-4 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </nav>
      <hr className="border-black/20" />
    </header>
  );
};

export default Navbar;
