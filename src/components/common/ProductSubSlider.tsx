'use client';
import { productSubSliderData } from '@/static';
import { commonSliderProps, linkImgType } from '@/utils/type';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

export type subcategoryData = {
  categoryUrl?: string;
  data: any[];
  title: string;
  customActionCb: (e: any) => void;
};
interface subSliderProps extends commonSliderProps {
  subcategoryData: subcategoryData;
}

const ProductSubSlider: FC<subSliderProps> = ({
  closeStateCb,
  subcategoryData,
}) => {
  return (
    <div className='w-full min-h-screen overflow-y-scroll flex flex-col justify-start items-center gap-y-4'>
      <div className='w-full flex justify-start border-b py-4'>
        <button
          type='button'
          onClick={closeStateCb}
          className='px-4 font-normal text-xl'
        >
          <i className='fas fa-chevron-left text-black-primary'></i>
        </button>
        <span className='font-semibold text-lg uppercase'>
          {subcategoryData.title}
        </span>
      </div>
      <div className='w-full px-4 flex flex-col justify-start gap-y-4'>
        {/*  <Link
          href={''}
          className='w-full h-40 md:h-[366px] flex justify-center items-center relative overflow-hidden'
        >
          <Image
            fill
            src={
              'https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-08-29-64ede7ac360a3.png'
            }
            alt='image'
          />
        </Link> */}
        <div className='flex flex-col justify-start gap-y-2'>
          {subcategoryData.categoryUrl && (
            <div className='font-normal flex justify-between items-center text-xs text-gray capitalize'>
              <span className='font-semibold'>Shop by category</span>
              <Link href={subcategoryData.categoryUrl} target='_blank'>
                All <i className='fas fa-chevron-right '></i>
              </Link>
            </div>
          )}
          <div className='flex flex-row justify-start items-start flex-wrap pb-2'>
            {subcategoryData.data.map((item, id: number) => (
              <button
                key={id}
                type='button'
                onClick={() => {
                  subcategoryData.customActionCb(item);
                }}
                className='w-full flex flex-row justify-between items-center uppercase text-base text-black py-4 border-b last:border-0'
              >
                <span>{item?.name}</span>
                <i className='fa-solid fa-chevron-right text-xs pr-4'></i>
              </button>
            ))}
          </div>
        </div>
        {/* 02 */}
        {/*  {subcategoryData.categoryUrl && (
          <Link
            href={subcategoryData.categoryUrl}
            className='text-xs pb-1 w-full text-center uppercase'
          >
            view All <i className='fas fa-chevron-right '></i>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default ProductSubSlider;

