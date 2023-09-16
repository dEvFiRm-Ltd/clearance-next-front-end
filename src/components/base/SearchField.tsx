"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import Button from "./Button";
// export type searchFieldProps = {
//   actionCb: (e: ChangeEvent<HTMLInputElement>) => void;
// };
const SearchField = ({ onChange, onFocus, onBlur }: any) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchButtonClick = () => {
    searchInputRef.current!.focus();
  };
  const handleClearButtonClick = () => {
    setSearchValue("");
    searchInputRef.current!.focus();
  };
  const handleChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
    onChange(value);
  };
  return (
    <div className="w-full flex flex-row justify-start items-center bg-white rounded overflow-hidden ">
      <div className="w-48 lg:w-56 xl:w-60 2xl:w-64 3xl:w-[300px] flex flex-row justify-start items-center border border-ash pr-4">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Jacket"
          className="pl-5 outline-none py-2 xl:py-2.5 2xl:py-3 text-sm 2xl:text-base w-full"
          value={searchValue}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {searchValue.length > 0 && (
          <Button
            actionCb={handleClearButtonClick}
            btnType="button"
            variant="primary"
            icon="fas fa-times !text-xs"
            btnClass="!bg-[#a9abaf] !w-fit !flex !justify-center !items-center !rounded-full !px-1 !py-px "
          />
        )}
      </div>
      <Button
        actionCb={handleSearchButtonClick}
        btnType="button"
        variant="primary"
        icon="fa-solid fa-magnifying-glass !text-lg"
        btnClass="hover:bg-[#616368] !px-5 xl:!px-6 2xl:!px-7 !py-2 xl:!py-2.5 2xl:!py-3 !w-auto"
      />
    </div>
  );
};

export default SearchField;
