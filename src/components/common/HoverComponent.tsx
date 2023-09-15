import React from 'react';
import FooterPart from './FooterPart';
import Image from 'next/image';
import { bottomHeaderItems } from '@/static';
import { footerProps } from '@/utils/type';

const HoverComponent = () => {
  return (
    <div className='flex flex-row justify-center items-start gap-x-10 pt-10 pb-[52px] z-50 bg-white w-screen'>
      {bottomHeaderItems.map((item: footerProps, id: number) => (
        <FooterPart
          key={id}
          heading={item.heading}
          itemArr={item.itemArr}
          headingClass='!text-sm !capitalize !mb-4'
        />
      ))}
      <div className='flex flex-row items-center lg:gap-x-4 2xl:gap-x-5'>
        <div className='lg:w-48 xl:w-60 2xl:w-72 3xl:w-80 lg:h-32 xl:h-40 2xl:h-48 3xl:h-52 relative overflow-hidden'>
          <img src='/girl.jpg' alt='' className='object-cover' />
        </div>
        <div className='lg:w-48 xl:w-60 2xl:w-72 3xl:w-80 lg:h-32 xl:h-40 2xl:h-48 3xl:h-52 relative overflow-hidden'>
          <img src='/girl2.jpg' alt='' className='object-cover' />
        </div>
      </div>
    </div>
  );
};

export default HoverComponent;

