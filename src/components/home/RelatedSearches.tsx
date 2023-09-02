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
    slidesToShow: 8.2,
    slidesToScroll: 1,
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
      <p className="text-xl leading-8 font-bold text-[#000000] capitalize text-center mb-[23px]">
        Related Searches
      </p>
      <div className="w-full flex flex-row relative">
        <div className="flex flex-row">
          <Slider className="w-[93vw]" ref={sliderRef} {...settings}>
            {searches.map((item: any, i: number) => (
              <div key={i} className="py-4">
                <Link
                  href={item.url}
                  className="p-4 rounded-full bg-[#F2F2F3] hover:bg-[#CED0D3]"
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
          className="absolute right-3 top-[50%] -translate-y-1/2 rounded-full shadow-white"
        >
          <i className="fa-solid right-3 fa-chevron-right z-10"></i>
        </button>
      </div>
    </div>
  );
};

export default RelatedSearches;
