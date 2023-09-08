"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import Button from "../base/Button";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import SelectField, { dropDowns } from "../base/SelectField";
import { sizeDropDown } from "@/static";
import Tab from "../base/Tab";
export type cartSideBarProps = {
  closeCb: () => void;
  value: boolean;
  setCart: (e: boolean) => void;
};
const CartSideBar: FC<cartSideBarProps> = ({ value, setCart }) => {
  const tabs = ["S(6-8)", "M(10)", "L(12)", "XL(14)", "XXL(16)"];
  const [activeTab, setActiveTab] = useState(0);
  let [qty, setQty] = useState(1);
  console.log("qty", qty);
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


  // Function to increment the quantity
  const incrementQty = () => {
    setQty(qty + 1);
  };
  const decrementQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };
  const handleQtyChange = (event:any) => {
    const newQty = parseInt(event.target.value);
    if (!isNaN(newQty)) {
      setQty(newQty);
    }
  };

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
            <div className="flex justify-between max-w-[448px] px-4">
              <input className="checked:bg-black-primary" type="checkbox" />
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

                  <Popover className="relative">
                    <Popover.Button className="px-2 rounded-md flex items-center space-x-1 text-[#484c52] bg-[#d9d9da]">
                      <span>Black, S</span>
                      <i className="fa-solid fa-chevron-down"></i>
                    </Popover.Button>
                    <Popover.Panel className="absolute z-10 bg-white p-2 -left-16 min-w-[320px] flex flex-col space-y-3">
                      <div className="flex flex-col space-y-2">
                        <span className="flex justify-start gap-2 capitalize text-black-primary font-medium mb-1">
                          color
                        </span>
                        <div className="h-9 w-9 flex justify-center items-center border border-black rounded-full bg-white">
                          <span className="h-7 w-7 rounded-full overflow-hidden relative">
                            <Image
                              alt=""
                              fill
                              src={
                                "https://sstorage.clearance.ae/production/storage/product/2023-08-04-64ccaafb5233f.png"
                              }
                            />
                          </span>
                        </div>
                      </div>

                      <div className="w-full flex flex-col justify-between items-start space-y-2">
                        <div className="flex justify-start items-center gap-x-3">
                          <p className="text-black-primary capitalize font-medium">
                            size
                          </p>
                        </div>
                        <div className="flex justify-start gap-3">
                          {tabs.map((tab, index) => (
                            <div
                              key={index}
                              className={`border flex justify-center items-center border-solid p-1 min-w-[40px] rounded border-[#222] cursor-pointer text-sm ${
                                index === activeTab
                                  ? "bg-black-primary text-white"
                                  : "bg-white text-black-primary"
                              }`}
                              onClick={() => setActiveTab(index)}
                            >
                              {tab}
                            </div>
                          ))}
                        </div>
                        <hr className="border-[0.7px] border-ash w-full" />
                        <button className="bg-black-primary text-white w-full py-1 rounded">
                          submit
                        </button>
                      </div>
                    </Popover.Panel>
                  </Popover>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-between border rounded-lg divide-x-2">
                      <button
                        className="w-[35px]"
                        onClick={decrementQty}
                      >
                        -
                      </button>
                      <input
                        className="bg-transparent w-[45px] text-center pl-2"
                        type="number"
                        value={qty}
                        onChange={handleQtyChange}
                      />
                      <button
                        className="w-[35px]"
                        onClick={incrementQty}
                      >
                        +
                      </button>
                    </div>

                    <div>
                      Total:{" "}
                      <strong className="text-[16px] leading-[18px]">
                        $86.68
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
