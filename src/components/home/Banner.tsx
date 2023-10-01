"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, createRef, useEffect, useState } from "react";
import Slider from "react-slick";

type bannerPropsType = {
  imgArr: Array<any>;
};

const Banner: FC<bannerPropsType> = ({ imgArr }) => {
  const sliderRef = createRef<Slider>();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  const next = () => {
    sliderRef.current?.slickNext();
  };

  // ###### fetching api for banner images
  // useEffect(() => {
  //   fetch("https://staging.clearance.ae/api/v11/main-banner")
  //   .then(response=>response.json())
  //   .then(json => console.log(setBannerImgArr(json.data.main_banners)))
  // }, [])

  return (
    <section className="relative group flex items-center">
      <Slider
        swipeToSlide={true}
        className="w-screen "
        ref={sliderRef}
        {...settings}
      >
        {imgArr.map((item: any) => (
          <Link
            target={process.env.NEXT_PUBLIC_SITE_URL ? "_blank" : ""}
            href={
              process.env.NEXT_PUBLIC_SITE_URL
                ? item.url
                : "/product-details" + item.url
            }
            key={item.id}
            className=" w-full lg:aspect-[635/248] aspect-[39/37] bg-center bg-no-repeat relative z-10 flex justify-center items-center"
          >
            <Image
              src={
                "https://www.stylewe.com/image/catalog/activity/earW4RZY2D1695284126.webp"
              }
              alt=""
              fill
              className="object-contain"
            />
          </Link>
        ))}
      </Slider>
      <div className="absolute z-10 w-full justify-between flex group-hover:opacity-100 opacity-0 transition-opacity duration-300 px-3 xl:px-5">
        <button
          type="button"
          onClick={previous}
          className="bg-[#ffffff88] h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 rounded-full flex justify-center items-center text-gray-800 "
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          type="button"
          onClick={next}
          className="bg-[#ffffff88] h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 rounded-full flex justify-center items-center text-gray-800 "
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Banner;
// w-screen h-52 md:h-80 lg:h-[428px] xl:h-[535px] 2xl:h-[642px] 3xl:h-[745px]
