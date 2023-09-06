
import React, { FC } from "react";
import Button from "../base/Button";
import { dropDownType } from "@/utils/type";

const SelectField: FC<dropDownType> = ({
  actionCb,
  title,
  btnClass,
}) => {
  return (
    <>
        <div className="flex flex-row items-center gap-x-3">
          <p className="text-xl leading-7 text-[#1E1F21] font-medium">
           {title}
          </p>
          <div className="">
            <Button
              icon="fa-solid fa-chevron-down !text-[#848586] !text-base"
              btnClass={`!bg-transparent !px-1 ${btnClass}`}
              variant="naked"
              btnType="button"
              actionCb={actionCb}
            />
          </div>
        </div>
    </>
  );
};

export default SelectField;
