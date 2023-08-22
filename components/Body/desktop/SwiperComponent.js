import Link from "@/helpers/Link"
import { useEffect } from "react"

// import dynamic from "next/dynamic"
// const OwlCarousel = dynamic(import("react-owl-carousel"), {
//   ssr: false
// })

import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

const SwiperComponent = ({ section }) => {
  SwiperCore.use([Navigation]);
  const swiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20
  };
  useEffect(() => {
  }, [])
  return (
    <div className="left-0 w-full pt-[50px] pb-[50px]">
    <div className="flex justify-center p-[10px]"><span className="font-[700] text-xl"> Featured Products</span></div>
    <div>  <Swiper
      className="relative after:clear-both after:table"
      {...swiperOptions}>
      {section.photos.length > 0 &&
      section.photos.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link href={item.linkTo || "#"}>
              <a className="cursor-pointer h-[360px]" style={{
                float: 'left',
                width: '100%',
                padding: '0px'
              }}>
                <img
                  className="w-full h-full"
                  alt=""
                  sizes="100vw"
                  src={item.file_path || ""}
                  decoding="async"
                  data-nimg="fill"
                />
              </a>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper></div>
    </div>
  )
}

export default SwiperComponent
