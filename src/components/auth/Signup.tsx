import Image from "next/image";
import Link from "next/link";
import React from "react";
import promo from "@/Img/promo.webp"
export const Signup = () => {
  return (
    <section className="w-[400px] flex flex-col space-y-4">
      <div className="flex flex-col space-y-2 md:space-y-4 text-center text-[#5c5c5c] text-2xl">
        <h1>Register</h1>
        <div className="relative w-full min-h-[200px]">
            <Image src={promo} alt={"Promotion Img"} fill/>
        </div>
      </div>

      <div className="flex flex-col">
        <input
          className="border border-zinc-400 hover:border-black focus:border-black  outline-none p-3"
          type="email"
          placeholder="*Email"
        />
        <input
          className="border border-zinc-400 hover:border-black focus:border-black  outline-none p-3 mt-6 mb-1"
          type="password"
          placeholder="*Password"
        />
        <input
          className="border border-zinc-400 hover:border-black focus:border-black  outline-none p-3 mt-6 mb-1"
          type="password"
          placeholder="*Re-Enter New Password"
        />
        <label className="default-button relative text-[13px] pl-6">
          <input name="newsletter" type="checkbox" className="rounded-[50%] h-[15px] w-[15px] mr-2 absolute top-1 left-0 checked:bg-black"/>Register with us to receive exclusive pre-sales, novelties, trends and promotions via email.
        </label>
        <button
          className="bg-black hover:bg-black text-white font-semibold py-3 tracking-wide px-4 mt-6 mb-1 uppercase text-[13px]"
          type="submit"
        >
          Create My Account
        </button>

        <div className="bg-[#ffefee] text-red-500">
          <p className="p-2 pl-4 text-[13px] relative">Register to get $5 off coupons</p>
        </div>
      </div>
    </section>
  );
};
