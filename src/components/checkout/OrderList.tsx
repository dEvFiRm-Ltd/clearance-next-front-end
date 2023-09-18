import React from "react";

export const OrderList = () => {
  return (
    <div>
      <h2 className="text-2xl border-b-2 pb-4 border-black-primary mb-6">
        Order List
      </h2>
      <div className="flex items-start mb-20">
        <button className="bg-black-primary border border-slate-400 rounded-sm text-white text-center w-[130px] h-[35px] lg:w-[175px] lg:h-[50px]">
          Order
        </button>
        <button className="text-black-primary border border-slate-400 rounded-sm bg-white text-center w-[130px] h-[35px] lg:w-[175px] lg:h-[50px]">
          Return Order
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <i className="fa-regular fa-address-book text-4xl text-slate-500"></i>
        <p className="text-sm text-slate-500 my-4">
          You don't have any orders yet, go pick your favourite products!
        </p>
        <button className="uppercase bg-black-primary p-3 text-sm text-white rounded-sm">Go Shopping</button>
      </div>
    </div>
  );
};
