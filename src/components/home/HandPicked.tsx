import React from "react";
import FlashSaleCard from "../common/FlashSaleCard";
import { handPickedData } from "@/static";

const HandPicked = () => {
  return (
    <section className="py-7">
      <div className="container flex flex-col justify-start items-center gap-y-6">
        <h3 className="text-xl font-bold text-center text-[#31353c] uppercase">
          handpicked for you
        </h3>
        <FlashSaleCard
          flashSaleCardArr={handPickedData}
          groupClass="gap-4 xl:gap-6 flex-wrap !p-0 !items-start"
          childClass="w-[328px] sm:w-[300px] md:w-[356px] lg:w-[322.67px] xl:w-[390px] 2xl:w-[427px]"
          imgClass="h-[430px] sm:h-[380px] md:h-[480px] lg:h-[400px] xl:!h-[480px] 2xl:!h-[570px]"
        />
        <button className="rounded bg-[#31353c] hover:opacity-80 text-white px-8 py-2 text-base uppercase">
          view more
        </button>
      </div>
    </section>
  );
};

export default HandPicked;
