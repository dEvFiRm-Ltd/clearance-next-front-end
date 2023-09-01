import React from "react";
import FlashSaleCard from "../common/FlashSaleCard";
import { handPickedData } from "@/static";

const HandPicked = () => {
  return (
    <section className="py-7">
      <div className="container flex flex-col justify-start items-center gap-y-6">
        <h3 className="text-base lg:text-lg 2xl:text-xl font-bold text-center text-[#31353c] uppercase">
          handpicked for you
        </h3>
        <FlashSaleCard
          flashSaleCardArr={handPickedData}
          groupClass="gap-2.5 md:gap-4 lg:gap-5 xl:gap-6 flex-wrap !p-0 !items-start"
          childClass="w-40 sm:w-52 md:w-60 lg:w-80 xl:w-[390px] 2xl:w-[427px]"
          imgClass="!h-52 sm:!h-[278px] md:!h-80 lg:!h-[400px] xl:!h-[480px] 2xl:!h-[570px]"
        />
        <button className="rounded bg-[#31353c] hover:opacity-80 text-white px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-2 text-xs md:text-sm 2xl:text-base uppercase">
          view more
        </button>
      </div>
    </section>
  );
};

export default HandPicked;
