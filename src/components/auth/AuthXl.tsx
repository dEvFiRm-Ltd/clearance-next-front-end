import React from 'react'
import { Login } from './Login'
import { Signup } from './Signup'

export const AuthXl = () => {
  return (
    <div className='flex justify-between divide-x-2 w-[1200px]'>
        <div className='w-[600px] px-10'>
            <Login/>
        </div>
        <div className='w-[600px] px-10 flex items-end justify-end'>
            <Signup/>
        </div>
    </div>
  )
}
