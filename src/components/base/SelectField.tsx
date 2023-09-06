import React, { FC, useState } from 'react'

export type dropDowns = {
  title: string
  value: string
}
type componentProps = {
  groupClass?: string
  label?: string
  currentItem: string
  inlineLabel?: boolean
  dropdownItems: dropDowns[]
  onChangeCb: (e: dropDowns) => void
}

const SelectField: FC<componentProps> = ({
  groupClass,
  dropdownItems,
  label,
  inlineLabel,
  currentItem,
  onChangeCb,
}) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="relative ">      
      <button
        type="button"
        className={`py-[10px] px-5 relative z-10 flex flex-row items-center justify-between w-full border-ash bg-[#fcfcfc] border rounded-md text-base capitalize min-w-[130px] ${groupClass} `}
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span className="flex">          
          <p className="text-black-primary font-bold">{currentItem} &nbsp;</p>
        </span>
        <i className="fas fa-chevron-down"></i>
      </button>
      <div
        className={`py-2.5 w-full bg-white rounded-xl transition absolute ${
          open
            ? 'z-50 translate-y-0 opacity-100 '
            : '-z-20 translate-y-2 opacity-0 '
        } `}
      >
        {dropdownItems.map((item: dropDowns, i: number) => (
          <p
            key={i}
            onClick={() => {
              onChangeCb(item)
              setOpen(false)
            }}
            className=" cursor-pointer p-2.5 w-full text-sm hover:bg-ash capitalize font-normal "
          >
            {item.title}
          </p>
        ))}
      </div>
    </div>
  )
}

export default SelectField