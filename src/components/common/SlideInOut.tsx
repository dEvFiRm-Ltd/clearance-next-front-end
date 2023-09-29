"use client";
import React, { useEffect, useState } from "react";
import { footerItems, silderBottomHeaderData } from "@/static";
import { footerProps, linkType } from "@/utils/type";
import Link from "next/link";
import ProductSubSlider, { subcategoryData } from "./ProductSubSlider";
import FooterPart from "./FooterPart";
import { langType, langs } from "../header/Select";
import { usePathname, useRouter } from "next/navigation";

const SlideInOut = ({
  data,
  closeActionCb,
}: {
  data: any[];
  closeActionCb: () => void;
}) => {
  const path = usePathname();
  const router = useRouter();
  const [view, setView] = useState(false);
  const [language, setLanguage] = useState<string>("");
  const [subCategories, setSubCategories] = useState<subcategoryData>({
    data: [],
    title: "",
    categoryUrl: "",
    customActionCb: (e) => {},
  });
  useEffect(() => {
    const locale = path.split("/")[1];
    const currentLang = langs.find((e) => e.value === locale);
    if (currentLang) {
      setLanguage(currentLang.name);
    }
  }, []);

  return (
    <div className="w-full max-h-screen overflow-y-auto flex flex-col gap-y-2">
      <button
        onClick={closeActionCb}
        type="button"
        className="absolute -right-12 top-0 w-12 h-12 bg-[#000000] "
      >
        <i className=" text-white fa-solid fa-xmark"></i>
      </button>
      <div className="bg-white pl-4 w-full flex flex-col justify-start items-start pb-8">
        {data.map((item: any, id: number) => (
          <button
            key={id}
            type="button"
            onClick={() => {
              setView(!view);
              setSubCategories({
                data: item.sub_category,
                title: item.name,
                categoryUrl: process.env.NEXT_PUBLIC_SITE_URL
                  ? `${process.env.NEXT_PUBLIC_SITE_URL}products?category=${item?.slug}&page=1`
                  : "/",
                customActionCb: (e) => {
                  window?.open(
                    `${process.env.NEXT_PUBLIC_SITE_URL}products?category=${item.name}-${e.slug}&page=1`,
                    "_blank"
                  );
                },
              });
            }}
            className="w-full flex flex-row justify-between items-center uppercase text-base text-black py-4 border-b last:border-0"
          >
            <span>{item?.name}</span>
            <i className="fa-solid fa-chevron-right text-xs pr-4"></i>
          </button>
        ))}
      </div>
      {view && (
        <div
          className={`slideIn absolute w-full origin-right bg-white transition-all duration-1000 z-50 top-0 ${
            view ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ProductSubSlider
            subcategoryData={subCategories}
            closeStateCb={() => setView(!view)}
          />
        </div>
      )}
      <div className="bg-white">
        <button
          type="button"
          onClick={() => {
            setView(!view);
            setSubCategories({
              data: langs,
              title: "Language",
              customActionCb: (e: langType) => {
                const selectedLocale = e.value;
                const pathArr = path.split("/");
                pathArr[1] = selectedLocale;
                const changedPath = pathArr.join("/");
                router.push(changedPath);
              },
            });
          }}
          className="w-full flex flex-row justify-between items-center capitalize text-base text-black py-4 border-b pl-4"
        >
          <span>Language</span>
          <p>
            <span className="text-right text-sm pl-3 pr-[18px] text-[#a1a5ab]">
              {language}
            </span>
            <i className="fa-solid fa-chevron-right text-xs pr-4"></i>
          </p>
        </button>
      </div>
      {/* <div className="bg-white">
        {[1, 1, 1].map((item: any, id: number) => (
          <button
            key={id}
            type="button"
            onClick={() => setView(!view)}
            className="w-full flex flex-row justify-between items-center capitalize text-base text-black py-4 border-b pl-4"
          >
            <span>Country/Region</span>
            <p>
              <span className="text-right text-sm pl-3 pr-[18px] text-[#a1a5ab]">
                Bangladesh
              </span>
              <i className="fa-solid fa-chevron-right text-xs pr-4"></i>
            </p>
          </button>
        ))}
      </div> */}
      <div className="px-4">
        {footerItems.map((item: footerProps, id: number) => (
          <FooterPart
            key={id}
            headingEn={item.headingEn}
            headingAe={item.headingAe}
            itemArr={item.itemArr}
            socialArr={item.socialArr}
            contactUsTextEn={item.contactUsTextEn}
            contactUsTextAe={item.contactUsTextAe}
            contactUsArr={item.contactUsArr}
            hasBtn={item.hasBtn}
          />
        ))}
      </div>
      {/* <div className="flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 pt-1.5 pb-5">
          {iconCard.map((item: linkType, i: number) => (
            <Link key={i} href={item.url}>
              <i className={`text-2xl ${item.title}`}></i>
            </Link>
          ))}
        </div> */}
      {/* slider header  */}
      <div className="mobileBottomHeader w-full py-2.5 flex justify-between items-center gap-2.5 bg-white text-center sticky bottom-0">
        {silderBottomHeaderData.map((item: linkType, id: number) => (
          <Link
            key={id}
            href={item.url}
            className="w-full text-xl md:text-2xl leading-7 text-[#8c8c8c]"
          >
            <i className={`${item.icon}`}></i>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SlideInOut;
