'use client'
import { productSubSliderData } from '@/static'
import { commonSliderProps, linkImgType } from '@/utils/type'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const ProductSubSlider:FC<commonSliderProps> = ({closeStateCb}) => {
  return (
    <div className='w-full flex flex-col justify-start items-center gap-y-4'>
        <div className='w-full flex justify-start border-b py-4'>
          <button type='button' onClick={closeStateCb} className='px-4 font-normal text-xl'>
            <i className="fas fa-chevron-left text-[#31353c]"></i>
          </button>          
          <span className="font-semibold text-lg uppercase">Cothing</span>
        </div>
        <div className="w-full p-4 flex flex-col justify-start gap-y-4">
          <Link href={''} className="w-full h-40 md:h-[366px] flex justify-center items-center relative overflow-hidden">
            <Image fill src={'https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-08-29-64ede7ac360a3.png'} alt='image'/>
          </Link>
          <div className="flex flex-col justify-start gap-y-2 border-b">
            <Link href={''} className="font-normal flex justify-between items-center text-xs text-[#5d626a] capitalize">
              <span className="font-semibold">Shop by category</span>
              <div >All <i className="fas fa-chevron-right "></i></div>                
            </Link>
            <div className="flex flex-row justify-start items-start flex-wrap pb-2">
              {productSubSliderData.map((item:linkImgType, id:number)=>(
                <Link key={id} href={item.url} className="px-2.5 w-[84px] md:w-[194px] text-center">
                <div className="w-full h-16 md:h-[174px] overflow-hidden relative">
                  <Image alt='Image' fill src={item.img}/>
                </div>
                <span className="my-2 text-xs text-[#31353c] capitalize">{item.title}</span>
              </Link>
              ))}
            </div>
          </div>
          {/* 02 */}
          <Link href={''} className="text-xs pb-1 w-full text-center uppercase">
             view All <i className="fas fa-chevron-right "></i>
          </Link>
        </div>
    </div>
  )
}

export default ProductSubSlider