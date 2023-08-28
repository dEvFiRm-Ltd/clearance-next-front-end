import Image from "next/image";
import React from "react";

const DenimShop = () => {
  return (
    <div className="container h-[594px] w-full relative px-[60px] mb-[35px]">
      <Image src="/banner.jpg" alt="banner" fill className="object-container" />
      <h1 className="text-5xl leading-[50px] uppercase text-[#FFFFFF] font-bold z-10 absolute top-[250px] right-[150px]">
        the denim shop
      </h1>
      <button
        type="button"
        className="flex flex-row items-center gap-x-3 bg-white px-10 py-2.5 uppercase z-10 absolute top-[330px] right-[240px]"
      >
        <p>shop now</p>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default DenimShop;
