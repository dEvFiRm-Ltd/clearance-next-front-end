"use client";
import React, { useState } from "react";
import { footerItems,  silderBottomHeaderData } from "@/static";
import { footerProps, linkType } from "@/utils/type";
import Link from "next/link";
import ProductSubSlider from "./ProductSubSlider";
import FooterPart from "./FooterPart";

const SlideInOut = () => {
  const [view, setView] = useState(false);
  return (
    <div className="w-full flex flex-col gap-y-2 bg-[#f2f2f3] z-40 relative pb-10 ">
      <div className="bg-white pl-4 flex flex-col justify-start items-start">
          {[1,1,1,1,1,].map((item:any, id:number)=>(<button
          key={id}
          type="button"
          onClick={() => setView(!view)}
          className="w-full flex flex-row justify-between items-center uppercase text-base text-black py-4 border-b"
        >
          <span>
          Clothing
          </span>
            <i className="fa-solid fa-chevron-right text-xs pr-4"></i>
        </button>))}      
      </div>
        {view && (
          <div
            className={`slideIn absolute w-full origin-right bg-white transition-all duration-1000 z-50 top-0 ${
              view ? "translate-x-0" : "translate-x-full"
            }`}
          >
           <ProductSubSlider closeStateCb={() => setView(!view)}/>
          </div>
        )}
      <div className="bg-white">
      {[1,1,1].map((item:any, id:number)=>(<button
          key={id}
          type="button"
          onClick={() => setView(!view)}
          className="w-full flex flex-row justify-between items-center capitalize text-base text-black py-4 border-b pl-4"
        >
          <span>
          Country/Region
          </span>
          <p>
            <span className="text-right text-sm pl-3 pr-[18px] text-[#a1a5ab]">Bangladesh</span>
            <i className="fa-solid fa-chevron-right text-xs pr-4"></i>
          </p>
        </button>))}
        
      </div>
      <div className="px-4">
      {footerItems.map((item:footerProps, id:number)=>(
      <FooterPart key={id} heading={item.heading} itemArr={item.itemArr} socialArr={item.socialArr} contactUsText={item.contactUsText} contactUsArr={item.contactUsArr} hasBtn={item.hasBtn}/>))}        
      </div>
      {/* <div className="flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 pt-1.5 pb-5">
          {iconCard.map((item: linkType, i: number) => (
            <Link key={i} href={item.url}>
              <i className={`text-2xl ${item.title}`}></i>
            </Link>
          ))}
        </div> */}
      {/* slider header  */}
      <div className="w-full py-2.5 flex justify-between items-center gap-2.5 bg-white text-center absolute bottom-0">
        {silderBottomHeaderData.map((item:linkType, id:number)=>(
          <Link key={id} href={item.url} className="w-full" ><i className={`${item.title}`}></i></Link>
        ))}        
      </div>
    </div>
  );
};

export default SlideInOut;
