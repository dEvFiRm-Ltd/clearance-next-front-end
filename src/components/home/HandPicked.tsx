import React, { FC } from "react";
import FlashSaleCard from "../common/FlashSaleCard";
import { handPickedData } from "@/static";
import { flashSaleCardProps } from "@/utils/type";
type handPickedProps={
  handPickedArr:any
}
const HandPicked:FC<handPickedProps> = ({handPickedArr}) => {
  return (
    <section className="py-7">
      <div className="container flex flex-col justify-start items-center gap-y-6">
        <h3 className="text-base lg:text-lg 2xl:text-xl font-bold text-center text-black-primary uppercase">
          handpicked for you
        </h3>
        <div className="flex flex-row justify-center gap-2.5 md:gap-4 lg:gap-5 xl:gap-6 flex-wrap !items-start">
          {handPickedArr.map((item:any, id: number) => (
            <FlashSaleCard
              key={id}
              img={item.thumbnail}
              preSaleImgSticker={item.preSaleImgSticker}
              salePrice={item.price_formatted}
              price={item.offer_price_formatted}
              text={item.name}
              text2={item.text2}
              discount={item.discount}
              groupClass="w-40 sm:w-52 md:w-60 lg:w-80 xl:w-[390px] 2xl:w-[427px]"
              imgClass="!h-52 sm:!h-[278px] md:!h-80 lg:!h-[400px] xl:!h-[480px] 2xl:!h-[570px]"
            />
          ))}
        </div>
        <button className="rounded bg-black-primary hover:opacity-80 text-white px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-2 text-xs md:text-sm 2xl:text-base uppercase">
          view more
        </button>
      </div>
    </section>
  );
};

export default HandPicked;
