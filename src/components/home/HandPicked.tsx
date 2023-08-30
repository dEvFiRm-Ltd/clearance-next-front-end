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
          groupClass="gap-6 flex-wrap !p-0 !items-start"
          childClass="w-[427px]"
          imgClass="!h-[570px]"
        />
        <button className="rounded bg-[#31353c] hover:opacity-80 text-white px-8 py-2 text-base uppercase">
          view more
        </button>
      </div>
    </section>
  );
};

export default HandPicked;
