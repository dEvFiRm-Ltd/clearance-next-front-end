import React from 'react'

type DisplayProps = {
  setOnDisplay: React.Dispatch<React.SetStateAction<string>>;
};

export const Sidebar = ({setOnDisplay}:DisplayProps) => {
  return (
    <div className='flex flex-col items-start space-y-6'>
        <div>
            <button className='text-xs text-slate-400 mb-3'>Logout</button>
            <p className="text-slate-500 text-sm">Welcome Back,</p>
            <p className="text-slate-500 text-sm">youremail@janina.com !</p>
        </div>

        <div className='flex flex-row space-x-2 md:space-x-0 md:flex-col md:space-y-2 md:items-start md:justify-start'>
            <button onClick={()=>setOnDisplay("orderList")} className='text-xs px-1 md:text-base text-slate-600 hover:text-black-primary'>Order List</button>
            <button onClick={()=>setOnDisplay("wallet")} className='text-xs px-1 md:text-base text-slate-600 hover:text-black-primary'>Wallet</button>
            <button onClick={()=>setOnDisplay("coupon")} className='text-xs px-1 md:text-base text-slate-600 hover:text-black-primary'>Coupon</button>
            <button onClick={()=>setOnDisplay("address")} className='text-xs px-1 md:text-base text-slate-600 hover:text-black-primary'>Address</button>
            <button onClick={()=>setOnDisplay("changePassword")} className='text-xs px-1 md:text-base text-slate-600 hover:text-black-primary'>Change Password</button>
        </div>

    </div>
  )
}
