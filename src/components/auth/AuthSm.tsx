"use client"
import React, { useState } from 'react'
import { Login } from './Login';
import { Signup } from './Signup';

export const AuthSm = () => {
const [isLoginPage, setIsLoginPage] = useState<boolean>(true);
  return (
    <div className='max-w-[350px] sm:max-w-[400px] w-full mx-auto flex flex-col justify-center items-center'>
        <div className='flex justify-around items-center w-full text-[20px] mb-2 px-8'>
            <button onClick={()=>setIsLoginPage(true)} className={`${isLoginPage && "underline underline-offset-8"}`}>
                Login
            </button>
            <button onClick={()=>setIsLoginPage(false)} className={`${!isLoginPage && "underline underline-offset-8"}`}>
                Register
            </button>
        </div>

        <div>
            {
                isLoginPage ? <Login/> : <Signup/>
            }
        </div>
    </div>
  )
}
