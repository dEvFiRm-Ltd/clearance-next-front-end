import React, { useState } from 'react';
import SelectField, { dropDowns } from '../base/SelectField';
import Image from 'next/image';
import { measurementContent, sizeDropDown } from '@/static';
import Button from '../base/Button';
import Link from 'next/link';
import StarList from '../common/StarList';
import Tab from '../base/Tab';
const img = [
  'https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e8a594edd22.png',
  'https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-06-26-649983317be13.png',
  'https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e8a594edd22.png',
  'https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e8a594dae88.png',
  'https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-06-26-649983317be13.png',
];
const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState('regular');
  const [selectedSize, setSelectedSize] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const handleImageClick = (index: any) => {
    setSelectedImageIndex(index);
  };

  const handlePrevButtonClick = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };
  const images = [
    'https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdb8efab.png',
    'https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdbaec44.png',
    'https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdbc3fc3.png',
    'https://sstorage.clearance.ae/production/storage/product/2023-08-25-64e89fdbd65f8.png',
  ];
  return (
    <section className='mx-auto w-[1200px] pt-6 flex flex-row justify-center gap-10 pb-20'>
      <div className='flex flex-row justify-start gap-6'>
        <div className='flex flex-col justify-start gap-3'>
          {images.map((imageUrl, id) => (
            <div
              key={id}
              className={`h-[88px] w-[66px] relative overflow-hidden group ${
                id === selectedImageIndex ? 'ring-1 ring-black-primary' : ''
              }`}
              onClick={() => handleImageClick(id)}
            >
              <Image
                fill
                alt='image'
                className={`${
                  id === selectedImageIndex ? 'scale-90' : 'scale-100'
                }`}
                src={imageUrl}
              />
            </div>
          ))}
        </div>
        <div className='w-[558px]'>
          <div className='h-[744px] w-full overflow-hidden relative'>
            {images.map((imageUrl, index) => (
              <Image
                key={index}
                fill
                alt='image'
                src={imageUrl}
                className={`absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
                  index === selectedImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* <Image fill alt="image" src={images[selectedImageIndex]} /> */}
            {selectedImageIndex !== 0 && (
              <Button
                actionCb={handlePrevButtonClick}
                variant='primary'
                icon='fas fa-chevron-left !text-base lg:!text-xl'
                btnClass='!bg-[#00000020] hover:!bg-[#00000040] flex items-center justify-center !absolute top-1/2 -translate-y-1/2 left-0 !w-[52px] !h-[104px] text-white'
              />
            )}
            {selectedImageIndex !== images.length - 1 && (
              <Button
                actionCb={handleNextButtonClick}
                variant='primary'
                icon='fas fa-chevron-right !text-base lg:!text-xl'
                btnClass='!bg-[#00000020] hover:!bg-[#00000040] flex items-center justify-center !absolute top-1/2 -translate-y-1/2 right-0 !w-[52px] !h-[104px] text-white'
              />
            )}
          </div>
          {/* social links  */}
          <div className='py-5 flex flex-row justify-center items-center gap-6'>
            <Link href={''} className='h-12 w-12 group'>
              <span className='h-10 w-10 rounded-full flex justify-center items-center text-2xl text-white bg-black-primary group-hover:bg-blue-400'>
                <i className='fab fa-twitter'></i>
              </span>
            </Link>
            <Link href={''} className='h-12 w-12 group'>
              <span className='h-10 w-10 rounded-full flex justify-center items-center text-2xl text-white bg-black-primary group-hover:bg-blue-400'>
                <i className='fab fa-facebook-f'></i>
              </span>
            </Link>
            <Link href={''} className='h-12 w-12 group'>
              <span className='h-10 w-10 rounded-full flex justify-center items-center text-2xl text-white bg-black-primary group-hover:bg-red-500'>
                <i className='fab fa-pinterest-p'></i>
              </span>
            </Link>
          </div>
          {/* social link  */}
        </div>
      </div>
      {/*product image ends  */}
      {/* product details  */}
      <div className='w-[512px] flex flex-col justify-start items-start gap-4'>
        <div className='w-[300px] h-[22px] relative overflow-hidden'>
          <Image alt='' fill src={''} />
        </div>
        <div>
          <h3 className='text-xl text-black-primary capitalize mb-1'>
            Elegant Loosen Flat Collar Plain Outerwear
          </h3>
          <StarList review={'26 reviews'} />
        </div>
        {/* pricing  */}
        <div className='flex flex-row justify-start items-center gap-x-2'>
          <i className='text-xl text-yellow-400 fas fa-bolt'></i>
          <h5 className='text-red-400 leading-[48px] text-3xl font-bold'>
            43.75 AED
          </h5>
          <p className='text-base line-through text-[#A1A5AB]'>50.99 AED</p>
          <span className='bg-black-primary text-white text-xs py-px px-1 ml-1'>
            -16%
          </span>
        </div>
        {/* flash sale */}
        <div className='space-y-1'>
          <div className='flex flex-row justify-start items-center gap-x-4 capitalize text-sm'>
            <span className='w-fit px-1 rounded-sm text-red-400 bg-[#FEF2F2] font-normal !font-[Helvetica]'>
              flash sale
            </span>
            <div className='flex flex-row justify-start items-center gap-x-1'>
              <span className='text-base text-left text-gray'>ends in:</span>
              <p className='text-black font-bold'>04D : 08H : 57M : 28S</p>
            </div>
          </div>
          <h3 className='uppercase text-[22px] text-gray font-medium'>
            flash deals
          </h3>
        </div>
        {/* gifts  */}
        <button
          type='button'
          className='w-full flex flex-row justify-between py-1'
        >
          <div className='flex justify-start items-center gap-x-2 '>
            <span className='bg-red-400 h-5 w-5 rounded text-white'>
              <i className='fas fa-gift'></i>
            </span>
            <span className='text-sm text-gray'>
              free gift on orders over 99 AED
            </span>
            {img.map((item: string, id: number) => (
              <span key={id} className='h-7 w-7 overflow-hidden relative'>
                <Image alt='' fill src={item} />
              </span>
            ))}
          </div>
          <i className='fas fa-chevron-right'></i>
        </button>
        <div className='w-full p-3.5 border border-ash flex flex-row justify-start items-center gap-x-3.5'>
          <span className='rounded w-[60px] h-[30px] relative overflow-hidden bg-red-300'>
            <Image fill alt='Logo' src={''} />
          </span>
          <p className='text-sm text-[#17120f]'>
            4 interest-free payments of 10.83 AED.
            <Link href={''} className='underline pl-0.5'>
              Learn more
            </Link>
          </p>
        </div>
        {/* colors */}
        <div className='flex flex-col justify-start items-start gap-y-3'>
          <div className='flex justify-start gap-2 capitalize text-black-primary text-lg'>
            color: <span className='font-bold'>Black</span>
          </div>
          <div className='h-9 w-9 flex justify-center items-center border border-black rounded-full bg-white'>
            <span className='h-7 w-7 rounded-full overflow-hidden relative'>
              <Image
                alt=''
                fill
                src={
                  'https://sstorage.clearance.ae/production/storage/product/2023-08-04-64ccaafb5233f.png'
                }
              />
            </span>
          </div>
          {/* fits */}
          <div className='text-black-primary text-lg capitalize'>fit:</div>
          <div className='flex justify-start items-center gap-x-3'>
            <button
              className={`p-2 border text-sm uppercase w-fit border-black-primary ${
                activeTab === 'regular'
                  ? 'bg-black-primary text-white'
                  : 'bg-white text-black-primary'
              }`}
              onClick={() => handleTabClick('regular')}
            >
              regular
            </button>
            <button
              className={`p-2 border text-sm uppercase w-fit border-black-primary ${
                activeTab === 'plus'
                  ? 'bg-black-primary text-white'
                  : 'bg-white text-black-primary'
              }`}
              onClick={() => handleTabClick('plus')}
            >
              plus
            </button>
            {/* Add more buttons here */}
          </div>
          {/* sizes area  */}
          <div className='w-full flex justify-between items-center'>
            <div className='flex justify-start items-center gap-x-3'>
              <p className='text-gray text-lg capitalize'>size:</p>
              {/* <SelectField
                dropdownItems={sizeDropDown}
                currentItem={selectedSize.title}
                onChangeCb={(item: dropDowns) => {
                  setSelectedSize(item);
                }}
              /> */}
            </div>
            <Button
              actionCb={() => {}}
              btnText='Size Gide'
              variant='link'
              prefixIcon='fas fa-ruler-horizontal rotate-180 '
              btnClass='!w-auto'
            />
          </div>
          <Tab tabArr={measurementContent} />
          {/* sizes area ends  */}
        </div>
        <div className='flex flex-row justify-start gap-x-4 w-full'>
          <Button
            actionCb={() => {}}
            btnText='Add to cart'
            variant='primary'
            btnClass='hover:!opacity-90 !text-lg !font-bold !w-3/4 rounded'
          />
          <Button
            actionCb={() => {}}
            btnText='Buy it now'
            variant='outlined'
            btnClass='hover:!opacity-90 !w-auto !px-3 rounded !text-base font-semibold'
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

