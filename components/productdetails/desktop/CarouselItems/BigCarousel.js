import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { BannerLogo } from "@/helpers/Loader/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import CountFlashSale from "../../../Body/desktop/CountFlashSale";
import SmallCarousel from "./SmallCarousel";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import { LoaderImage } from "../../../../helpers/Loader/Loading";
const BigCarousel = ({ product }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  const productLoading = useSelector(
    (state) => state?.ProductReducer?.productLoading
  );
  SwiperCore.use([Navigation, Scrollbar, Pagination]);
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    pagination: {
      el: ".custom-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return `
          <span class="${className} shadow shadow-md w-[75px] h-[100px] flex items-center justify-center">
            <img src="${product?.images[index]}" class="" alt="Pagination Image" />
          </span>
        `;
      },
    },
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const slideToIndex = (index) => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slideTo(index);
    }
  };

  useEffect(() => {
    slideToIndex(activeIndex);
  }, [activeIndex]);
  return (
    <div className="h-[700px] w-full flex-grow-0 flex-shrink-0 relative overflow-hidden bg-[#ffff] image-swiper_big-swiper__RGlVl w-[422px]">
      {productLoading ? (
        <div className="w-full h-[700px]">
          <BannerLogo width={"100%"} height={"100%"} viewBox={"0 0 100 130"} />
        </div>
      ) : (
        <div className="flex h-[700px]  flex-row space-x-10">
          <div className="">
            <SmallCarousel
              product={product}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
          <Swiper
            ref={swiperRef}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            {...swiperOptions}
            className="h-[700px] min-h-[630px] shadow-lg	border-x-2 border-y-2 swiper swiper-initialized swiper-horizontal swiper-pointer-events w-full swiper-backface-hidden"
          >
            {product?.images?.map((photo, i) => {
              return (
                <SwiperSlide className="h-[700px] min-h-[630px] flex items-center justify-center rounded-3xl">
                  {/*<div key={i} className="h-full swiper-slide">*/}
                  <img
                    className="h-[700px] min-h-[630px] w-full object-contain"
                    alt={photo}
                    src={photo}
                  />
                  {/*</div>*/}
                </SwiperSlide>
              );
            })}
            {product?.flash_deal_details && (
              <CountFlashSale Upper={true} pro={product} />
            )}
          </Swiper>
        </div>
      )}
      {/* Custom pagination container */}
    </div>
  );
};
export default BigCarousel;
