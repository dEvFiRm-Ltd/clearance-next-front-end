"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CartSideBar from "../common/CartSideBar";
import { useCart } from "@/context/CartContext";
import SearchField from "../base/SearchField";

const MiddleHeader = () => {
  // const [show, setShow] = useState(false)
  const [language, setLanguage] = useState(false);
  const [user, setUser] = useState(false);
  // const [cart, setCart] = useState(false);
  const { isCartOpen, setIsCartOpen } = useCart();
  const languageButtonRef = useRef<HTMLButtonElement>(null);
  const userButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        languageButtonRef.current &&
        !languageButtonRef.current.contains(event.target as Node)
      ) {
        setLanguage(false);
      }
      if (
        userButtonRef.current &&
        !userButtonRef.current.contains(event.target as Node)
      ) {
        setUser(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="hidden lg:flex flex-row justify-between items-center lg:py-4 2xl:py-5 lg:px-6 xl:px-8 2xl:px-12 3xl:px-[60px]">
      <Link
        href={"/"}
        className="w-32 h-10 relative lg:w-40 2xl:w-44 3xl:w-[200px]"
      >
        <Image
          src="https://backend-live.clearance.ae/storage/company/2023-02-06-63e08deba2852.png"
          fill
          alt="logo"
        />
      </Link>
      <div className="flex flex-row items-center gap-x-5 xl:gap-x-6 3xl:gap-x-8">
        <SearchField />
        <div className="flex flex-row items-center gap-x-2 xl:gap-x-3.5 2xl:gap-x-4 3xl:gap-x-5 text-xl 2xl:text-2xl">
          {/* <button type="button" onClick={()=>setLanguage(!language)}  ref={languageButtonRef} className="relative p-2 2xl:p-3">
            <i className="fa-solid fa-globe"></i>
            {language && <div className="w-80 flex flex-col justify-start gap-y-5 absolute top-full right-0 z-50 px-4 pt-5 pb-2 bg-white cartShadow">
              <p className="text-sm 2xl:text-base font-bold text-black-primary capitalize text-left">
                Language
              </p>
              <select className="w-full p-3 border text-sm 2xl:text-base text-gray border-gray hover:border-black-primary focus-visible:outline-none">
                <option value="english">English</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>}
          </button> */}
          <button
            type="button"
            onClick={() => setUser(!user)}
            ref={userButtonRef}
            className="relative p-2 2xl:p-3"
          >
            <i className="fa-regular fa-user"></i>
            {/* hover dropdown */}
            {user && (
              <div className="absolute right-[50%] translate-x-[50%] z-50 top-[115%] bg-white flex min-w-[240px] rounded-md cartShadow">
                <div className="w-full flex flex-col justify-start items-center gap-4 relative p-4">
                  <button
                    type="button"
                    className="flex justify-center items-center overflow-hidden rounded hover:opacity-80 bg-black-primary group w-full px-3 py-2 text-white text-sm 2xl:text-base"
                  >
                    Sign In / Register{" "}
                  </button>
                  <p className="text-sm font-normal text-black capitalize">
                    or sign in:
                  </p>
                  <span className="flex justify-center items-center gap-x-10">
                    <Link href="">
                      <i className="fab fa-facebook text-blue-500"></i>
                    </Link>
                    <Link href="">
                      <i className="fab fa-google text-red-400"></i>
                    </Link>
                  </span>
                  <span className="h-px bg-slate-500 w-full" />
                  <Link
                    href={""}
                    className="w-full text-sm 2xl:text-base text-left text-gray hover:font-bold capitalize"
                  >
                    my order
                  </Link>
                  <Link
                    href={""}
                    className="w-full text-sm 2xl:text-base text-left text-gray hover:font-bold capitalize"
                  >
                    my coupons
                  </Link>
                  <Link
                    href={""}
                    className="w-full text-sm 2xl:text-base text-left text-gray hover:font-bold capitalize"
                  >
                    my wallet
                  </Link>
                  <span className="h-3 w-3 bg-white cartShadow rotate-45 absolute -z-50 -top-1.5 left-1/2 -translate-x-1/2" />
                </div>
              </div>
            )}
            {/* hover dropdown ends */}
          </button>
          <button
            type="button"
            // onClick={() => setIsCartOpen(true)}
            className="relative p-2 2xl:p-3"
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </div>
      <CartSideBar value={isCartOpen} setCart={setIsCartOpen} />
    </div>
  );
};

export default MiddleHeader;
