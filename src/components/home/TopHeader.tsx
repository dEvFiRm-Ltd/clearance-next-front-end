import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-[#181818] py-3">
      <div className="container mx-auto flex flex-row items-center justify-center gap-x-4 uppercase text-2xl font-normal">
        <div className="flex flex-row gap-x-3 items-center">
          <i className="fa-solid fa-gift text-2xl text-[#E6E3C4]"></i>
          <p className=" text-white leading-8">
            free gift <span className="font-bold text-[#E3D8C5]">over $99</span>
          </p>
        </div>
        <div className="flex flex-row gap-x-3 items-center px-4 border-x border-[#656565]">
          <i className="fa-solid fa-gift text-2xl text-[#E6E3C4]"></i>
          <p className="text-white leading-8">
            free gift <span className="font-bold text-[#E3D8C5]">over $99</span>
          </p>
        </div>
        <div className="flex flex-row gap-x-3 items-center">
          <i className="fa-solid fa-gift text-2xl text-[#E6E3C4]"></i>
          <p className=" text-white leading-8">
            free gift <span className="font-bold text-[#E3D8C5]">over $99</span>
          </p>
          <div className="bg-[#A2634D] py-2 px-3 text-white font-bold">
            code:news
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
