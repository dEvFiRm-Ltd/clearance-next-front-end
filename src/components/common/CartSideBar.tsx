import React, { FC } from "react";
import Button from "../base/Button";
export type cartSideBarProps = {
  closeCb: () => void;
  value: boolean;
};
const CartSideBar:FC<cartSideBarProps> = ({closeCb,value}) => {
  return (
    <div className={`h-screen bg-[#f2f2f3] w-[480px] absolute z-50 border border-ash transition-all duration-500 top-0 ${value? 'right-0':'-right-[480px]'}`}>
      <div className="bg-white w-full flex justify-between items-center p-4 border-b border-ash">
        <h6 className="capitalize text-2xl text-black-primary font-bold">cart</h6>
        <Button
          icon="fas fa-times !text-2xl !text-center !text-black-primary"
          btnClass="!w-7 !h-7 !rounded-full !flex !justify-center !items-center"
          actionCb={closeCb}
          variant="naked"
          btnType="button"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-[448px] gap-6 py-10">
        <div className="h-32 w-32 rounded-full bg-slate-50 overflow-hidden flex justify-center items-end">
          <i className="fas fa-shopping-cart text-[80px] text-black-primary"></i>
        </div>
        <p className="font-normal capitalize lg:text-base 3xl:text-lg text-center text-gray">
          Your Shopping Bag Is Empty
        </p>       
      </div>
    </div>
  );
};

export default CartSideBar;
