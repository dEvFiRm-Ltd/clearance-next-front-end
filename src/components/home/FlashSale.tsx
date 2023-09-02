import React from "react";
import Title from "../common/Title";
import FlashSaleCard from "../common/FlashSaleCard";
import { FlashSaleData } from "@/static";

const FlashSale = () => {
  return (
    <section className="mx-auto container">
      <Title />
      <div className="md:px-4 lg:px-6 2xl:px-8 3xl:px-10 flex justify-center items-center pt-3 relative">
        <div className="flex w-full absolute top-1/2 -translate-y-1/2 justify-between">
          <button
            type="button"
            className="h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 bg-white rounded-full flex justify-center items-center text-gray-800 btnShadow"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            className="h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 bg-white rounded-full flex justify-center items-center text-gray-800 btnShadow"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <FlashSaleCard
          flashSaleCardArr={FlashSaleData}
          groupClass="gap-2.5 md:gap-3.5 lg:gap-4 3xl:gap-6"
          childClass="w-40 md:w-52 lg:w-60 3xl:w-[260px] p-2"
        />
      </div>
    </section>
  );
};

export default FlashSale;
