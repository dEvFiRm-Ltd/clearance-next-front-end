'use client'
import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export const CartProduct = ({data, index}:any) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  let [qty, setQty] = useState(data.qty);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["S(6-8)", "M(10)", "L(12)", "XL(14)", "XXL(16)"];
  // Function to quantity
  const incrementQty = () => {
    setQty(qty + 1);
    data.qty = qty+1; // +1 for advance deaclaration in useState (qty)
  };
  const decrementQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
      data.qty = qty-1;
    }
    else{
      alert("Quantity already 0")
    }
  };
  const handleQtyChange = (event:any) => {
    const newQty = parseInt(event.target.value);
    if (!isNaN(newQty)) {
      setQty(newQty);
      data.qty=newQty;
    }
  };

  return (
    <div className="flex justify-between max-w-[448px] px-4 mt-2">
      <input className="checked:bg-black-primary" type="checkbox" />
      <div className="flex items-start space-x-3">
        {/* image  */}
        <div className="w-[102px] h-[136px] relative">
          <Image src={data?.img}alt="" fill className="" />
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
                {data?.text}
                </span>
              </Link>
              <button className="p-0" onClick={()=>removeFromCart(index)}>
                <i className="fa-regular fa-trash-can" />
              </button>
            </div>
          </div>

          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 notranslate my-2">
            <p className="flex-grow-0 flex-shrink-0 text-base leading-[24px] font-bold text-left text-[#31353C]">
            {data?.salePrice}
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[14px] leading-[19px] line-through text-left text-[#a1a5ab]">
            {data?.price}
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
                      src={data?.img}
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
              <button className="w-[35px]" onClick={()=>decreaseQuantity(index)}>
                -
              </button>
              <input
                className="bg-transparent w-[45px] text-center pl-2"
                type="number"
                value={data.qty}
                onChange={handleQtyChange}
              />
              <button className="w-[35px]" onClick={()=>increaseQuantity(index)}>
                +
              </button>
            </div>

            <div>
              Total:{" "}
              <strong className="text-[16px] leading-[18px]">${data?.salePrice ? (data?.salePrice * data.qty).toFixed(2) : (data?.price*data.qty).toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
