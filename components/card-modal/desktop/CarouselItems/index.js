import React from "react";
import BigCarousel from "./BigCarousel";
import SmallCarousel from "./SmallCarousel";
const CarouselItemsCard = ({ product }) => {
  return (
    <div className="w-[484px] h-full">
      <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 h-[496px]">
        <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 relative h-full gap-3">
          <BigCarousel product={product} />
        </div>
      </div>
    </div>
  );
};

export default CarouselItemsCard;
