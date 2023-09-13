import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
export type brandsType = {
  url: string;
  logo: string;
};
type brandProps = {
  brandArr: brandsType[];
};
const Brands: FC<brandProps> = ({ brandArr }) => {
  return (
    <section className="py-7 bg-ash">
      <div className="container flex flex-col justify-start items-center gap-y-6">
        <h3 className="text-base lg:text-lg 2xl:text-xl font-bold text-center text-black-primary uppercase">
          brands
        </h3>
        <div className="w-full flex flex-row justify-center gap-2 md:gap-3 lg:gap-4 xl:gap-5 flex-wrap !items-start py-3">
          {brandArr.map((item, id: number) => (
            <Link
              href={item.url}
              className="h-[84px] w-[84px] rounded-full overflow-hidden relative"
            >
              <Image fill src={item.logo} alt="brand logo" />
            </Link>
          ))}
        </div>
        <button className="rounded bg-black-primary hover:opacity-80 text-white px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-2 text-xs md:text-sm 2xl:text-base uppercase">
          view more
        </button>
      </div>
    </section>
  );
};

export default Brands;
