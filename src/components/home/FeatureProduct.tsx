'use client';
import React, { FC, useState } from 'react';
import FlashSaleCard from '../common/FlashSaleCard';
import CartModal from '../modal/CartModal';
type featureProductProps = {
  featureProductArr: any[];
  title: string;
};
const FeatureProduct: FC<featureProductProps> = ({
  featureProductArr,
  title,
}) => {
  const [modals, setModals] = useState(false);
  const [modalData, setModalData] = useState<any>();
  return (
    <section className='py-7'>
      <div className='container flex flex-col justify-start items-center gap-y-6'>
        <h3 className='text-base lg:text-lg 2xl:text-xl font-bold text-center text-black-primary uppercase'>
          {title}
        </h3>
        <div className='flex flex-row justify-center gap-2.5 md:gap-4 lg:gap-5 xl:gap-6 flex-wrap !items-start'>
          {featureProductArr.map((item: any) => (
            <FlashSaleCard
              key={item.id}
              // img={item.thumbnail}
              img={'/test.jpeg'}
              preSaleImgSticker={item.preSaleImgSticker}
              salePrice={item.price}
              price={item.offer_price}
              text={item.name}
              text2={item.text2}
              discount={item.discount}
              url={item.slug}
              actionCb={() => {
                setModalData(item);
                setModals(!modals);
              }}
              groupClass='w-40 sm:w-52 md:w-60 lg:w-80 xl:w-[390px] 2xl:w-[427px]'
              imgClass='!h-52 sm:!h-[278px] md:!h-80 lg:!h-[400px] xl:!h-[480px] 2xl:!h-[570px]'
            />
          ))}
        </div>
        <button className='rounded bg-black-primary hover:opacity-80 text-white px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-2 text-xs md:text-sm 2xl:text-base uppercase'>
          view more
        </button>
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

export default FeatureProduct;

