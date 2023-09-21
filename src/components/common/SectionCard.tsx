import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export type sectionCardType = {
  url?: string;
  sectionArr: any[];
};

const SectionCard: FC<sectionCardType> = ({ url, sectionArr }) => {
  return (
    <div className='container w-full flex flex-row justify-center mt-1 md:mt-4 xl:mt-5 gap-1 md:gap-2 lg:gap-3 xl:gap-4'>
      {sectionArr.map((item: any) => (
        <Link
          target={'_blank'}
          href={url || '/'}
          className={`w-[50%] relative aspect-[7/8] overflow-hidden`}
        >
          <Image
            src={item?.photo}
            alt='image'
            fill
            className='object-contain'
          />
        </Link>
      ))}
    </div>
  );
};

export default SectionCard;

