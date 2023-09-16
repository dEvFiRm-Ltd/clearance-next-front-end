import React from "react";
import Button from "../base/Button";
import { Popover } from "@headlessui/react";

const ShoppingBagTotal = () => {
  return (
    <div className="w-[400px] p-5 border">
      <p className="text-lg text-black-primary">Shopping Bag Total</p>
      <p className="text-base text-[#949494] mt-2 mb-2.5">Coupon</p>
      {/* input and button here  */}
      <div className="flex flex-row gap-x-1.5 pb-2.5 border-b border-[#E7E7E7]">
        <div className="w-[251px] flex flex-row border">
          <input
            type="text"
            placeholder="Enter or Select Coupon Code"
            className="focus:outline-none placeholder:text-xs pl-3 py-2"
          />

          <Popover className="relative">
            <Popover.Button className="w-10 h-10 text-center focus:outline-none">
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </Popover.Button>
            <Popover.Panel className="w-[241px] absolute z-10 bg-white -right-[1px] border">
              <input
                type="text"
                placeholder="No Code Available"
                className="w-full focus:outline-none placeholder:text-xs pl-3 py-4"
              />
            </Popover.Panel>
          </Popover>
        </div>
        <Button
          btnText="APPLY"
          btnClass="!uppercase !font-medium"
          btnType="button"
          actionCb={() => {}}
        />
      </div>
      <div className="flex flex-row justify-between items-center mt-3  mb-[5px]">
        <p className="text-[13px] text-[#949494]">Sub total</p>
        <p className="text-[13px] text-[#949494]">67.99 AED</p>
      </div>
      <div className="flex flex-row justify-between items-center border-b border-[#E7E7E7] pb-2.5">
        <p className="text-[13px] text-[#949494]">Shipping</p>
        <p className="text-[13px] text-[#DC2626]">Calculated at next step</p>
      </div>
      <div className="flex flex-row justify-between items-center mt-2.5">
        <p className="text-lg text-black-primary">Total</p>
        <p className="text-xl font-bold text-[#DC2626]">$67.99</p>
      </div>
      <Button
        btnText="PROCEED TO CHECKOUT"
        btnClass="!uppercase !mt-2 !mb-2.5 !text-[13px] !font-medium"
        btnType="button"
        actionCb={() => {}}
      />
      <p className="text-[13px] text-black-primary">
        * Final Discount Will Be Calculated At Checkout Page.
      </p>
    </div>
  );
};

export default ShoppingBagTotal;
