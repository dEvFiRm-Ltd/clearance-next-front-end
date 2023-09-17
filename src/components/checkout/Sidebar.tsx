import React from 'react'

export const Sidebar = () => {
  return (
    <div className='flex flex-col space-y-6 w-full max-w-[220px] max-h-[300px]'>
        <div>
            <button className='text-xs text-slate-400 mb-3'>Logout</button>
            <p className="text-slate-500 text-sm">Welcome Back,</p>
            <p className="text-slate-500 text-sm">youremail@janina.com !</p>
        </div>

        <div className='flex flex-col space-y-2 items-start'>
            <button className='text-slate-600 hover:text-black-primary'>Order List</button>
            <button className='text-slate-600 hover:text-black-primary'>Wallet</button>
            <button className='text-slate-600 hover:text-black-primary'>Coupon</button>
            <button className='text-slate-600 hover:text-black-primary'>Address</button>
            <button className='text-slate-600 hover:text-black-primary'>Change Password</button>
        </div>

    </div>
  )
}
