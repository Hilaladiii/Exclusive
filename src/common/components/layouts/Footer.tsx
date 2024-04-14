import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col h-[440px] bg-black mt-[140px] text-white px-[135px]">
      <div className="flex flex-row justify-between mt-[80px]">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <h2 className="text-xl font-medium">Subscribe</h2>
          <p>Get 10% off your first order</p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-6">Support</h2>
          <div className="space-y-4">
            <p>Jln Terusan Surabaya 79 Malang</p>
            <p>exclusive@gmail.com</p>
            <p>+6281999777666</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-6">Account</h2>
          <div className="flex flex-col space-y-4">
            <Link href="">My Account</Link>
            <Link href="">Login / Register</Link>
            <Link href="">Cart</Link>
            <Link href="">Wishlist</Link>
            <Link href="">Shop</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-6">Quick Link</h2>
          <div className="flex flex-col space-y-4">
            <Link href="">Privacy Policy</Link>
            <Link href="">Term of Use</Link>
            <Link href="">FAQ</Link>
            <Link href="">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-medium">Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className="flex flex-row gap-2">
            <div className="w-10 h-13 bg-white rounded" />
            <div className="flex flex-col gap-2">
              <div className="w-16 h-5 bg-white rounded" />
              <div className="w-16 h-5 bg-white rounded" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
