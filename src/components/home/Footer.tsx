import React, { FC } from "react";
import FooterPart from "../common/FooterPart";
import { footerItems} from "@/static";
import { footerProps, linkType } from "@/utils/type";

const Footer = () => {
  
  return (
    <div className="bg-[#F2F2F3] py-10 xl:px-5 px-3 3xl:px-0">
      <div className="container">
        <div className="flex flex-col lg:flex-row flex-wrap justify-start gap-x-5">
          {footerItems.map((item: footerProps, i: number) => (
            <FooterPart key={i} heading={item.heading} itemArr={item.itemArr} socialArr={item.socialArr} contactUsText={item.contactUsText} contactUsArr={item.contactUsArr} hasBtn={item.hasBtn} headingClass="font-bold" />
          ))}          
        </div>        
      </div>
    </div>
  );
};

export default Footer;
