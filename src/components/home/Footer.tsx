import React, { FC } from "react";
import FooterPart from "../common/FooterPart";
import { footerItems } from "@/static";
import { footerProps, linkType } from "@/utils/type";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#f1f2f3] py-5 xl:px-5 px-3 3xl:px-0">
      <div className="container">
        <div className="flex flex-col lg:flex-row flex-wrap justify-start gap-x-5">
          {footerItems.map((item: footerProps, i: number) => (
            <FooterPart
              key={i}
              headingEn={item.headingEn}
              headingAe={item.headingAe}
              itemArr={item.itemArr}
              socialArr={item.socialArr}
              contactUsTextEn={item.contactUsTextEn}
              contactUsTextAe={item.contactUsTextAe}
              contactUsArr={item.contactUsArr}
              hasBtn={item.hasBtn}
              groupClass="lg:w-[32%]"
              headingClass="font-bold"
            />
          ))}
        </div>

        <div className="flex items-center flex-wrap px-4 mt-5 !font-[Helvetica]">
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Paypal"
              title="Paypal"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/EpzeDfnhOHEuSiwe5JGSMn7AOr4PACWfCOPvdpnK.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Klarna"
              title="Klarna"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/CjIOTU4lgSOTAkB1Jz1CvCND3UuBgQjwgpa72o1S.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Afterpay"
              title="Afterpay"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/3llFxQSNx01654495076.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Visa"
              title="Visa"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/s4AQRk7keQg1PL8z6basUcXfrWo3FTTPLoADK8zQ.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Mastercard"
              title="Mastercard"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/CFSmeEi9CnuQj0Nzawwx34UBJ0IauGezE0eMPbbE.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="American Express"
              title="American Express"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/r61jbmFv4GzJKO727HLVoERwMj2aaINIrVxPT8hK.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Diners Club"
              title="Diners Club"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/93RkKE4erOeFWUc5TY53fWwC7uqDfMnN9ctUbykO.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Discover"
              title="Discover"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/LYx30ZWHHSFHucQXFeKSs4gigEAQ5diX4WgKaijH.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Maestro"
              title="Maestro"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/GY54JpUUeoNdwJthb4lwKhOmM0BGPArBRnMuqBBt.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="JCB"
              title="JCB"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/piNgPFlwRlzU4JcvZMDlFnwzFIY0Q8PTxiYSpz4V.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Carte Bancaire"
              title="Carte Bancaire"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/gdLex5oTmknitDOXUOQvsCdjnvTll5scxGpx8wtJ.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Sofortbanking"
              title="Sofortbanking"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/KIqJG9rrNkRv9WRAskg0RBvx6bgvYrBnUnQFy1dA.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="applepay"
              title="applepay"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/pwXd4iPx4g1632295698.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="blik"
              title="blik"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/xT6RMPbWhH2clTid3SNr4Yp6J1IwyV6wdojuoSmW.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Przelewy24"
              title="Przelewy24"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/zfKDmyJxOgirIoJovUj4qLfkfQT971n8KnmbDeHA.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Ideal"
              title="Ideal"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/6L7bY270lVu3Zb9vskw8syBidYD2wSw6fAFxhzBK.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="Bancontact"
              title="Bancontact"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/oZNipW5me9354Uv8FZJ0ugLaOUFAtvY8tUEEEiph.png"
            />
          </div>
          <div className="w-[16px] h-[16px] relative mx-[12.5px] mb-4">
            <Image
              fill
              className=""
              alt="paywithgoogle"
              title="paywithgoogle"
              src="https://www.stylewe.com/image_cache/resize/160x32/image/catalog/activity/o7WntEy9UAhmILksY3i6e4TxAov2Ly06JhwNS5Rm.png"
            />
          </div>
        </div>

        <p className="text-center font-normal text-sm text-[#8c8c8c] mt-1 pb-3">
          &copy; Copyright 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
