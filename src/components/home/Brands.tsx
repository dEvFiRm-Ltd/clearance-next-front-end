'use client';
import { brandProps } from '@/utils/type';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, createRef } from 'react';
import Slider from 'react-slick';

const Brands: FC<brandProps> = ({ brandArr }) => {
  const sliderRef = createRef<Slider>();
  const settings = {
    variableWidth: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <section className='py-7 bg-ash'>
      <div className='mx-auto container flex flex-col justify-start items-center gap-y-6'>
        <h3 className='text-base lg:text-lg 2xl:text-xl font-bold text-center text-black-primary uppercase'>
          brands
        </h3>
        <div className='w-full flex flex-row justify-center gap-2 md:gap-3 lg:gap-4 xl:gap-5 flex-wrap !items-start py-3'>
          <Slider
            className='w-[90vw] 2xl:w-[95vw] 3xl:w-[60vw] '
            ref={sliderRef}
            {...settings}
          >
            {brandArr.map((item, id: number) => (
              <Link
                href={item.url}
                className='h-[84px] w-[84px] rounded-full overflow-hidden relative'
              >
                <Image fill src={item.logo} alt='brand logo' />
              </Link>
            ))}
          </Slider>
        </div>
        <button className='rounded bg-black-primary hover:opacity-80 text-white px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-2 text-xs md:text-sm 2xl:text-base uppercase'>
          view more
        </button>
      </div>
    </section>
  );
};

export default Brands;

