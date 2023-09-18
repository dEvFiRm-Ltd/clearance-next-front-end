import React from "react";

export const Coupon = () => {
  return (
    <div className="flex flex-col items-start justify-between min-h-[300px] lg:min-h-[400px]">
      <div className="w-full">
        <h2 className="text-2xl border-b-2 pb-4 border-black-primary mb-6">
          My Coupon
        </h2>
        <div className="flex items-start lg:mb-20">
          <button className="bg-black-primary border border-slate-400 rounded-sm text-white text-center w-[90px] h-[35px] lg:w-[175px] lg:h-[50px]">
            Unused
          </button>
          <button className="text-black-primary border border-slate-400  bg-white text-center w-[90px] h-[35px] lg:w-[175px] lg:h-[50px]">
            Used
          </button>
          <button className="text-black-primary border border-slate-400 rounded-sm bg-white text-center w-[90px] h-[35px] lg:w-[175px] lg:h-[50px]">
            Expired
          </button>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col items-center">
        <i className="fa-solid fa-percent text-4xl text-slate-400" />
        <p className="text-sm text-slate-500">No Coupons</p>
      </div>
    </div>
  );
};
