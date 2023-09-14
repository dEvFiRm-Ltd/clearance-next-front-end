import React, { createRef, useState } from 'react';
import FlashSaleCard from '../common/FlashSaleCard';
import CartModal from '../modal/CartModal';
import { frequentlyBuyData } from '@/static';
import { flashSaleCardProps } from '@/utils/type';
import Button from '../base/Button';
import Slider from 'react-slick';

const FrequentlyBuy = () => {
  const [modal, setModal] = useState(false);
  // const sliderRef = createRef<Slider>();
  // const settings = {
  //   infinite: true,
  //   autoplay: false,
  //   speed: 300,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 3.03,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1536,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 360,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  // const previous = () => {
  //   sliderRef.current?.slickPrev();
  // };
  // const next = () => {
  //   sliderRef.current?.slickNext();
  // };
  return (
    <section className='py-10 bg-[#F2F2F3]'>
      <div className='w-[1200px] mx-auto'>
        <h3 className='text-xl font-bold text-black-primary text-center'>
          Frequently bought together{' '}
        </h3>
        <div className='flex justify-center mt-8'>
          <FlashSaleCard
            img={
              'https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-06-06-647e58925291c.avif'
            }
            text={'Long sleeve crew neck loose leo....'}
            salePrice={'71.38'}
            price={'80.28'}
            discount={'20'}
            actionCb={() => setModal(!modal)}
            groupClass='w-40 3xl:w-[185px]'
            imgClass='!h-[246px]'
            btnClass='!w-40'
            btnText='Black,S'
            check={true}
          />
          <span className='text-[40px] font-normal mx-6 mt-20'>+</span>
          <div className='w-[647px] flex justify-center items-start flex-wrap gap-5 pl-2.5 relative'>
            {/* <Button
              actionCb={previous}
              variant="primary"
              icon="fas fa-chevron-left !text-base lg:!text-xl"
              btnClass="!bg-[#00000020] hover:!bg-[#00000040] flex items-center justify-center !absolute top-1/2 -translate-y-1/2 left-0 !w-10 !h-[104px] text-white z-10"
            />
            <Button
              actionCb={next}
              variant="primary"
              icon="fas fa-chevron-right !text-base lg:!text-xl"
              btnClass="!bg-[#00000020] hover:!bg-[#00000040] flex items-center justify-center !absolute top-1/2 -translate-y-1/2 right-0 !w-10 !h-[104px] text-white z-10"
            />
            <Slider className="w-[33vw] " ref={sliderRef} {...settings}>
            </Slider> */}
            {frequentlyBuyData.map((item: flashSaleCardProps, id: number) => (
              <FlashSaleCard
                key={id}
                img={item.img}
                text={item.text}
                salePrice={item.salePrice}
                price={item.price}
                discount={item.discount}
                btnText={item.btnText}
                actionCb={() => setModal(!modal)}
                groupClass='w-40 3xl:w-[185px] '
                imgClass='!h-[246px]'
                btnClass='!w-40'
                check={true}
              />
            ))}
          </div>
          <div className='flex flex-col justify-center items-center gap-10 h-[340px] w-60 overflow-hidden px-4 bg-white ml-10'>
            <div className='flex flex-col justify-start items-center gap-4'>
              <p className='flex text-base text-black-primary text-center'>
                Prix total ( <span className='text-red-400 pr-1.5'>11</span>{' '}
                ITEMS):
              </p>
              <div className='flex justify-center gap-1'>
                <p className='text-2xl font-bold text-red-600 '>557 AED</p>
                <p className='text-xl text-[#a1a5ab] line-through'>672 AED</p>
              </div>
            </div>
            <div className='space-y-4 w-full'>
              <Button
                actionCb={() => {}}
                btnText='Add to cart'
                variant='primary'
                btnClass='hover:!opacity-90 !text-lg !font-bold rounded'
              />
              <Button
                actionCb={() => {}}
                btnText='Buy it now'
                variant='outlined'
                btnClass='hover:!opacity-90 rounded !text-base font-semibold'
              />
            </div>
          </div>
        </div>
        <CartModal closeStateCb={() => setModal(false)} viewState={modal} />
      </div>
    </section>
  );
};

export default FrequentlyBuy;

