"use client";
import React, { ChangeEvent, FC, useState } from "react";
import Modal from "../base/Modal";
import ModalBody from "../common/ModalBody";
import { commonModalProps } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import SelectField, { dropDowns } from "../base/SelectField";
import Button from "../base/Button";
import { sizeDropDown } from "@/static";
import Tab from "../base/Tab";
import GetMyDiscount from "./GetMyDiscount";

const CartModal: FC<commonModalProps> = ({ closeStateCb, viewState }) => {
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState("regular");
  const [selectedSize, setSelectedSize] = useState<dropDowns>(sizeDropDown[0]);
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <Modal visible={viewState} closeCb={closeStateCb} title="">
      <form method="post">
        <ModalBody modalBodyClass="flex flex-row gap-x-3">
          {/* small image are here  */}
          <div className="flex flex-col gap-y-3">
            <Button
              actionCb={() => {}}
              variant="primary"
              icon="fas fa-chevron-up"
              btnClass="!bg-[#f1f2f3] !h-6 flex items-center justify-center !text-black-primary"
            />
            <div className="w-[50px] h-[70px] relative overflow-hidden ring-black-primary hover:ring-1 ring-black group">
              <Image
                src={`https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdb8efab.png`}
                alt="image"
                fill
                className="object-cover group-hover:scale-90"
              />
            </div>
            <div className="w-[50px] h-[70px] relative overflow-hidden ring-black-primary hover:ring-1 ring-black group">
              <Image
                src={`https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdb8efab.png`}
                alt="image"
                fill
                className="object-cover group-hover:scale-90"
              />
            </div>
            <div className="w-[50px] h-[70px] relative overflow-hidden ring-black-primary hover:ring-1 ring-black group">
              <Image
                src={`https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdb8efab.png`}
                alt="image"
                fill
                className="object-cover group-hover:scale-90"
              />
            </div>
            <Button
              actionCb={() => {}}
              variant="primary"
              icon="fas fa-chevron-down"
              btnClass="!bg-[#f1f2f3] !h-6 flex items-center justify-center !text-black-primary"
            />
          </div>
          {/* big image  */}
          <div className="w-[300px] h-[400px] 2xl:w-[372px] 2xl:h-[496px] relative">
            <Image
              src={`https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdb8efab.png`}
              alt="image"
              fill
              className="object-cover"
            />
            <Button
              actionCb={() => {}}
              variant="primary"
              icon="fas fa-chevron-left !text-base lg:!text-xl"
              btnClass="!bg-[#00000020] hover:!bg-[#00000040] flex items-center justify-center !absolute top-1/2 -translate-y-1/2 left-0 !w-9 !h-16  2xl:!w-[52px] 2xl:!h-[104px] text-white"
            />
            <Button
              actionCb={() => {}}
              variant="primary"
              icon="fas fa-chevron-right !text-base lg:!text-xl"
              btnClass="!bg-[#00000020] hover:!bg-[#00000040] flex items-center justify-center !absolute top-1/2 -translate-y-1/2 right-0 !w-9 !h-16  2xl:!w-[52px] 2xl:!h-[104px] text-white"
            />
          </div>
          <div className="w-[362px] 2xl:w-[458px] pl-2">
            <p className="text-lg 2xl:text-xl leading-6 line-clamp-2 capitalize text-black-primary font-medium">
              Regular Fit Geometric Shirt Collar Long Sleeve Elegant Maxi Dress
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-3 mt-4">
                <p className="text-sm md:text-base xl:text-lg 3xl:text-3xl text-[#DC2626] font-bold">
                  $40.47
                </p>
                <p className="text-xs lg:text-sm xl:text-base font-normal text-[#868C93] line-through ">
                  $45.99
                </p>
                <p className="bg-black-primary text-xs text-white px-0.5">
                  -13%
                </p>
              </div>
              <Link
                href={`/product-details`}
                className="flex flex-row gap-x-2 items-center"
              >
                <p className="text-sm 2xl:text-base text-black-primary">Details</p>
                <i className="fa-solid fa-chevron-right text-xs 2xl:text-sm"></i>
              </Link>
            </div>
            {/* colors */}
            <div className="flex flex-col justify-start items-start gap-y-3">
              <div className="flex justify-start gap-2 capitalize text-black-primary text-base 2xl:text-lg">
                color: <span className="font-bold">Black</span>
              </div>
              <div className="h-8 w-8 2xl:h-9 2xl:w-9 flex justify-center items-center border border-black rounded-full bg-white">
                <span className="h-6 w-6 2xl:h-7 2xl:w-7 rounded-full overflow-hidden relative">
                  <Image
                    alt=""
                    fill
                    src={
                      "https://sstorage.clearance.ae/production/storage/product/2023-08-04-64ccaafb5233f.png"
                    }
                  />
                </span>
              </div>
              <div className="text-black-primary text-lg capitalize">fit:</div>
              <div className="flex justify-start items-center gap-x-3">
                <button
                  className={`p-1.5 2xl:p-2 border text-xs 2xl:text-sm uppercase w-fit border-black-primary ${
                    activeTab === "regular"
                      ? "bg-black-primary text-white"
                      : "bg-white text-black-primary"
                  }`}
                  onClick={() => handleTabClick("regular")}
                >
                  regular
                </button>
                <button
                  className={`p-1.5 2xl:p-2 border text-xs 2xl:text-sm uppercase w-fit border-black-primary ${
                    activeTab === "plus"
                      ? "bg-black-primary text-white"
                      : "bg-white text-black-primary"
                  }`}
                  onClick={() => handleTabClick("plus")}
                >
                  plus
                </button>
              </div>
              {/* sizes area  */}
              <div className="flex justify-start items-center gap-x-3">
                <p className="text-gray text-lg capitalize">size:</p>
                <SelectField
                  dropdownItems={sizeDropDown}
                  currentItem={selectedSize.title}
                  onChangeCb={(item: dropDowns) => {
                    setSelectedSize(item);
                  }}
                />
              </div>
              <Tab />
              {/* sizes area ends  */}
              <div className="flex flex-row justify-between gap-x-2.5 2xl:gap-x-4 w-full">
                <Button
                  actionCb={() => setModal(!modal)}
                  btnText="Add to cart"
                  variant="primary"
                  btnClass="hover:!opacity-90 !text-base 2xl:!text-lg !font-bold !w-[72%] rounded"
                />
                <Button
                  actionCb={() => {}}
                  btnText="Buy it now"
                  variant="outlined"
                  btnClass="hover:!opacity-90 !w-auto !px-2 2xl:!px-3 rounded !text-sm 2xl!text-base font-semibold"
                />
                <GetMyDiscount
                  closeStateCb={() => setModal(false)}
                  viewState={modal}
                />
              </div>
            </div>
          </div>
        </ModalBody>
      </form>
    </Modal>
  );
};

export default CartModal;
