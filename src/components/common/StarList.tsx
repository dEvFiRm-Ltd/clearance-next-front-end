import React, { FC } from 'react'
export type starProps={
    review?:string;
    icon:string[]
}
const StarList:FC<starProps> = ({review,icon}) => {
  return (
    <button type='button' className='text-sm flex text-yellow-500 flex-row justify-start items-center gap-x-1'>
        {icon.map((item:string,id:number)=>(<i key={id} className={`${item}`}></i>))} 
        <p className="pl-1 text-gray hover:underline">({review})</p>         
    </button>
  )
}

export default StarList