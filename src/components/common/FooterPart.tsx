import { footerProps, linkType } from "@/utils/type";
import Link from "next/link";
import React, { FC } from "react";

const FooterPart: FC<footerProps> = ({ itemArr, heading, headingClass }) => {
  return (
    <div>
      <p
        className={`lg:text-base 2xl:text-lg font-bold text-black uppercase mb-5 ${headingClass}`}
      >
        {heading}
      </p>
      <div className="flex flex-col justify-start gap-y-3">
        {itemArr.map((item: linkType, id: number) => (
          <Link
            key={id}
            href={item.url}
            className="text-[13px] 2xl:text-sm text-black font-normal leading-5"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterPart;
