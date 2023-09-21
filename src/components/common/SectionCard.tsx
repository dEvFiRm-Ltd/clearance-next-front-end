import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export type sectionCardType = {
  url?: string;
  sectionArr: any[];
};

const SectionCard: FC<sectionCardType> = ({ url, sectionArr }) => {
  return (
    <div className="container w-full flex flex-row justify-center mt-3 md:mt-4 xl:mt-5 gap-1 md:gap-2 lg:gap-3 xl:gap-4">
      {sectionArr.map((item: any) => (
        <Link
          target={process.env.NEXT_PUBLIC_SITE_URL ? "_blank" : ""}
          href={
            process.env.NEXT_PUBLIC_SITE_URL
              ? process.env.NEXT_PUBLIC_SITE_URL +
                "products?category=" +
                url +
                `&page=1`
              : `/products?category=` + url
          }
          className={`w-[50%]`}
        >
          <div className="relative aspect-[40/53] w-full overflow-hidden">
            <Image
              src={item?.photo}
              alt="image"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SectionCard;
