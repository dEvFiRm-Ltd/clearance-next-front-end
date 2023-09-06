'use client'
import { footerProps, linkType } from "@/utils/type";
import Link from "next/link";
import React, { FC, useState } from "react";
import GoogleBtn from "./GoogleButton";

const FooterPart: FC<footerProps> = ({ itemArr, heading, headingClass, socialArr,contactUsText,contactUsArr,hasBtn }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="lg:w-[32%]">
      <div className='lg:hidden w-full border-b '>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full flex flex-row justify-between items-center uppercase text-base text-black py-4 ${headingClass}`}
        >
          <span>
          {heading}
          </span>
            <i className="fas fa-plus text-sm"></i>
        </button>
        <div className="pl-4 flex flex-col justify-start gap-y-1">
        {isExpanded && itemArr?.map((item:linkType, id:number)=>(
          <Link key={id} href={item.url} className='py-2 text-sm text-gray'>
            {item.title}
          </Link>))}
          {isExpanded && contactUsText && <p className="text-sm font-bold text-black uppercase ">{contactUsText}</p>}
        {isExpanded && contactUsArr && 
        <div className="flex flex-col text-black text-sm gap-y-1">
        {isExpanded && contactUsArr?.map((item:linkType,id:number)=>(
          <Link key={id} href={item.url} className="text-xs" ><i className={`${item.icon} mr-1.5`}></i>{item.title}</Link>
        ))}
        </div>}        
        {isExpanded && socialArr && 
        <div className="flex gap-x-4 p-2">
          {socialArr?.map((item:linkType,id:number)=>(
            <Link key={id} href={item.url} className="text-2xl"><i className={`${item.title}`}></i></Link> 
          ))}
        </div>}
        {isExpanded && hasBtn && <div className="flex flex-col justify-center items-start gap-3 ">
           <GoogleBtn
            groupClass="w-auto"
            actionCb={() => {}}
            btnText="Download on the"
            btnText2="app store"
            prefixIcon="fab fa-apple"
          />
          <GoogleBtn
            groupClass="w-auto"
            actionCb={() => {}}
            btnText="Download on the"
            btnText2="app store"
            prefixIcon="fab fa-apple"
          />
          {/* <GoogleBtn
            groupClass="w-auto"
            actionCb={() => {}}
            btnText="GET IT ON"
            btnText2="play store"
            prefixIcon="fab fa-google-play"
          /> */}
        </div>}
        </div>        
      </div>
      {/* mobile & tab only */}
      <h3
        className={`hidden lg:block lg:text-base 2xl:text-lg font-bold text-black uppercase mb-5 ${headingClass}`}
      >
        {heading}
      </h3>
      <div className="hidden lg:flex flex-col justify-start gap-y-3">
        {itemArr?.map((item: linkType, id: number) => (
          <Link
            key={id}
            href={item.url}
            className="text-[13px] 2xl:text-sm text-black font-normal leading-5"
          >
            {item.title}
          </Link>
        ))}
        {contactUsText && <p className="lg:text-base font-bold text-black uppercase ">{contactUsText}</p>}
        {contactUsArr && 
        <div className="flex flex-col text-black text-sm gap-y-1">
        {contactUsArr?.map((item:linkType,id:number)=>(
          <Link key={id} href={item.url}><i className={`${item.icon} mr-1.5`}></i>{item.title}</Link>
        ))}
        </div>}        
        {socialArr && 
        <div className="flex gap-x-4 p-2">
          {socialArr?.map((item:linkType,id:number)=>(
            <Link key={id} href={item.url} className="text-4xl"><i className={`${item.title}`}></i></Link> 
          ))}
        </div>}
        {hasBtn && <div className="flex flex-col justify-center items-start gap-3 ">
           <GoogleBtn
            groupClass="w-auto"
            actionCb={() => {}}
            btnText="Download on the"
            btnText2="app store"
            prefixIcon="fab fa-apple"
          />
          <GoogleBtn
            groupClass="w-auto"
            actionCb={() => {}}
            btnText="Download on the"
            btnText2="app store"
            prefixIcon="fab fa-apple"
          />
          {/* <GoogleBtn
            groupClass="w-auto"
            actionCb={() => {}}
            btnText="GET IT ON"
            btnText2="play store"
            prefixIcon="fab fa-google-play"
          /> */}
        </div>}
                
      </div>      
    </div>
  );
};

export default FooterPart;
