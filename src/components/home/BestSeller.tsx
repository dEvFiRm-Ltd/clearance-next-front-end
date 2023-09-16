import Image from 'next/image';
import React, { FC } from 'react';
type bestSellerPropsType = {
  imgArr: Array<any>;
};
const BestSeller: FC<bestSellerPropsType> = ({ imgArr }) => {
  return (
    <div className='md:container my-8 flex flex-row justify-center gap-x-2.5'>
      {imgArr.slice(0, 2).map((item: any) => (
        <div
          key={item.id}
          className='w-[48%] h-48 md:h-[300px] lg:h-[450px] xl:h-[550px] 2xl:h-[670px] 3xl:h-[818px] relative flex flex-col items-center justify-center'
        >
          <Image src={item.photo} alt='image' fill className='object-cover' />
          <h1 className='text-xl md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold text-white mb-4 2xl:mb-8 3xl:mb-10 z-10 uppercase'>
            Best Seller
          </h1>
          <button
            type='button'
            className='flex flex-row items-center gap-x-2 lg:gap-x-3 z-10 bg-white uppercase px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 3xl:px-10 py-2 2xl:py-2.5 text-xs md:text-sm 2xl:text-base'
          >
            <p>shop now</p>
            <i className='fa-solid fa-chevron-right'></i>
          </button>
        </div>
      ))}
      {/* <div className="w-[48%] h-48 md:h-[300px] lg:h-[450px] xl:h-[550px] 2xl:h-[670px] 3xl:h-[818px] relative flex flex-col items-center justify-center">
        <Image
          src="https://sstorage.clearance.ae/production/storage/banner/2023-08-29-64edb55839c25.png"
          alt="image"
          fill
          className="object-cover"
        />
        <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold text-white mb-4 2xl:mb-8 3xl:mb-10 z-10 uppercase">
          stylewe classic look
        </h1>
        <button
          type="button"
          className="flex flex-row items-center gap-x-2 lg:gap-x-3 z-10 bg-white uppercase px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 3xl:px-10 py-2 2xl:py-2.5 text-xs md:text-sm 2xl:text-base"
        >
          <p>shop now</p>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div> */}
    </div>
  );
};

export default BestSeller;

