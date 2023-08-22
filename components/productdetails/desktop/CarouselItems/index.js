import React from "react";
import BigCarousel from "./BigCarousel";
import SmallCarousel from "./SmallCarousel";
const CarouselItemsCard = ({ product }) => {
  return (
    <div className="w-full flex items-start h-full gap-3">
      <div className="h-[696px] border-10 w-full">
        <BigCarousel product={product} />
      </div>
    </div>
  );
};

export default CarouselItemsCard;
