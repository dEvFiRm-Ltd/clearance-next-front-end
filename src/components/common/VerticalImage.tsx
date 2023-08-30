import Image from "next/image";
import React, { FC } from "react";

type imageType = {
  img: string;
  className: string;
};

const VerticalImage: FC<imageType> = ({ img, className }) => {
  return (
    <div className={`w-[880px] h-[405px] relative ${className}`}>
      <Image src={img} alt="image" fill className="object-cover" />
    </div>
  );
};

export default VerticalImage;
