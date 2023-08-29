import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <Link
      href={"/"}
      className="w-full h-[745px] bg-center bg-no-repeat relative group flex justify-center items-center"
    >
      <Image
        src={
          // "https://images.pexels.com/photos/5926462/pexels-photo-5926462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          "https://sstorage.clearance.ae/production/storage/banner/2023-08-29-64edb60d10a4e.png"
        }
        alt=""
        fill
      />
      <div className="flex group-hover:opacity-100 opacity-0 transition-opacity duration-300 w-full absolute top-1/2 -translate-y-1/2 justify-between px-5">
        <button
          type="button"
          className="bg-[#ffffff88] h-10 w-10 rounded-full flex justify-center items-center text-gray-800 "
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          type="button"
          className="bg-[#ffffff88] h-10 w-10 rounded-full flex justify-center items-center text-gray-800 "
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="bg-transparent h-fit relative z-10">
        <button className="bg-white px-7 py-2.5 text-gray-800 flex justify-center gap-x-3 font-bold items-center text-base capitalize">
          shop now
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </Link>
  );
};

export default Banner;
