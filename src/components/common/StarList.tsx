import { starProps } from '@/utils/type'
import React, { FC } from 'react'

const StarList:FC<starProps> = ({review}) => {
  const star= [
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
  ]
  return (
    <button type='button' className='text-sm flex text-yellow-500 flex-row justify-start items-center gap-x-1'>
        {star.map((item:string,id:number)=>(<i key={id} className={`${item}`}></i>))} 
        <p className="pl-1 text-gray hover:underline">({review})</p>         
    </button>
  )
}

export default StarList