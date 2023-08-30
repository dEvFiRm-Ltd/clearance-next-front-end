import React from "react";
import Title from "../common/Title";
import FlashSaleCard from "../common/FlashSaleCard";
import { FlashSaleData } from "@/static";

const FlashSale = () => {
  return (
    <section className="container">
      <Title />
      <div className="px-10 flex justify-center items-center pt-3 relative">
        <div className="flex w-full absolute top-1/2 -translate-y-1/2 justify-between">
          <button
            type="button"
            className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-gray-800 btnShadow"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-gray-800 btnShadow"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <FlashSaleCard
          flashSaleCardArr={FlashSaleData}
          groupClass="gap-6"
          childClass="w-[260px] p-2"
        />
      </div>
    </section>
  );
};

export default FlashSale;
