import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SecureCheckOut = () => {
  return (
    <div className='py-[30px] border-b border-[#DCDCDC]'>
      <div className='container flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-x-10 items-center'>
          <Link
            href={'/'}
            className='w-32 h-10 relative lg:w-40 2xl:w-44 3xl:w-[200px]'
          >
            <img
              src='https://backend-live.clearance.ae/storage/company/2023-02-06-63e08deba2852.png'
              alt='logo'
            />
          </Link>
          <div className='flex flex-row gap-x-10 items-center'>
            <i className='fa-solid fa-square-check text-3xl text-green-600'></i>
            <p className='text-2xl text-black-primary'>Secure Checkout</p>
          </div>
        </div>
        <Link
          href={'/category-listing'}
          className='flex flex-row items-center gap-x-10'
        >
          <p className='text-xl text-black-primary'>CONTINUE SHOPPING</p>
          <i className='fa-solid fa-chevron-right'></i>
        </Link>
      </div>
    </div>
  );
};

export default SecureCheckOut;

