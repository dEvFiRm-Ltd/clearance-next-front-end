import Image from 'next/image';
import React, { FC } from 'react';

type imageType = {
  img: string;
  className: string;
  objectClass?: string;
};

const VerticalImage: FC<imageType> = ({ img, className, objectClass }) => {
  return (
    <div className={`relative ${className}`}>
      <img src={img} alt='image' className={`object-cover ${objectClass}`} />
    </div>
  );
};

export default VerticalImage;

