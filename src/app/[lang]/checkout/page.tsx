'use client'
import { OrderList } from '@/components/checkout/OrderList'
import { Sidebar } from '@/components/checkout/Sidebar'
import React, { useState } from 'react'

const page = () => {
    const [onDisple, setOnDisplat] = useState("")
  return (
    <div className='flex items-start justify-cente space-x-8 w-full h-full mx-auto lg:my-8 lg:max-w-[1150px] lg:max-h-[470px]'>
        <Sidebar/>
        <OrderList/>
    </div>
  )
}

export default page