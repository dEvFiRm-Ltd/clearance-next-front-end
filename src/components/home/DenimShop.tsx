import Image from "next/image";
import React from "react";

const DenimShop = () => {
  return (
    <div className="xl:container h-[200px] sm:h-[240px] md:h-[270px] lg:h-[340px] xl:h-[450px] 2xl:h-[580px] 3xl:h-[594px] w-full relative mb-[35px]">
      <Image
        src="https://sstorage.clearance.ae/production/storage/banner/2023-08-29-64edb50240a8f.png"
        alt="banner"
        fill
        className="object-container"
      />
      <div className="z-10 absolute -translate-y-1/2 top-[50%] right-[50px] sm:right-[60px] md:right-[100px] lg:right-[150px] flex flex-col items-center">
        <h1 className="md:text-2xl xl:text-5xl leading-[50px] uppercase text-[#FFFFFF] font-bold xl:mb-5">
          the denim shop
        </h1>
        <button
          type="button"
          className="flex text-xs md:text-sm xl:text-base flex-row items-center gap-x-3 bg-white px-4 md:px-7 xl:px-10 py-2 xl:py-2.5 uppercase"
        >
          <p>shop now</p>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default DenimShop;
