import Image from "next/image";
import Link from "next/link";
import React from "react";

export const TwoBanner = () => {
  return (
    <div className="px-6 flex flex-col py-4 md:px-4 container xl:flex-row">
      <Link href="/" className="p-[7.5px] w-full">
        <div className="min-w-full w-full h-[135px] relative md:w-full md:h-[282px] lg:w-[980px] lg:h-[383px] xl:w-full xl:h-full aspect-video">
          <Image
            src={
              "https://www.stylewe.com/image/catalog/activity/jnOSDaT1T41694085936.webp"
            }
            alt=""
            fill
          />
        </div>
      </Link>
      <Link href="/" className="p-[7.5px] w-full">
        <div className="min-w-full w-full h-[135px] relative md:w-full md:h-[282px] lg:w-[980px] lg:h-[383px] xl:w-full xl:h-full aspect-video">
          <Image
            src={
              "https://www.stylewe.com/image/catalog/activity/wSvw7UTvVj1694085936.webp"
            }
            alt=""
            fill
          />
        </div>
      </Link>
    </div>
  );
};
