"use client"
import { FlashSaleData, dressListData } from "@/static";
import { flashSaleCardProps } from "@/utils/type";
import React, { useState } from "react";
import FlashSaleCard from "../common/FlashSaleCard";

const DressList = () => {
    // Initialize the state to keep track of the selected option
    const [selectedOption, setSelectedOption] = useState('');

    // An array of options
    const options = ['Item1', 'Item2', 'Item3'];
  
    // Event handler for when the select value changes
    const handleSelectChange = (e:any) => {
      setSelectedOption(e.target.value);
    };
  return (
  <div className="w-full 3xl:w-[calc(100%-216px-24px)]">
    <div className="flex flex-row items-center justify-between mb-3.5">
    <p className="text-lg  leading-none text-[#31353C]">Dresses <span className="text-sm font-normal text-center">566</span> <span className="text-sm font-normal text-center">Results</span>
    </p>
    <div className="3xl:flex flex-row items-center gap-x-2 capitalize hidden">
      <p className="text-base text-[#31353C] font-normal">Sort By</p>
      <select
        id="selectField"
        className="w-64 px-4 py-2 bg-white border border-gray-300 shadow-sm focus:outline-none"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
    </div>
    <div className="w-full flex flex-row flex-wrap gap-x-4 gap-y-5">
      {dressListData.map((item: flashSaleCardProps, id: number) => (
        <FlashSaleCard
          key={id}
          img={item.img}
          text={item.text}
          SalePrice={item.SalePrice}
          Price={item.Price}
          discount={item.discount}
          star={true}
          starCount={item.starCount}
          groupClass="!w-[162px] sm:!w-[302px] md:!w-[366px] lg:!w-[494px] xl:!w-[622px] 2xl:!w-[750px] 3xl:!w-[290px] p-2"
          imgClass="!h-[215px] sm:!h-[402px] md:!h-[487px] lg:!h-[657px] xl:!h-[827px] 2xl:!h-[997.5px] 3xl:!h-[385px]"
        />
      ))}
    </div>
  </div>
  );
};

export default DressList;
