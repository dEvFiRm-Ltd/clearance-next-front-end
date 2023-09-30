import Image from "next/image";
import Link from "next/link";
import React from "react";

export const TwoBanner = () => {
  return (
    <div className="px-6 flex flex-col py-4 container xl:px-0 xl:flex-row">
      <Link href="/" className="p-[7.5px] xl:p-[5px] w-full xl:w-1/2">
        <div className="w-full relative aspect-[64/25] xl:aspect-[175/54]">
          <Image
            src={
              "https://www.stylewe.com/image/catalog/activity/jnOSDaT1T41694085936.webp"
            }
            alt=""
            fill
          />
        </div>
      </Link>
      <Link href="/" className="p-[7.5px] xl:p-[5px] w-full xl:w-1/2">
        <div className="w-full relative aspect-[64/25] xl:aspect-[175/54]">
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
