import Image from 'next/image'
import React from 'react'

const ProductDetailsPage = () => {
  return (
    <>
    <section className="mx-auto container pt-6 flex flex-row justify-center gap-10">
        <div className="flex flex-row justify-start gap-6">
          <div className="flex flex-col justify-start gap-3">
            <div className="h-[88px] w-[66px] relative overflow-hidden hover:ring-1 ring-black group">
              <Image fill alt='image' className='group-hover:scale-90' src='https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdb8efab.png'/>
            </div>
            <div className="h-[88px] w-[66px] relative overflow-hidden hover:ring-1 ring-black group">
              <Image fill alt='image' className='group-hover:scale-90' src='https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdbaec44.png'/>
            </div>
            <div className="h-[88px] w-[66px] relative overflow-hidden hover:ring-1 ring-black group">
              <Image fill alt='image' className='group-hover:scale-90' src='https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdbc3fc3.png'/>
            </div>
            <div className="h-[88px] w-[66px] relative overflow-hidden hover:ring-1 ring-black group">
              <Image fill alt='image' className='group-hover:scale-90' src='https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdbd65f8.png'/>
            </div>
          </div>
          <div className="h-[744px] w-[558px] overflow-hidden relative">
            <Image fill alt='image' src='https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdb8efab.png'/>
              <button type='button' className='z-[1] bg-[#00000020] hover:bg-[#00000040] text-base lg:text-xl flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-0 w-[52px] h-[104px] text-white'>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button type='button' className='z-[1] bg-[#00000020] hover:bg-[#00000040] text-base lg:text-xl flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0 w-[52px] h-[104px] text-white'>
                <i className="fas fa-chevron-right"></i>
              </button>
          </div>
        </div>
        {/* image area ends  */}
        <div className="flex flex-col justify-start items-start gap-4">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
    </section>
    </>
  )
}

export default ProductDetailsPage