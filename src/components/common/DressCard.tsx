import Image from "next/image";
import React, { FC } from "react";

export type dressType = {
  image: string;
  title: string;
  heading?: string;
  titleClass?: string;
  hightClass?: string;
  withClass?: string;
};

const DressCard: FC<dressType> = ({
  image,
  title,
  titleClass,
  hightClass,
  withClass,
  heading,
}) => {
  return (
    <div
      className={`w-40 lg:w-44 xl:w-48 2xl:w-[234px] 3xl:w-[272px] flex flex-col items-center justify-start gap-y-4 uppercase ${withClass}`}
    >
      <div
        className={`relative h-56 lg:h-64 xl:h-72 2xl:h-[335px] 3xl:h-[390px] w-full ${hightClass}`}
      >
        <Image src={image} alt="image" fill className="object-cover" />
      </div>
      {heading && (
        <p className=" text-base sm:text-sm lg:text-lg xl:text-2xl leading-6 sm:leading-4 lg:leading-7 xl:leading-10 font-medium text-black">
          {heading}
        </p>
      )}
      <p
        className={`border-b text-xl leading-8 text-[#5C5C5C] border-[#B9B9B9] inline-block ${titleClass}`}
      >
        {title}
      </p>
    </div>
  );
};

export default DressCard;
