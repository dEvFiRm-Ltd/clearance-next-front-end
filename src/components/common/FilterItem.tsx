import React, { useState } from 'react'
import Checkbox from '../base/Checkbox'

type filterType ={

}

const FilterItem = () => {
    const [check, setCheck] = useState(true)
  return (
    <div className="border-b">
      <button type="button" onClick={()=>setCheck(!check)} className="w-full flex flex-row justify-between items-center ">
        <p className="text-base font-semibold leading-10 truncate">Category</p>
        <i className={`fa-solid fa-chevron-up text-xs ${check===false? "rotate-180":""}`}></i>
      </button>
      {check && 
      <div className="">
        <Checkbox label="Midi Dresses" onChange={()=>{}}/>
      <button type='button' className='mb-[21px] mt-6 py-2 flex w-full justify-start items-center font-medium gap-x-1 text-[14px] leading-[17px] text-black' onClick={()=>{}}>
        <div><i className="fa-solid fa-plus text-xs"></i></div>
        <p className=''>VIEW MORE</p>
      </button>
       </div>
      }
      
    </div>
  )
}

export default FilterItem