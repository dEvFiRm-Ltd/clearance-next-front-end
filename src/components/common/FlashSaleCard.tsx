"use client";
import { flashSaleCardProps } from "@/utils/type";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import StarList from "./StarList";
import SizeSelectDropDown from "./SizeSelectDropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import addcart from "@/static/addcart.svg";

const FlashSaleCard: FC<flashSaleCardProps> = ({
  img,
  preSaleImgSticker,
  discount,
  text,
  text2,
  salePrice,
  price,
  review,
  btnText,
  groupClass,
  imgClass,
  btnClass,
  colorImg,
  actionCb,
  url,
  check = false,
  imgVariantSmall = false,
  whitelist = false,
  addToCartIcon = true,
  variants = false,
  salePriceClass,
  priceClass,
}) => {
  const [selectSize, setSelectSize] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(
    0
  );
  const path = usePathname();
  const local = path.split("/")[1];
  const selectedImg =
    colorImg && selectedColorIndex !== null
      ? colorImg[selectedColorIndex]
      : img;
  const sizeSelectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sizeSelectRef.current &&
        !sizeSelectRef.current.contains(event.target as Node)
      ) {
        setSelectSize(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Link
      target={process.env.NEXT_PUBLIC_SITE_URL ? "_blank" : ""}
      href={
        process.env.NEXT_PUBLIC_SITE_URL
          ? process.env.NEXT_PUBLIC_SITE_URL + "product/" + url
          : "/product-details" + url
      }
      className={`boxShadow flex flex-col relative bg-white !font-[Helvetica] ${groupClass}`}
    >
      <div className={`w-full overflow-hidden relative group ${imgClass}`}>
        {whitelist && (
          <button className="absolute top-1 right-1 z-10 bg-white py-1 px-2 rounded-full text-slate-500">
            <i className="fa-regular fa-heart" />
          </button>
        )}
        <Image
          src={selectedImg}
          alt="img"
          fill
          className={`group-hover:transform group-hover:scale-110 transition-transform duration-300 ${
            imgVariantSmall ? "object-fill" : "object-cover"
          }`}
        />
        {discount && (
          <span className="absolute top-3 bg-red-400 text-white px-1 py-0.5 text-xs lg:text-sm 3xl:text-base">
            -{discount}%
          </span>
        )}
        {check && (
          <span className="absolute top-1 right-1 text-center bg-black-primary/80 h-7 w-7 rounded text-white px-1 py-0.5 text-xs lg:text-sm 3xl:text-base">
            <i className="fa-solid fa-check"></i>
          </span>
        )}
        {preSaleImgSticker && (
          <span className="h-10 w-8 lg:h-[52px] lg:w-[42px] absolute right-0">
            <Image src={preSaleImgSticker} alt="" fill />
          </span>
        )}
        {/* {process.env.NEXT_PUBLIC_MODE !== "prod" && (
          <div
            onClick={(e) => {
              e.preventDefault();
              actionCb?.();
            }}
            className={`hidden md:block group-hover:opacity-100 opacity-0 text-center py-2.5 lg:py-3.5 w-[130px] md:w-[140px] lg:w-[160px] 2xl:w-[220px] px-3 absolute left-1/2 -translate-x-1/2 bottom-12 rounded-full bg-white/90 uppercase ${btnClass}`}
          >
            {local === "en" ? " add to bag" : "أضف الى الحقيبة"}
          </div>
        )} */}
      </div>
      <div className="flex w-full flex-col justify-start items-start self-stretch flex-1 gap-1.5 py-1.5 px-1">
        <p className="line-clamp-1 text-xs lg:text-sm">{text}</p>
        <div className="flex justify-between items-center gap-2 w-full">
          <div
            className={`flex flex-wrap items-center space-x-1 ${
              addToCartIcon ? "w-[85%]" : "w-full"
            }`}
          >
            <span
              className={`text-sm lg:text-base xl:text-lg 3xl:text-xl text-[#dc2626] font-bold ${salePriceClass}`}
            >
              {salePrice} AED
            </span>
            {price && (
              <span
                className={`text-xs lg:text-sm font-normal text-[#868C93] line-through ${priceClass}`}
              >
                {price} AED
              </span>
            )}
          </div>
          {addToCartIcon && (
            <button className="w-[15%] text-[#000] h-4 relative">
              <Image src={addcart} alt="cartIcon" fill />
            </button>
          )}
        </div>
        {variants && (
          <div className="w-full flex items-center space-x-1">
            {[1, 2, 3].map((imgg: any, id: number) => (
              <div
                key={id}
                className="h-[24px] w-[24px] rounded-full border border-[#e3e3e3] focus:border-[#222] flex items-center justify-center"
              >
                <div className="w-[18px] h-[18px] rounded-full relative">
                  <Image
                    src={selectedImg}
                    fill
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {text2 && (
          <span className="inline-block px-1 rounded-sm text-red-400 bg-[#FEF2F2] font-normal !font-[Helvetica] text-xs truncate w-fit">
            {text2}
          </span>
        )}
        {colorImg && (
          <div className="flex justify-start gap-x-1">
            {colorImg.map((item: string, id: number) => (
              <div
                key={id}
                className={`h-6 w-6 flex justify-center items-center border  rounded-full bg-white ${
                  id === selectedColorIndex
                    ? "border-black-primary"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedColorIndex(id)}
              >
                <span className="h-[18px] w-[18px] rounded-full overflow-hidden relative">
                  <Image alt="" fill src={item} />
                </span>
              </div>
            ))}
          </div>
        )}
        {review && <StarList review={review} />}
      </div>
      {btnText && (
        <div className="relative" ref={sizeSelectRef}>
          <div
            onClick={() => {
              setSelectSize(!selectSize);
            }}
            className="w-full text-sm ring-1 ring-ash bg-white py-1 px-2 text-gray capitalize"
          >
            {btnText}
            <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
          </div>
          {selectSize && <SizeSelectDropDown />}
        </div>
      )}
    </Link>
  );
};

export default FlashSaleCard;
