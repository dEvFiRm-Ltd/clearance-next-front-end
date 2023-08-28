import Image from "next/image";
import React from "react";

const BestSeller = () => {
  return (
    <div className="container my-8 flex flex-row justify-center gap-x-2.5">
      <div className="w-[890px] h-[818px] relative flex flex-col items-center justify-center">
        <Image src="https://images.pexels.com/photos/5409658/pexels-photo-5409658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" fill className="object-cover" />
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
      <div className="w-[890px] h-[818px] relative flex flex-col items-center justify-center">
        <Image src="https://images.pexels.com/photos/7552577/pexels-photo-7552577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" fill className="object-cover" />
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
