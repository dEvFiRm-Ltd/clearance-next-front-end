import { flashSaleCardProps } from "@/utils/type";
import Image from "next/image";
import React, { FC } from "react";

const FlashSaleCard: FC<flashSaleCardProps> = ({
  img,
  preSaleImgSticker,
  discount,text,text2,SalePrice,Price,
  groupClass,
  
  imgClass,
}) => {
  return (
        <div className={`boxShadow group ${groupClass}`}>
          <div
            className={`w-full h-52 md:h-[278px] lg:h-80 3xl:h-[324px] overflow-hidden relative ${imgClass}`}
          >
            <Image
              src={img}
              alt="img"
              fill
              className="group-hover:transform group-hover:scale-110 transition-transform duration-300"
            />
            {discount && (
              <span className="absolute top-3 bg-[#DC2626] text-white px-1 py-0.5 text-xs lg:text-sm 3xl:text-base">
                -{discount}%
              </span>
            )}
            {preSaleImgSticker && (
              <span className="h-10 w-8 lg:h-[52px] lg:w-[42px] absolute right-0">
                <Image src={preSaleImgSticker} alt="" fill />
              </span>
            )}
            <button
              type="button"
              className="group-hover:opacity-100 opacity-0 text-center py-2.5 lg:py-3.5 min-w-[130px] md:min-w-[140px] lg:min-w-[160px] 2xl:min-w-[220px] px-3 absolute left-1/2 -translate-x-1/2 bottom-12 rounded-full bg-white/90 uppercase"
            >
              add to bag
            </button>
          </div>
          <div className="flex w-full flex-col justify-start items-start self-stretch flex-1 gap-1.5 bg-white py-1.5 px-1">
            <p className="line-clamp-1 text-xs lg:text-sm">{text}</p>
            <div className="flex flex-wrap justify-start items-center gap-2">
              <span className="text-sm md:text-base xl:text-lg 3xl:text-xl text-[#DC2626] font-bold">
                ${SalePrice}
              </span>
              {Price && (
                <span className="text-xs lg:text-sm font-normal text-[#868C93] line-through ">
                  ${Price}
                </span>
              )}
            </div>
            {text2 && (
              <span className="px-1 rounded-sm text-[#DC2626] bg-[#FEF2F2] font-normal !font-[Helvetica] text-xs">
                {text2}
              </span>
            )}
          </div>
        </div>   
    
  );
};

export default FlashSaleCard;
