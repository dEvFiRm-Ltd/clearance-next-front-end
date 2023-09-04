'use client'
import { footerProps, linkType } from "@/utils/type";
import Link from "next/link";
import React, { FC, useState } from "react";

const FooterPart: FC<footerProps> = ({ itemArr, heading, headingClass }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
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
        {isExpanded && itemArr.map((item:linkType, id:number)=>(
          <Link key={id} href={item.url} className='py-2 text-sm text-[#5d626a]'>
            {item.title}
          </Link>))}
        </div>        
    </div>
    {/* mobile & tab only */}
      <p
        className={`hidden lg:block lg:text-base 2xl:text-lg font-bold text-black uppercase mb-5 ${headingClass}`}
      >
        {heading}
      </p>
      <div className="hidden lg:flex flex-col justify-start gap-y-3">
        {itemArr.map((item: linkType, id: number) => (
          <Link
            key={id}
            href={item.url}
            className="text-[13px] 2xl:text-sm text-black font-normal leading-5"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterPart;
