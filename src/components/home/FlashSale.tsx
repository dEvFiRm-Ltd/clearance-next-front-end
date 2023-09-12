"use client";
import React, { FC, createRef, useState } from "react";
import Title from "../common/Title";
import FlashSaleCard from "../common/FlashSaleCard";
import { FlashSaleData } from "@/static";
import { flashSaleCardProps } from "@/utils/type";
import Slider from "react-slick";
import CartModal from "../modal/CartModal";
type flashSaleProps = {
  flashSaleArr: any;
};

const FlashSale: FC<flashSaleProps> = ({ flashSaleArr }) => {
  const [modals, setModals] = useState(false);
  const [modalData, setModalData] = useState<any>();
  const sliderRef = createRef<Slider>();
  const settings = {
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
          slidesToShow: 5,
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
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          
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
  return (
    <section className="mx-auto container">
      <Title />
      <div className="w-full md:px-4 lg:px-6 2xl:px-8 3xl:px-10 flex justify-center items-center pt-3 relative">
        <div className="flex w-full absolute top-1/2 -translate-y-1/2 justify-between z-10 px-1">
          <button
            type="button"
            onClick={previous}
            className="hidden sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 bg-white rounded-full sm:flex justify-center items-center text-gray btnShadow"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            onClick={next}
            className="hidden sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 bg-white rounded-full sm:flex justify-center items-center text-gray btnShadow"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="p-3 flex flex-row justify-center items-center">
          <Slider
            className="w-[90vw] 2xl:w-[95vw] 3xl:w-[87vw] "
            ref={sliderRef}
            {...settings}
          >
            {flashSaleArr.map((item: any) => (
              <FlashSaleCard
                key={item.id}
                img={item.thumbnail}
                text={item.name}
                salePrice={item.offer_price}
                price={item.price}
                discount={item.discount}
                url={item.slug}
                imgVariantSmall={true}
                actionCb={() => {
                  setModalData(item);
                  setModals(!modals);
                }}
                groupClass="w-40 md:w-52 lg:w-60 3xl:w-[260px] p-2"
              />
            ))}
          </Slider>
        </div>
      </div>
      <CartModal
        closeStateCb={() => {
          setModals(false);
        }}
        viewState={modals}
        data={modalData}
      />
    </section>
  );
};

export default FlashSale;
