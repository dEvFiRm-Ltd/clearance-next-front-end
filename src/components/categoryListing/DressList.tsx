"use client";
import { dressListData, filterData, recommendData } from "@/static";
import { flashSaleCardProps } from "@/utils/type";
import React, { useEffect, useRef, useState } from "react";
import FlashSaleCard from "../common/FlashSaleCard";
import Button from "../base/Button";
import Recommend, { recommendType } from "./Recommend";
import SelectField from "../base/SelectField";
import CartModal from "../modal/CartModal";

const DressList = () => {
  const [show, setShow] = useState<boolean>(false);
  const [itemShow, setItemShow] = useState(false);
  // for modal
  const [modals, setModals] = useState(false);
  // const [modalData, setModalData] = useState<any>();

  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("Our Pick");
  const dropdownRef = useRef<any>();

  // Function to handle clicks outside of the dropdown
  const handleClickOutsideSelectField = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add an event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutsideSelectField);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSelectField);
    };
  }, [dropdownRef]); // Empty dependency array to run this effect only once
  const dropdownItems = [
    "Our Pick",
    "New",
    "Price(Low > High)",
    "Price(High > Low)",
    "Best Selling",
  ];
  return (
    <div className="w-full xl:w-[calc(100%-216px-24px)] relative">
      <div className="flex flex-row items-center justify-between gap-x-2 capitalize mb-3.5 px-3 xl:px-0">
        <p className="text-lg leading-none text-black-primary font-bold">
          Dresses <span className="text-sm font-normal text-center">566</span>{" "}
          <span className="text-sm font-normal text-center">Results</span>
        </p>
        <div
          className="xl:flex flex-row items-center gap-x-2 capitalize hidden relative"
          ref={dropdownRef}
        >
          <p className="text-base text-black-primary font-normal">Sort By</p>
          <SelectField
            dropDownClass="!w-full"
            currentItemClass="!text-[#31353C] !font-semibold !capitalize !text-sm"
            dropItemClass="!capitalize hover:font-bold"
            iconClass={`${isOpen === true ? "rotate-180" : ""}`}
            currentItem={currentItem}
            dropdownItems={dropdownItems}
            onChangeCb={(item: any) => setCurrentItem(item)}
            groupClass="!w-[200px] !border !border-black/20 pl-3 pr-1.5 py-1"
          />
        </div>
      </div>
      {/* buttons are here  */}
      {/* <Recommend recommendArr={recommendData} heading="" btnClass=""/> */}
      <div className="w-full flex flex-row flex-wrap items-center gap-3 xl:hidden border-b-[7px] border-[#F2F2F3] px-3 pb-3.5">
        {recommendData.map((item: recommendType, i: number) => (
          <div key={i} className="">
            <Button
              btnText={`${item.title}`}
              variant="primary"
              btnClass="!text-sm !leading-4 !px-3 !py-2 !bg-[#F2F2F3] !rounded-[4px] !text-[#222] hover:!bg-[#111] hover:!text-white"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-between px-3 xl:hidden">
        <div>
          <Button btnText="New" actionCb={() => {}} variant="naked" />
        </div>
        <div>
          <Button btnText="Best Sale" actionCb={() => {}} variant="naked" />
        </div>
        <div className="flex flex-row items-center gap-x-1">
          <p className="text-sm text-black-primary">Price</p>
          <div className="">
            <Button
              icon="fa-solid fa-chevron-up !text-gray-200 !text-[10px]"
              variant="naked"
            />
            <Button
              icon="fa-solid fa-chevron-down !text-gray-200 !text-[10px]"
              variant="naked"
            />
          </div>
        </div>
        <div
          onClick={() => setShow(!show)}
          className="flex flex-row items-center gap-x-1 cursor-pointer px-3 py-2"
        >
          <p className="text-sm text-black-primary">Filter</p>
          <i className="fa-solid fa-filter text-sm"></i>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center xl:justify-start flex-wrap gap-4 xl:gap-x-6 2xl:gap-x-[22.5px] lg:gap-y-5 xl:gap-y-6">
        {dressListData.map((item: flashSaleCardProps, id: number) => (
          <FlashSaleCard
            key={id}
            img={item.img}
            text={item.text}
            salePrice={item.salePrice}
            price={item.price}
            discount={item.discount}
            imageTextsClass="!px-3"
            love={true}
            review="10"
            imgVariantSmall={true}
            actionCb={() => {
              // setModalData(item);
              setModals(!modals);
            }}
            groupClass="!w-[170px] sm:!w-[302px] md:!w-[366px] lg:!w-[494px] xl:!w-[212px] 2xl:!w-[750px] 3xl:!w-[290px]"
            imgClass="!h-[225px] sm:!h-[402px] md:!h-[487px] lg:!h-[657px] xl:!h-[282.66px] 2xl:!h-[997.5px] 3xl:!h-[385px]"
          />
        ))}
      </div>
      {show && (
        <div className="z-50 w-screen h-screen absolute top-0 bg-white">
          <div className="flex flex-row justify-between px-4">
            <h1 className="text-lg font-bold text-black-primary uppercase">
              filter
            </h1>
            <div>
              <Button
                actionCb={() => setShow(!show)}
                icon="fa-solid fa-xmark !text-3xl"
                variant="naked"
              />
            </div>
          </div>
          <div
            onClick={() => setItemShow(!itemShow)}
            className="flex flex-row items-center justify-between cursor-pointer py-2 bg-[#F2F2F3] px-4"
          >
            <p className="text-lg text-black-primary">Category</p>
            <i
              className={`fa-solid fa-chevron-down text-sm ${
                itemShow === true ? "rotate-180" : ""
              }`}
            ></i>
          </div>
          {itemShow && (
            <div className="w-full flex flex-row flex-wrap items-center gap-3 py-3 px-4">
              {filterData.map((item: recommendType, i: number) => (
                <div key={i} className="">
                  <Button
                    btnText={`${item.title}`}
                    variant="outlined"
                    btnClass="!text-sm !leading-4 !px-3 !py-2 border border-[#F2F2F3] !text-[#222] hover:!bg-[#111] hover:!text-white"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="w-full px-4 border-none mt-2">
            <input
              type="range"
              className="w-full border-[0px]"
              min="1"
              max="100"
              value="" // Set the initial value here
            />
          </div>
          <div className="w-full border-t border-[#4f4f5038] fixed bottom-0">
            <p className="text-xs text-[#858587] capitalize text-center py-3">
              <span>575</span> Products
            </p>
            <div className="w-full flex flex-row px-3 gap-x-3 mb-5">
              <Button
                btnText="Reset"
                variant="outlined"
                btnClass="!uppercase !text-base !text-black !w-[50%]"
              />
              <Button
                btnText="Done"
                variant="primary"
                btnClass="!uppercase !text-base !text-black !w-[50%]"
              />
            </div>
          </div>
        </div>
      )}
      <CartModal
        closeStateCb={() => {
          setModals(false);
        }}
        viewState={modals}
        // data={modalData}
      />
    </div>
  );
};

export default DressList;
