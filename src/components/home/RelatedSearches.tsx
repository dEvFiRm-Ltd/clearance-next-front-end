"use client";
import Link from "next/link";
import React, { createRef } from "react";
import Slider from "react-slick";

const RelatedSearches = () => {
  const sliderRef = createRef<Slider>();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3.6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  const next = () => {
    sliderRef.current?.slickNext();
  };

  const searches = [
    {
      title: "floral wrap dress long",
      url: "",
    },
    {
      title: "front wrap maxi dress",
      url: "",
    },
    {
      title: "iconic wrap dress",
      url: "",
    },
    {
      title: "dress with wrap skirt",
      url: "",
    },
    {
      title: "famous wrap dress",
      url: "",
    },
    {
      title: "cotton midi wrap dress",
      url: "",
    },
    {
      title: "curvy wrap dress",
      url: "",
    },
    {
      title: "dolman wrap dress",
      url: "",
    },
    {
      title: "dolman wrap dress",
      url: "",
    },
  ];
  return (
    <div className="container mb-12">
      <p className="text-xl font-bold text-[#000000] capitalize text-center mb-[23px]">
        Related Searches
      </p>
      <div className="w-full flex flex-row relative justify-center">
        <div className="flex flex-row">
          <Slider
            className="w-[93vw] 2xl:w-[90vw]"
            ref={sliderRef}
            {...settings}
          >
            {searches.map((item: any, i: number) => (
              <div key={i} className="p-2 lg:p-3 xl:py-4">
                <Link
                  href={item.url}
                  className="p-2 lg:p-3 xl:p-4 rounded-full bg-[#F2F2F3] hover:bg-[#CED0D3] text-xs md:text-sm lg:text-base"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <button
          type="button"
          onClick={previous}
          className="absolute left-3 top-[50%] -translate-y-1/2 rounded-full"
        >
          <i className="fa-solid fa-chevron-left z-10"></i>
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-[50%] -translate-y-1/2 rounded-full"
        >
          <i className="fa-solid right-3 fa-chevron-right z-10"></i>
          <span className="searchBg"></span>
        </button>
      </div>
    </div>
  );
};

export default RelatedSearches;
