"use client";
import React, { FC, createRef, useState } from "react";
import Title from "../common/Title";
import FlashSaleCard from "../common/FlashSaleCard";
import CartModal from "../modal/CartModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
type flashSaleProps = {
  flashSaleArr: any;
};

const FlashSale: FC<flashSaleProps> = ({ flashSaleArr }) => {
  const [modals, setModals] = useState(false);
  const [modalData, setModalData] = useState<any>();
  const sliderRef = createRef<any>();
  const previous = () => {
    sliderRef.current?.swiperButtonPrev();
  };
  const next = () => {
    sliderRef.current?.swiperButtonNext();
  };
  return (
    <section className="mx-auto container">
      <Title />
      <div className="w-full md:px-4 lg:px-6 2xl:px-8 3xl:px-10 flex justify-center items-center pt-3 relative">
        {/* <div className="flex w-full absolute top-1/2 -translate-y-1/2 justify-between z-10 px-1">
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
        </div> */}
        <div className="w-full flex flex-row justify-center items-center">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.8,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4.8,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 5.6,
                spaceBetween: 24,
              },
              1780: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }}
            className="mySwiper"
          >
            {flashSaleArr.map((item: any) => (
              <SwiperSlide>
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
              </SwiperSlide>
            ))}
          </Swiper>
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
