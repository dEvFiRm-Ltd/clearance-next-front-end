import React, { FC, useState } from 'react'

export type dropDowns = {
  title?: string
}
type componentProps = {
  groupClass?: string
  currentItem: string
  dropdownItems: string[]
  onChangeCb: (e: dropDowns) => void
}

const SelectField: FC<componentProps> = ({
  groupClass,
  dropdownItems,
  currentItem,
  onChangeCb,
}) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="relative ">      
      <button
        type="button"
        className={`relative z-10 flex flex-row items-center justify-between w-full bg-white uppercase ${groupClass} `}
        onClick={() => {setOpen(!open)}}
      >
         <p className="text-black-primary text-lg font-bold">{currentItem} &nbsp;</p>
        <i className="fas fa-chevron-down text-sm"></i>
      </button>
      <div
        className={`selectItem my-0.5 border border-[#ccc] rounded-[3px] w-fit bg-white transition absolute ${
          open ? 'z-50 translate-y-0 opacity-100 ' : '-z-20 translate-y-2 opacity-0'}`}>
        {dropdownItems && dropdownItems.map((item:any, i: number) => (
          <p
            key={i}
            onClick={() => {onChangeCb(item)
              setOpen(false)}}
            className={`hover:bg-[#eee] flex justify-between gap-x-6 cursor-pointer w-full text-xs font-normal py-[7px] pl-2.5 pr-5 text-gray uppercase ${item.title===currentItem ?'bg-[#eee]':'bg-white'}`}
          >
            {item}
            {item === currentItem? ( <i className="fas fa-check"></i>):''}
            
          </p>
        ))}
      </div>
    </div>
  )
}

export default SelectField