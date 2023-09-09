"use client"
import { dressListData, filterData, recommendData } from "@/static";
import { flashSaleCardProps } from "@/utils/type";
import React, { useState } from "react";
import FlashSaleCard from "../common/FlashSaleCard";
import Button from "../base/Button";
import Recommend, { recommendType } from "./Recommend";

const DressList = () => {
    const [show, setShow] = useState<boolean>(false)
    const [itemShow, setItemShow] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Item1', 'Item2', 'Item3'];
    const handleSelectChange = (e:any) => {
      setSelectedOption(e.target.value);
    };
  return (
  <div className="w-full 3xl:w-[calc(100%-216px-24px)] relative">
    <div className="flex flex-row items-center justify-between gap-x-2 capitalize mb-3.5 px-3">
    <p className="text-lg leading-none text-black-primary font-bold">Dresses <span className="text-sm font-normal text-center">566</span> <span className="text-sm font-normal text-center">Results</span>
    </p>
    <div className="3xl:flex flex-row items-center gap-x-2 capitalize hidden">
      <p className="text-base text-black-primary font-normal">Sort By</p>
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
    {/* buttons are here  */}
    {/* <Recommend recommendArr={recommendData} heading="" btnClass=""/> */}
    <div className="w-full flex flex-row flex-wrap items-center gap-3 3xl:hidden border-b-[7px] border-[#F2F2F3] px-3 pb-3.5">
        {recommendData.map((item: recommendType, i: number) => (
          <div key={i} className="">
          <Button
           
            btnText={`${item.title}`}
            variant="primary"
            btnClass="!text-sm !leading-4 !px-3 !py-2 !bg-[#F2F2F3] !rounded-[4px] !text-[#222] hover:!bg-[#111] hover:!text-white"
          /></div>
        ))}
    </div>

      <div className="flex flex-row items-center justify-between px-3 3xl:hidden">
        <div><Button btnText="New" actionCb={()=>{}} variant="naked"/></div> 
        <div><Button btnText="Best Sale" actionCb={()=>{}} variant="naked"/></div>
        <div className="flex flex-row items-center gap-x-1">
          <p className="text-sm text-black-primary">Price</p>
          <div className="">
            <Button icon="fa-solid fa-chevron-up !text-gray-200 !text-[10px]" variant="naked"/>
            <Button icon="fa-solid fa-chevron-down !text-gray-200 !text-[10px]" variant="naked"/>
          </div>
        </div>
        <div
        onClick={()=>setShow(!show)}
         className="flex flex-row items-center gap-x-1 cursor-pointer px-3 py-2">
          <p className="text-sm text-black-primary">Filter</p>
          <i className="fa-solid fa-filter text-sm"></i>
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
    {show && 
    <div className="z-50 w-screen h-screen absolute top-0 bg-white">
      <div className="flex flex-row justify-between px-4">
        <h1 className="text-lg font-bold text-black-primary uppercase">filter</h1>
        <div><Button actionCb={()=>setShow(!show)} icon="fa-solid fa-xmark !text-3xl" variant="naked"/></div>
      </div>
      <div
        onClick={()=>setItemShow(!itemShow)}
         className="flex flex-row items-center justify-between cursor-pointer py-2 bg-[#F2F2F3] px-4">
          <p className="text-lg text-black-primary">Category</p>
          <i className={`fa-solid fa-chevron-down text-sm ${itemShow===true? "rotate-180":""}`}></i>
        </div>
        {itemShow && 
        
      <div className="w-full flex flex-row flex-wrap items-center gap-3 py-3 px-4">
        {filterData.map((item: recommendType, i: number) => (
          <div key={i} className="">
          <Button
           
            btnText={`${item.title}`}
            variant="outlined"
            btnClass="!text-sm !leading-4 !px-3 !py-2 border border-[#F2F2F3] !text-[#222] hover:!bg-[#111] hover:!text-white"
          /></div>
        ))}
    </div>
        }
        <div className="w-full px-4 border-none mt-2">
          <input
            type="range"
            className="w-full border-[0px]"
            min="1"
            max="100"
            value="" // Set the initial value here
          />
        </div>
        <div className="w-full border-t border-[#4f4f5038] fixed bottom-0">
          <p className="text-xs text-[#858587] capitalize text-center py-3"><span>575</span> Products</p>
          <div className="w-full flex flex-row px-3 gap-x-3 mb-5">
            <Button btnText="Reset" variant="outlined" btnClass="!uppercase !text-base !text-black !w-[50%]"/>
            <Button btnText="Done" variant="primary" btnClass="!uppercase !text-base !text-black !w-[50%]"/>
          </div>
        </div>
    </div>
    }
  </div>
  );
};

export default DressList;
