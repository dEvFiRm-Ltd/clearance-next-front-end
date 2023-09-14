import Image from 'next/image';
import React from 'react';
import promo from '@/Img/promo.webp';
export const Signup = () => {
  return (
    <section className='w-[350px] sm:w-[400px] flex flex-col space-y-4'>
      <div className='flex flex-col space-y-2 md:space-y-4 text-center text-[#5c5c5c] text-2xl'>
        <h1 className='hidden xl:block'>Register</h1>
        <div className='relative w-full min-h-[200px]'>
          <Image src={promo} alt={'Promotion Img'} fill />
        </div>
      </div>

      <div className='flex flex-col'>
        <input
          className='border border-zinc-400 hover:border-black focus:border-black  outline-none p-3'
          type='email'
          placeholder='*Email'
        />
        <input
          className='border border-zinc-400 hover:border-black focus:border-black  outline-none p-3 mt-6 mb-1'
          type='password'
          placeholder='*Password'
        />
        <input
          className='border border-zinc-400 hover:border-black focus:border-black  outline-none p-3 mt-6 mb-1'
          type='password'
          placeholder='*Re-Enter New Password'
        />
        <label className='default-button relative text-[13px] pl-6'>
          <input
            name='newsletter'
            type='checkbox'
            className='rounded-[50%] h-[15px] w-[15px] mr-2 absolute top-1 left-0 checked:bg-black'
          />
          Register with us to receive exclusive pre-sales, novelties, trends and
          promotions via email.
        </label>
        <button
          className='bg-black hover:bg-black text-white font-semibold py-3 tracking-wide px-4 mt-6 mb-1 uppercase text-[13px]'
          type='submit'
        >
          Create My Account
        </button>
        {/* coupon badge  */}
        <div className='relative bg-[#ffefee] coupon_before before:left-0 after:-right-3 text-red-500 text-[13px mt-2] overflow-hidden mt-2'>
          <div className='border border-red-500 relative py-1 px-4 '>
            <p className='text-[13px]'>Register to get 5 AED off coupons</p>
          </div>
        </div>
      </div>
    </section>
  );
};

