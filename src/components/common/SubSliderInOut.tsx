'use client'
import { footerProps, linkType } from '@/utils/type';
import Link from 'next/link'
import React, { FC, useState } from 'react'
const SubSliderInOut:FC<footerProps> = ({heading,itemArr}) => {
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className='w-full border-b '>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex flex-row justify-between items-center uppercase text-base text-black py-4"
        >
          <span>
          {heading}
          </span>
            <i className="fas fa-plus text-sm"></i>
        </button>
        <div className="pl-4 flex flex-col justify-start gap-y-1">
        {isExpanded && itemArr.map((item:linkType, id:number)=>(<Link key={id} href={item.url} className='py-2 text-sm text-[#5d626a]'>
            {item.title}
        </Link>))}
        </div>
        
    </div>
  )
}

export default SubSliderInOut