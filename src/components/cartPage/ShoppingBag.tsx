"use client"
import { Popover } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

const ShoppingBag = () => {
    const tabs = ["S(6-8)", "M(10)", "L(12)", "XL(14)", "XXL(16)"];
    const [activeTab, setActiveTab] = useState(0);
    let [qty, setQty] = useState(1);
    return (
        <div className='container mb-[91px]'>
            <div className="flex flex-row justify-center items-center my-[30px]">
                <div className="flex flex-row items-center gap-x-[50px]">
                    <p className="text-base text-black-primary capitalize">
                        <span className='px-[5px] text-white text-sm bg-black-primary rounded-full mr-1'>1</span>
                        Shopping Bag
                    </p>
                    <div className="w-[100px] h-[1px] bg-black-primary "></div>
                    <p className="text-base text-[#999999] capitalize">
                        <span className='px-[5px] text-white text-sm bg-[#999999] rounded-full mr-1'>2</span>
                        Order Confirmation
                    </p>
                    <div className="w-[100px] h-[1px] bg-[#999999] "></div>
                    <p className="text-base text-[#999999] capitalize">
                        <span className='px-[5px] text-white text-sm bg-[#999999] rounded-full mr-1'>3</span>
                        Order Complete
                    </p>
                </div>
            </div>
            <div className="w-[1092px]">
                {/* Shipping Fee */}
                <Link href={""} className='w-full flex flex-col gap-y-[9px] bg-[#F5FCFB] px-[30px] py-[15px]'>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center">
                            <i className="fa-solid fa-truck"></i>
                            <h3 className='text-black-primary text-base font-bold pl-3 capitalize'>Shipping Fee</h3>
                        </div>
                        <div className="flex flex-row items-center">
                            <h3 className='text-black-primary text-base font-bold pr-3 capitalize'>Add</h3>
                            <i className="fa-solid fa-chevron-right text-sm"></i>
                        </div>
                    </div>
                    <p className="text-black-primary text-base pl-[32px]">Spend <span className='font-bold'>$30.63</span> <span>more and get</span> <span className='font-bold uppercase'>FREE SHIPPING!</span> <span>(Except final sale items)icon_tips</span> <span className='bg-[#CED0D3] text-white px-[5px] rounded-full text-sm'>?</span></p>
                </Link>
                {/* Shopping Bag */}
                <p className='text-2xl text-[#969696] py-5 border-b-2 border-[#000000] font-normal'>Shopping Bag</p>
                <div className="flex flex-row items-center bg-[#FAFAFA] text-[#D0061A] my-5 mx-2 py-2 px-1">
                    <i className="fa-solid fa-gift border rounded-full border-[#D0061A] text-xs p-1"></i>
                    <h3 className='text-[#D0061A] text-xs pl-2 capitalize'>Order $0.63 more and get free gift</h3>
                </div>
                {/* Products */}
                <div className="flex flex-row items-center justify-between capitalize border-t pt-3 pb-[26px] text-sm text-black-primary">
                    <p>Products</p>
                    <div className="flex flex-row items-center gap-x-[100px]">
                        <p>Qty</p>
                        <p>Total Price</p>
                    </div>
                </div>
                {/*========> image are here <====== */}
                <div className="bg-white pb-2 w-full">
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
                                    <p className="flex-grow-0 flex-shrink-0 text-[14px] leading-[19px] line-through text-left text-[#A1A5AB]">
                                        $50.99
                                    </p>
                                </div>
                                <Popover className="relative">
                                    <Popover.Button className="px-2 rounded-md flex items-center space-x-1 text-[#484C52] bg-[#D9D9DA]">
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
                                                        className={`border flex justify-center items-center border-solid p-1 min-w-[40px] rounded border-[#222] cursor-pointer text-sm ${index === activeTab
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
                                            onClick={() => {
                                                qty > 0 && setQty(qty--);
                                            }}
                                        >
                                            -
                                        </button>
                                        <input
                                            className="bg-transparent w-[45px] text-center pl-2"
                                            type="number"
                                            value={qty}
                                        />
                                        <button
                                            className="w-[35px]"
                                            onClick={() => setQty(qty++)}
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

            </div>
        </div>
    )
}

export default ShoppingBag