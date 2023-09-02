import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-[#181818] py-3">
      <div className="container mx-auto flex flex-row items-center justify-center gap-2 lg:gap-x-4 uppercase text-xs lg:text-xl 2xl:text-2xl font-normal">
        <div className="flex flex-row gap-1.5 lg:gap-3 items-center justify-center flex-wrap">
          <p className=" text-white">
          <i className="fa-solid fa-gift text-base lg:text-2xl text-[#E6E3C4] mr-1.5 lg:mr-3"></i>
            free gift 
          </p>
          <span className="font-bold text-[#E3D8C5]">over $99</span>
        </div>
        <div className="flex flex-row gap-1.5 lg:gap-3 items-center justify-center flex-wrap md:px-4 border-x border-[#656565]">
          <p className="text-white">
          <i className="fa-solid fa-gift text-base lg:text-2xl text-[#E6E3C4] mr-1.5 lg:mr-3"></i>
            free gift 
          </p>
          <span className="font-bold text-[#E3D8C5]">over $99</span>
        </div>
        <div className="flex flex-row gap-1.5 lg:gap-3 items-center justify-center flex-wrap">
          <p className=" text-white">
          <i className="fa-solid fa-gift text-base lg:text-2xl text-[#E6E3C4] mr-1.5 lg:mr-3"></i>
            free gift 
          </p>
          <span className="font-bold text-[#E3D8C5]">over $99</span>
          <div className="bg-[#A2634D] px-1 py-0.5 lg:py-2 lg:px-3 text-white font-bold">
            code:news
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
