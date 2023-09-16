import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

export type dressType = {
  image: string;
  title?: string;
  url?: string;
  heading?: string;
  hightClass?: string;
  withClass?: string;
  totalProduct?: number;
};

const DressCard: FC<dressType> = ({
  image,
  url,
  title,
  hightClass,
  withClass,
  heading,
  totalProduct,
}) => {
  return (
    <Link
      target='_blank'
      href={'https://www.clearance.ae/products?category=' + url}
      className={`w-40 lg:w-44 xl:w-48 2xl:w-[234px] 3xl:w-[272px] flex flex-col items-center justify-start gap-y-4 uppercase ${withClass}`}
    >
      <div
        className={`relative h-56 lg:h-64 xl:h-72 2xl:h-[335px] 3xl:h-[390px] w-full ${hightClass}`}
      >
        <Image src={image} alt='image' fill className='object-cover' />
      </div>
      {heading && (
        <p className='text-base md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-10 font-semibold text-black'>
          {heading}
        </p>
      )}
      {title && (
        <p className='border-b text-gray border-[#B9B9B9] text-sm lg:text-base xl:text-lg 3xl:text-xl xl:leading-8'>
          {title} ({totalProduct})
        </p>
      )}
    </Link>
  );
};

export default DressCard;

