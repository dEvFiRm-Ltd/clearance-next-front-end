import { buttonProps2 } from "@/utils/type";
import React, { FC } from "react";


const GoogleBtn: FC<buttonProps2> = ({
  btnText,
  btnText2,
  prefixIcon,
  groupClass,
  actionCb,
}) => {
  return (
    <div
      onClick={actionCb}
      className={`cursor-default flex justify-center items-center bg-black-primary text-white rounded-md text-[10px] lg:text-sm py-1 px-2 font-normal ${
        prefixIcon ? "flex gap-x-2 lg:gap-x-4" : ""
      } ${groupClass}`}
    >
      {prefixIcon && (
        <i
          className={`text-xl md:text-2xl lg:text-3xl 2xl:text-4xl ${prefixIcon}`}
        ></i>
      )}
      <div className="flex flex-col items-start justify-start">
        <span>{btnText}</span>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] 2xl:text-[28px] capitalize lg:pb-2">
          {btnText2}
        </h3>
      </div>
    </div>
  );
};

export default GoogleBtn;