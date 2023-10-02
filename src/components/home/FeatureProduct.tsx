"use client";
import React, { FC, useState } from "react";
import FlashSaleCard from "../common/FlashSaleCard";
import CartModal from "../modal/CartModal";
import { usePathname } from "next/navigation";
type featureProductProps = {
  featureProductArr: any[];
  titleEn: string;
  titleAe: string;
  whitelist?: boolean;
  imgVariantSmall?: boolean;
  variants?: boolean;
};
const FeatureProduct: FC<featureProductProps> = ({
  featureProductArr,
  titleEn,
  titleAe,
  whitelist,
  imgVariantSmall,
  variants,
}) => {
  const [modals, setModals] = useState(false);
  const [modalData, setModalData] = useState<any>();
  const path = usePathname();
  const local = path.split("/")[1];
  return (
    <section className="py-5 w-full ">
      <div className="flex flex-col justify-start items-center gap-y-5">
        <h3 className="text-base lg:text-lg 2xl:text-xl font-bold text-center text-black-primary uppercase ">
          {local === "en" ? titleEn : titleAe}
        </h3>
        <div className="flex flex-row px-2 justify-center gap-2.5 md:gap-4 lg:gap-4 flex-wrap !items-start xl:w-full">
          {featureProductArr.map((item: any) => (
            <FlashSaleCard
              key={item.id}
              img={item.thumbnail}
              preSaleImgSticker={item.preSaleImgSticker}
              salePrice={item.offer_price}
              price={item.price}
              text={item.name}
              text2={"Buy 2 get 3rd 50% off"}
              discount={item.discount}
              url={item.slug}
              actionCb={() => {
                setModalData(item);
                setModals(!modals);
              }}
              // groupClass='w-40 sm:w-52 md:w-60 lg:w-80 xl:w-[390px] 2xl:w-[427px]'
              groupClass="w-[48%] sm:w-52 md:w-[364px] lg:w-[208px] xl:w-[308px] 2xl:w-[348px] 3xl:w-[427px]"
              imgClass="aspect-[3/4]"
              whitelist={whitelist}
              imgVariantSmall={imgVariantSmall}
              variants={variants}
              salePriceClass={"2xl:text-xl"}
              priceClass={"2xl:text-sm"}
            />
          ))}
        </div>
        {/*   <button className='rounded bg-black-primary hover:opacity-80 text-white px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-2 text-xs md:text-sm 2xl:text-base uppercase'>
          view more
        </button> */}
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

/*

<FlashSaleCard
              key={item.id}
              img={item.thumbnail}
              preSaleImgSticker={item.preSaleImgSticker}
              salePrice={item.offer_price}
              price={item.price}
              text={item.name}
              text2={"Buy 2 get 3rd 50% off"}
              discount={item.discount}
              url={item.slug}
              actionCb={() => {
                setModalData(item);
                setModals(!modals);
              }}
              // groupClass='w-40 sm:w-52 md:w-60 lg:w-80 xl:w-[390px] 2xl:w-[427px]'
              groupClass='w-[48%] sm:w-52 md:w-[364px] md:min-h-[524px] lg:w-[492px] xl:w-[296px] 2xl:w-[336px]'
              imgClass='!h-[233px] sm:!h-[278px] md:!h-[485px] lg:!h-[656px] xl:!h-[363px] 2xl:!h-[447px]'
              whitelist={whitelist}
              imgVariantSmall={imgVariantSmall}
              variants={variants}
              salePriceClass={'2xl:text-xl'}
              priceClass={"2xl:text-sm"}
            />

*/
