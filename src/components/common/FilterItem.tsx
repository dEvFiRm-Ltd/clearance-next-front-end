import React, { FC, useState } from 'react';
import Checkbox from '../base/Checkbox';

type filterType = {
  title: string;
  actionCb: () => void;
  viewStateCb: boolean;
  icon: string;
  labels: labelType[];
  actionCbView: () => void;
};

export type labelType = {
  label: string;
};

const FilterItem: FC<filterType> = ({
  title,
  actionCb,
  icon,
  labels,
  actionCbView,
  viewStateCb,
}) => {
  // const [check, setCheck] = useState(true)
  return (
    <div className='border-b border-[#E0E1E3]'>
      <button
        type='button'
        onClick={actionCb}
        className='w-full flex flex-row justify-between items-center '
      >
        <p className='text-base font-semibold leading-10 truncate'>{title}</p>
        <i className={`fa-solid fa-chevron-up text-xs ${icon}`}></i>
      </button>
      {viewStateCb && (
        <div>
          <div className='flex flex-col gap-y-4'>
            {labels.map((item: labelType, i: number) => (
              <Checkbox key={i} label={item.label} onChange={() => {}} />
            ))}
          </div>
          <button
            type='button'
            onClick={actionCbView}
            className='mb-[21px] mt-6 py-2 flex w-full justify-start items-center font-medium gap-x-1 text-[14px] leading-[17px] text-black'
          >
            <div>
              <i className='fa-solid fa-plus text-xs'></i>
            </div>
            <p className=''>VIEW MORE</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterItem;
