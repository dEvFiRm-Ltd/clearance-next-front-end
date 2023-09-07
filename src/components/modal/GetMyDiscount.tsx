"use client";
import React, { ChangeEvent, FC, useRef, useState } from "react";
import Modal from "../base/Modal";
import ModalBody from "../common/ModalBody";
import { commonModalProps } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import SelectField, { dropDowns } from "../base/SelectField";
import Button from "../base/Button";
import { sizeDropDown } from "@/static";
import Tab from "../base/Tab";

const GetMyDiscount: FC<commonModalProps> = ({ closeStateCb, viewState }) => {
  return (
    <Modal visible={viewState} closeCb={closeStateCb} title="">
      <form method="post">
        <ModalBody modalBodyClass="flex text-center items-center flex-col gap-y-3.5 !p-6 !w-[300px]">
            <h3 className="text-[30px] text-black-primary font-bold">Chance to Get This Item FREE</h3>
            <p className="text-sm text-black-primary capitalize">just leave your email</p>
            <p className="text-xl text-red-400 ">On your first order</p>
            <div className="w-[250px] h-[270px] relative overflow-hidden ">
                <Image fill className="object-contain" alt="" src={'https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdb8efab.png'}/>
            </div>            
            <input type="email" placeholder="Email Address" required className="w-full px-4 py-1.5 text-xs text-black-primary outline-0 border border-black-primary rounded bg-[#DEF7F8]" />
                <Button
                  actionCb={() => {}}
                  btnText="GET MY DISCOUNT"
                  variant="primary"
                  btnClass="hover:!opacity-90 !text-lg !font-bold"
                />
        </ModalBody>
      </form>
    </Modal>
  );
};


export default GetMyDiscount