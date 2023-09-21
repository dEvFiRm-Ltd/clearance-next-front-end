import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

export type dressType = {
  image: string;
  title?: string;
  url?: string;
  heading?: string;
  hightClass?: string;
  withClass?: string;
  totalProduct?: number;
};

const DressCard: FC<dressType> = ({
  image,
  url,
  title,
  hightClass = "",
  withClass = "",
  heading,
  totalProduct,
}) => {
  return (
    <Link
      // target='_blank'
      // href={'process.env.NEXT_PUBLIC_SITE_URL/products?category=' + url}
      target={process.env.NEXT_PUBLIC_SITE_URL ? "_blank" : ""}
      href={
        process.env.NEXT_PUBLIC_SITE_URL
          ? process.env.NEXT_PUBLIC_SITE_URL +
            "products?category=" +
            url +
            `&page=1`
          : `/products?category=` + url
      }
      className={`xl:ml-0 xl:mr-0 xl:w-48 2xl:w-[234px] 3xl:w-[272px] flex flex-col items-center justify-start gap-y-4 uppercase ${withClass}`}
    >
      <div className={`relative md:aspect-[40/53] w-full ${hightClass}`}>
        <Image src={image} alt="image" fill className="object-contain" />
      </div>
      {heading && (
        <p className="text-base md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-10 font-semibold text-black">
          {heading}
        </p>
      )}
      {title && (
        <p className="border-b text-gray border-[#B9B9B9] text-sm lg:text-base xl:text-lg 3xl:text-xl xl:leading-8">
          {title} ({totalProduct})
        </p>
      )}
    </Link>
  );
};

export default DressCard;
