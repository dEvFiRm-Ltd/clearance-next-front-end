'use client';
import React, { FC, useState } from 'react';
import Title from '../common/Title';
import FlashSaleCard from '../common/FlashSaleCard';
import CartModal from '../modal/CartModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

type flashSaleProps = {
  flashSaleArr: any;
};

const FlashSale: FC<flashSaleProps> = ({ flashSaleArr }) => {
  const [modals, setModals] = useState(false);
  const [modalData, setModalData] = useState<any>();
  return (
    <section className='mx-auto container'>
      <Title />
      <div className='w-full md:px-4 lg:px-6 2xl:px-8 3xl:px-10 flex justify-center items-center pt-3 relative'>
        <div className='w-full flex flex-row justify-center items-center'>
          <Swiper
            spaceBetween={15}
            loop={true}
            slidesPerView='auto'
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Navigation]}
            className='flashSlider'
          >
            {flashSaleArr.map((item: any) => (
              <SwiperSlide>
                <FlashSaleCard
                  key={item.id}
                  // img={item.thumbnail}
                  text={item.name}
                  salePrice={item.offer_price}
                  price={item.price}
                  discount={item.discount}
                  url={item.slug}
                  img='/test.jpeg'
                  imgVariantSmall={true}
                  actionCb={() => {
                    setModalData(item);
                    setModals(!modals);
                  }}
                  groupClass='w-40 md:w-52 lg:w-60 3xl:w-[260px] p-2'
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

