"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import Button from "../base/Button";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { CartProduct } from "./CartProduct";
export type cartSideBarProps = {
  closeCb: () => void;
  value: boolean;
  setCart: (e: boolean) => void;
};
const CartSideBar: FC<cartSideBarProps> = ({ value, setCart }) => {
  const cartBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (cartBox.current && !cartBox.current.contains(event.target)) {
        setCart(false);
      } else {
        setCart(true);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setCart]);


  

  return (
    <div
      className={`h-screen bg-black-primary/60 w-full flex justify-end absolute z-50 transition-all duration-500 top-0 ${
        value ? "right-0" : "-right-full"
      }`}
    >
      <div
        ref={cartBox}
        className={`h-screen bg-[#f2f2f3] w-[480px]  border border-ash`}
      >
        <div className="bg-white w-full flex justify-between items-center p-4 border-b border-ash">
          <h6 className="capitalize text-2xl text-black-primary font-bold">
            cart
          </h6>
          <Button
            icon="fas fa-times !text-2xl !text-center !text-black-primary"
            btnClass="!w-7 !h-7 !rounded-full !flex !justify-center !items-center"
            actionCb={() => {
              setCart(false);
            }}
            variant="naked"
            btnType="button"
          />
        </div>
        {/* empty bag  */}
        {/* <div className="flex flex-col justify-center items-center w-[448px] gap-6 py-10">
        <div className="h-32 w-32 rounded-full bg-slate-50 overflow-hidden flex justify-center items-end">
          <i className="fas fa-shopping-cart text-[80px] text-black-primary"></i>
        </div>
        <p className="font-normal capitalize lg:text-base 3xl:text-lg text-center text-gray">
          Your Shopping Bag Is Empty
        </p>       
      </div> */}

        <div className="flex flex-col items-start justify-between h-[92vh]">
          <div className="bg-white pb-2 w-full">
            {/* free gift  */}
            <p className="text-[12px] leading-[14px] text-left text-[#31353C] line-clamp-2 bg-[#FBEFEFCC] px-2 py-3 mb-1 w-full border-b-4 border-ash">
              Order <strong>$12 </strong>more and get <strong>FREE GIFT</strong>
            </p>
            {/* flash sale */}
            <div className="pr-[16px] pt-[16px] w-full pl-[48px] mb-4">
              <div className="flex justify-between w-full">
                <div className="relative flex items-center">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-5 relative px-1 rounded-sm bg-[#ffe7e7]">
                    <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-red-600 truncate max-w-[266px]">
                      Flash Sale
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-1 mt-2">
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#a1a5ab]">
                  Ends In:
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#484c52] notranslate">
                  1D: 03H: 24M: 53S
                </p>
              </div>
            </div>
            {/* product  */}
            <CartProduct/>
          </div>

          <div className="w-full bg-white">
            <p className="bg-[#f5fcfbf5] w-full text-[#31353C] text-[12px] line-clamp-2 leading-[14px] text-left px-2 py-3 border-b-2 border-ash">
              Spend <strong>$42.32</strong> more and get{" "}
              <strong>FREE SHIPPING!</strong>(Except final sale items)
            </p>
            <div className="flex items-end justify-between p-2">
              <div className="flex space-x-2 items-center">
                <input className="checked:bg-black-primary mt-[0.5px]" type="checkbox" />
                <p className="text-[16px] leading-[18px] text-left text-[#31353c]">Selected (2)</p>
              </div>
              <div>
                <p className="text-[16px] leading-[18px] text-[#5d626a] text-right my-2">Save: $15.3</p>
              <p className="text-">Total: <strong className="text-red-700">$86.68</strong></p>
              </div>
            </div>
            <button className="uppercase bg-[#000000] text-white p-2 text-center w-[97%] ml-2 rounded font-bold">checkout</button>
            <button className="uppercase text-[#000000] p-2 text-center w-[97%] ml-2 mt-2 rounded font-bold">view cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
