"use client";
import React from "react";
import Button from "../base/Button";
import Image from "next/image";
import StarList from "../common/StarList";
import Link from "next/link";

const GetBrand = () => {
  return (
    <div className="lg:hidden w-full p-1.5 flex flex-row justify-between items-center">
      <div className="flex flex-row justify-start items-center gap-x-1.5">
        <Button
          actionCb={() => {}}
          btnType="button"
          variant="naked"
          icon="fas fa-times !text-base"
          btnClass="!text-[#a1a5ab] !w-fit !flex !justify-center !items-center"
        />
        <div className="h-14 w-14 rounded-md overflow-hidden relative">
          <Image
            fill
            alt=""
            src={
              "https://sstorage.clearance.ae/production/storage/banner/2023-08-29-64edb50240a8f.png"
            }
          />
        </div>
        <div className="flex flex-col justify-start gap-0.5 items-start text-xs w-fit">
          <h6 className="font-bold uppercase">Clearance</h6>
          <p className="leading-[15px] text-[#31353c]">APP 1st ORDER 25% OFF</p>
          <StarList
            groupClass="!text-xs !leading-[19px] !gap-x-0"
            starClass="h-3.5 w-3.5"
            review="19932"
          />
        </div>
      </div>
      <div className="min-w-[52px] border rounded-md px-3 h-8 flex justify-center items-center">
        <Link href={""} className="text-xs">
          GET
        </Link>
      </div>
    </div>
  );
};

export default GetBrand;
