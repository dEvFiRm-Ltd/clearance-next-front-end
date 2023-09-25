import { imageType } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";


const VerticalImage: FC<imageType> = ({ img, className, objectClass ,item}) => {
  return (
    <Link
      target={process.env.NEXT_PUBLIC_SITE_URL ? "_blank" : ""}
      href={
        process.env.NEXT_PUBLIC_SITE_URL
          ? item?.url  || ""
          : "/product-details" + item?.url
      }
      className={`relative ${className} aspect-video`}
    >
      <Image
        src={img}
        alt="image"
        fill
        className={`object-contain ${objectClass}`}
      />
    </Link>
  );
};

export default VerticalImage;
