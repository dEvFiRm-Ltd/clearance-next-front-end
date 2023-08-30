import Image from "next/image";
import React, { FC } from "react";
export type flashSaleCardTypes = {
  img: string;
  preSaleImgSticker?: string;
  discount?: string;
  text: string;
  SalePrice: string;
  Price?: string;
  text2?: string;
};
export type flashSaleCardProps = {
  flashSaleCardArr: flashSaleCardTypes[];
  groupClass?: string;
  childClass?: string;
  imgClass?: string;
};
const FlashSaleCard: FC<flashSaleCardProps> = ({
  flashSaleCardArr,
  groupClass,
  childClass,
  imgClass,
}) => {
  return (
    <div className={`p-3 flex justify-center items-center ${groupClass}`}>
      {flashSaleCardArr.map((item: flashSaleCardTypes, id: number) => (
        <div key={id} className={`boxShadow group ${childClass}`}>
          <div
            className={`w-full h-[324px] overflow-hidden relative ${imgClass}`}
          >
            <Image src={item.img} alt="img" fill />
            {item.discount && (
              <span className="absolute top-3 bg-[#DC2626] text-white px-1 py-0.5 text-base">
                -{item.discount}%
              </span>
            )}
            {item.preSaleImgSticker && (
              <span className="h-[52px] w-[42px] absolute right-0">
                <Image src={item.preSaleImgSticker} alt="" fill />
              </span>
            )}
            <button
              type="button"
              className="group-hover:opacity-100 opacity-0  text-center py-3.5 min-w-[191px] 2xl:min-w-[220px] px-3 absolute left-1/2 -translate-x-1/2 bottom-12 rounded-full bg-white/90 uppercase"
            >
              add to bag
            </button>
          </div>
          <div className="flex w-full flex-col justify-start items-start self-stretch flex-1 gap-1.5 bg-white py-1.5 px-1">
            <p className="line-clamp-1 text-sm">{item.text}</p>
            <div className="flex flex-wrap justify-start items-center gap-2">
              <span className="text-xl text-[#DC2626] font-bold">
                ${item.SalePrice}
              </span>
              {item.Price && (
                <span className="text-sm font-normal text-[#868C93] line-through ">
                  ${item.Price}
                </span>
              )}
            </div>
            {item.text2 && (
              <span className="px-1 rounded-sm text-[#DC2626] bg-[#FEF2F2] font-normal !font-[Helvetica] text-xs">
                {item.text2}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlashSaleCard;
