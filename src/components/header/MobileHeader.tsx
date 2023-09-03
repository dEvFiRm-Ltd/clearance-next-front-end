"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SlideInOut from "../common/SlideInOut";

const MobileHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="lg:hidden flex flex-row justify-between items-center py-1.5 md:py-4 px-2 md:px-5">
        <div className="flex flex-row items-center gap-3">
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="group relative p-2 md:p-3 text-xl md:text-2xl"
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link href={"/"} className="w-32 h-8 md:h-9 relative">
            <Image
              src="https://backend-live.clearance.ae/storage/company/2023-02-06-63e08deba2852.png"
              fill
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-x-2 text-xl md:text-2xl">
          <button type="button" className="group relative p-2 md:p-3">
            <i className="fa-regular fa-user"></i>
          </button>
          <button className="p-2">
            <i className="fa-solid fa-magnifying-glass text-black"></i>
          </button>
          <button type="button" className="group relative p-2 md:p-3">
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </div>
      {show && <SlideInOut />}
    </>
  );
};

export default MobileHeader;
