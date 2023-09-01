"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Banner: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="relative group flex items-center w-screen h-52 md:h-80 lg:h-[428px] xl:h-[535px] 2xl:h-[642px] 3xl:h-[745px]">
      <Link
        href={"/"}
        className="w-full h-full bg-center bg-no-repeat absolute top-0 left-0 z-10  flex justify-center items-center"
      >
        <Image
          src={
            "https://sstorage.clearance.ae/production/storage/banner/2023-08-29-64edb60d10a4e.png"
          }
          alt=""
          fill
        />{" "}
      </Link>
      <div className="relative z-30 w-full justify-between flex group-hover:opacity-100 opacity-50 transition-opacity duration-300 px-3 xl:px-5">
        <button
          type="button"
          className="bg-[#ffffff88] h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 rounded-full flex justify-center items-center text-gray-800 "
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          type="button"
          className="bg-[#ffffff88] h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 rounded-full flex justify-center items-center text-gray-800 "
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Banner;
