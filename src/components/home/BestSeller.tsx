import Image from "next/image";
import React from "react";

const BestSeller = () => {
  return (
    <div className="container my-8 flex flex-row justify-center gap-x-2.5">
      <div className="md:w-[367px] lg:w-[995px] xl:w-[615px] 2xl:w-[743px] 3xl:w-[890px] md:h-[300px] lg:h-[450px] xl:h-[550px] 2xl:h-[670px] 3xl:h-[818px] relative flex flex-col items-center justify-center">
        <Image
          src="https://sstorage.clearance.ae/production/storage/banner/2023-06-05-647dab8cce697.avif"
          alt="image"
          fill
          className="object-cover"
        />
        <h1 className="text-5xl leading-8 font-bold text-white mb-10 z-10 uppercase">
          Best Seller
        </h1>
        <button
          type="button"
          className="flex flex-row items-center gap-x-3 z-10 bg-white px-10 py-2.5 uppercase"
        >
          <p>shop now</p>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="md:w-[367px] lg:w-[995px] xl:w-[615px] 2xl:w-[743px] 3xl:w-[890px] md:h-[300px] lg:h-[450px] xl:h-[550px] 2xl:h-[670px] 3xl:h-[818px] relative flex flex-col items-center justify-center">
        <Image
          src="https://sstorage.clearance.ae/production/storage/banner/2023-08-29-64edb55839c25.png"
          alt="image"
          fill
          className="object-cover"
        />
        <h1 className="text-5xl leading-8 font-bold text-white mb-10 z-10 uppercase">
          stylewe classic look
        </h1>
        <button
          type="button"
          className="flex flex-row items-center gap-x-3 z-10 bg-white px-10 py-2.5 uppercase"
        >
          <p>shop now</p>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
