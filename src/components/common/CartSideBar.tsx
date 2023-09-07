"use client";

import React, { FC, useEffect, useRef } from "react";
import Button from "../base/Button";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "@headlessui/react";
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

        <div>
          <div className="flex justify-start items-center">
            <p className="text-[12px] leading-[14px] text-left text-[#31353C] line-clamp-2 bg-[#FBEFEFCC] p-2 w-full">
              Order <strong>$12 </strong>more and get <strong>FREE GIFT</strong>
            </p>
          </div>

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

          <div className="flex justify-between max-w-[448px] px-4">
            <input className="" type="checkbox" />
            <div className="flex items-start space-x-3">
              {/* image  */}
              <div className="w-[102px] h-[136px] relative">
                <Image src="" alt="" fill className="" />
              </div>
              {/* product details  */}
              <div>
                <div>
                  <div className="flex space-x-3">
                    <Link
                      className="flex w-full justify-between items-center self-stretch flex-grow-0 flex-shrink-0 gap-3"
                      href={"#"}
                    >
                      <span className="flex-grow text-[14px] font-normal leading-[20px] truncate text-left text-[#31353C] max-w-[245px]">
                        Products name goes here and long text will be truncate
                      </span>
                    </Link>
                    <button className="p-0">
                      <i className="fa-regular fa-trash-can" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 notranslate my-2">
                  <p className="flex-grow-0 flex-shrink-0 text-base leading-[24px] font-bold text-left text-[#31353C]">
                    $43.34
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-[14px] leading-[19px] line-through text-left text-[#a1a5ab]">
                    $50.99
                  </p>
                </div>

                <Popover className="relative ">
                  <Popover.Button className='px-2 rounded-md flex items-center space-x-1 text-[#484c52] bg-[#d9d9da]'>
                    <span>Black, S</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </Popover.Button>
                  <Popover.Panel className="absolute z-10"></Popover.Panel>
                </Popover>


                <div className="flex items-center mt-2">
                  <div className="flex items-center justify-between border rounded-lg divide-x-2">
                    <button className="w-[35px]">-</button>
                    <input className="bg-transparent w-[35px] text-center" type="number" value={1}/>
                    <button className="w-[35px]">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
