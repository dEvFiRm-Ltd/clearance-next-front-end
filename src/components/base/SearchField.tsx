'use client';
import React, { ChangeEvent, FC, useRef, useState } from 'react';
import Button from './Button';
import { usePathname } from 'next/navigation';
// export type searchFieldProps = {
//   actionCb: (e: ChangeEvent<HTMLInputElement>) => void;
// };

type searchFieldProps = {
  onFocus: () => void;
  onBlur: () => void;
};
const SearchField: FC<searchFieldProps> = ({ onFocus, onBlur }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const path = usePathname();
  const local = path.split('/')[1];

  const handleSearchButtonClick = (e: any) => {
    e.preventDefault();

    let value = searchValue.trim();
    let newStr = value.replace(/\s+/g, ' ');
    let newStrArr = newStr.split(' ');
    newStr = newStrArr.join('+');
    searchInputRef.current!.focus();
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      window?.open(
        process.env.NEXT_PUBLIC_SITE_URL + `products?search_text=${newStr}`,
        '_blank'
      );
    } else {
      console.error('No Valid Base URL Found!');
    }
  };
  const handleClearButtonClick = () => {
    setSearchValue('');
    searchInputRef.current!.focus();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <form
      onSubmit={handleSearchButtonClick}
      className='w-full flex flex-row justify-start items-center bg-white rounded overflow-hidden '
    >
      <div className='w-[80%] lg:w-56 xl:w-60 2xl:w-64 3xl:w-[300px] flex flex-row justify-start items-center border border-ash pr-4'>
        <input
          ref={searchInputRef}
          type='text'
          value={searchValue}
          placeholder={local === 'en' ? 'Jacket' : 'السترة'}
          className='pl-5 outline-none py-2 xl:py-2.5 2xl:py-3 text-sm 2xl:text-base w-full'
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {searchValue.length > 0 && (
          <Button
            actionCb={handleClearButtonClick}
            btnType='button'
            variant='primary'
            icon='fas fa-times !text-xs'
            btnClass='!bg-[#a9abaf] !w-fit !flex !justify-center !items-center !rounded-full !px-1 !py-px '
          />
        )}
      </div>
      <Button
        // actionCb={handleSearchButtonClick}
        disabled={searchValue.trim() === ''}
        btnType='submit'
        variant='primary'
        icon='fa-solid fa-magnifying-glass !text-base lg:!text-lg'
        btnClass='hover:bg-[#616368] !px-5 xl:!px-6 2xl:!px-7 !py-2 xl:!py-2.5 2xl:!py-3 !w-auto'
      />
    </form>
  );
};

export default SearchField;

