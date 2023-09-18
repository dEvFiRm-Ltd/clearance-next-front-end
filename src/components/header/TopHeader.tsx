"use client";
import { usePathname } from "next/navigation";
import React from "react";

const TopHeader = () => {
  const path = usePathname();
  const local = path.split("/")[1];
  return (
    <div className="bg-[#181818] py-3">
      <div className="container mx-auto flex flex-row items-center justify-center gap-1 lg:gap-x-4 uppercase text-xs lg:text-xl 2xl:text-2xl font-normal">
        <div className="flex flex-row gap-1.5 lg:gap-3 items-center justify-center flex-wrap">
          <p className=" text-white">
            <i className="fa-solid fa-gift text-base lg:text-2xl text-[#E6E3C4] mr-1.5 lg:mr-3"></i>
            {local === "en"
              ? "Free Delivery on order"
              : "التوصيل مجاني عند الطلب"}
          </p>
          <span className="font-bold text-[#E3D8C5]">
            {local === "en" ? "above AED 150" : "فوق 150 درهم"}
          </span>
        </div>
        {/* <div className="flex flex-row gap-1.5 lg:gap-3 items-center justify-center flex-wrap md:px-4 border-x border-[#656565]">
          <p className="text-white">
            <i className="fa-solid fa-gift text-base lg:text-2xl text-[#E6E3C4] mr-1.5 lg:mr-3"></i>
            free gift
          </p>
          <span className="font-bold text-[#E3D8C5]">over 99 AED</span>
        </div> */}
        <div className="flex flex-row gap-1.5 lg:gap-3 items-center justify-center flex-wrap border-l border-[#656565] pl-1 md:pl-4">
          <p className=" text-white">
            <i className="fa-solid fa-gift text-base lg:text-2xl text-[#E6E3C4] mr-1.5 lg:mr-3"></i>
            {local === "en" ? "free gift" : "هدية مجانية"}
          </p>
          <span className="font-bold text-[#E3D8C5]">
            {local === "en" ? "over 99 AED" : "أكثر من 99 درهم"}
          </span>
          <div className="bg-[#A2634D] px-1 py-0.5 lg:py-2 lg:px-3 text-white font-bold">
            {local === "en" ? "code:news" : "الكود: أخبار"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
