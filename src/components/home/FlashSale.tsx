"use client";
import React, { FC, useState } from "react";
import Title from "../common/Title";
import FlashSaleCard from "../common/FlashSaleCard";
import CartModal from "../modal/CartModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

type flashSaleProps = {
  flashSaleArr: any;
};

const FlashSale: FC<flashSaleProps> = ({ flashSaleArr }) => {
  const [modals, setModals] = useState(false);
  const [modalData, setModalData] = useState<any>();
  return (
    <section className="mx-auto container w-full lg:px-2 py-2 md:py-5 !font-[Helvetica]">
      <Title />
      <div className="w-full md:px-4 lg:px-6 2xl:px-8 3xl:px-10 flex justify-center items-center pt-3 relative">
        <div className="w-full flex flex-row justify-center items-center">
          <Swiper
            spaceBetween={10}
            loop={true}
            slidesPerView="auto"
            navigation={true}
            autoplay={false}
            modules={[Autoplay, Navigation]}
            className="flashSlider"
          >
            {flashSaleArr.map((item: any) => (
              <SwiperSlide key={item.id}>
                <FlashSaleCard
                  img={
                    "https://www.stylewe.com/image_cache/resize/335x445/image/catalog/product/2022-10-18/e0eba04196313a4cd8473605900e7cb8.jpg"
                  }
                  text={item.name}
                  salePrice={item.offer_price}
                  price={item.price}
                  discount={item.discount}
                  url={item.slug}
                  imgVariantSmall={false}
                  addToCartIcon={false}
                  actionCb={() => {
                    setModalData(item);
                    setModals(!modals);
                  }}
                  // groupClass='w-40 md:w-52 lg:w-60 3xl:w-[260px] p-2'
                  groupClass="w-[90px] h-full lg:w-[114px] xl:w-[156px] 2xl:w-[206px] 3xl:w-[260px] lg:p-2 lg:mr-3.5"
                  // priceClass="!text-left !text-[10px] xl:!text-sm"
                  // salePriceClass="!text-left !text-[10px] md:!text-base xl:!text-[12px]"
                  imgClass="w-full !aspect-[191/256]"
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

/*


<FlashSaleCard
                  img={item.thumbnail}
                  text={item.name}
                  salePrice={item.offer_price}
                  price={item.price}
                  discount={item.discount}
                  url={item.slug}
                  imgVariantSmall={false}
                  addToCartIcon={false}
                  actionCb={() => {
                    setModalData(item);
                    setModals(!modals);
                  }}
                  // groupClass='w-40 md:w-52 lg:w-60 3xl:w-[260px] p-2'
                  groupClass='w-[90px] h-full xl:h-[310px] xl:w-[156px] 2xl:w-[198px] 3xl:w-[260px] md:p-2'
                  priceClass='!font-[400] !text-left !text-[10px] xl:!text'
                  salePriceClass='!font-[400] !text-[#dc2626] !text-left !text-[10px] xl:!text-[12px]'
                  imgClass='min-w-[90px] !h-[120px] !rounded-md xl:!w-full xl:!h-full 2xl:!h-[244px]'
                />


*/
