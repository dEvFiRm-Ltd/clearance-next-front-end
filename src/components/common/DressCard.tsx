import Image from "next/image";
import React, { FC } from "react";

type dressType = {
  image: string;
  title: string;
  titleClass?: string;
  hightClass?: string;
  withClass?: string;
  title2?: string;
};

const DressCard: FC<dressType> = ({
  image,
  title,
  titleClass,
  hightClass,
  withClass,
  title2,
}) => {
  return (
    <div className="uppercase text-xl leading-8 text-[#5C5C5C]">
      <div
        className={`w-[272px] flex flex-col items-center justify-center ${withClass}`}
      >
        <div className={`relative h-[390px] w-full ${hightClass}`}>
          <Image src={image} alt="image" fill className="object-cover" />
        </div>
        <p className="text-2xl leading-10 font-medium text-[#000000] mt-3">
          {title2}
        </p>
        <p
          className={`border-b border-[#B9B9B9] inline-block my-4 ${titleClass}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default DressCard;
