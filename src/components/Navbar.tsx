import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header>
      <div className="w-full h-[48px] bg-black text-white flex items-center ">
        <p className="mx-auto">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href="/" className="underline">
            ShopNow
          </Link>
        </p>
      </div>
      <nav className="w-full flex flex-row justify-between bg-white items-center px-[135px] pt-10 pb-4">
        <h1 className="font-bold text-2xl">Exclusive</h1>
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
              className="py-3 px-5 text-sm rounded-sm bg-secondary1"
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
