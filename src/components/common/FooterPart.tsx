import Link from "next/link";
import React, { FC } from "react";

type footerType = {
  heading: string;
  title: string;
  url: string;
};

const FooterPart: FC<footerType> = ({ title, url, heading }) => {
  return (
    <div className="">
      <p className="text-lg leading-7 font-bold text-[#000000] uppercase mb-5">
        {heading}
      </p>
      <Link href={url} className="text-sm text-[#000000] font-normal leading-5">
        {title}
      </Link>
    </div>
  );
};

export default FooterPart;
