"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import SlideInOut from "../common/SlideInOut";
import Select from "./Select";
import { usePathname } from "next/navigation";
import SearchField from "../base/SearchField";
import Button from "../base/Button";

type MobileHeaderProp = {
  navArr: any[];
};

const MobileHeader: FC<MobileHeaderProp> = ({ navArr }) => {
  const [show, setShow] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isSearchDropdownVisible, setSearchDropdownVisible] = useState(false);
  const languageButtonRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState(false);
  const path = usePathname();
  const local = path.split("/")[1];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchButtonRef.current &&
        !searchButtonRef.current.contains(event.target as Node)
      ) {
        setSearchVisible(false);
      }
      if (
        languageButtonRef.current &&
        !languageButtonRef.current.contains(event.target as Node)
      ) {
        setLanguage(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="sticky lg:hidden w-full flex flex-row justify-between items-center px-3 md:px-[30px] top-0 bg-white z-50">
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="group relative pl-0 p-2 md:pl-0 md:p-3 text-2xl"
        >
          <i className="fas fa-bars"></i>
        </button>
        <Link href={"/"} className="w-32 h-8 md:h-9 relative">
          <Image
            src="https://backend-live.clearance.ae/storage/company/2023-02-06-63e08deba2852.png"
            fill
            alt="logo"
          />
        </Link>
        <div className="w-auto md:w-44 flex flex-row justify-between items-center gap-x-4 text-xl">
          <Link
            target={process.env.NEXT_PUBLIC_SITE_URL ? "_blank" : ""}
            href={
              process.env.NEXT_PUBLIC_SITE_URL
                ? process.env.NEXT_PUBLIC_SITE_URL + "customer/auth/login"
                : `customer/auth/login`
            }
            className="group relative "
          >
            <i className="fa-regular fa-user"></i>
          </Link>
          <Button
            actionCb={() => setSearchVisible(!isSearchVisible)}
            btnType="button"
            variant="primary"
            icon="fa-solid fa-magnifying-glass !text-xl"
            btnClass="!text-[#616368] !bg-white !w-auto"
          />
          {/* <div ref={languageButtonRef} className='relative '>
            <button
              type='button'
              onClick={() => setLanguage(!language)}
              className='p-2 2xl:p-3'
            >
              <i className='fa-solid fa-globe'></i>
            </button>
              {language && (
              <div className=" w-52 flex flex-col justify-start gap-y-5 absolute top-full right-0 z-50 px-4 pt-5 pb-2 bg-white cartShadow">
                <p className="text-sm 2xl:text-base font-bold text-black-primary capitalize text-left">
                  Language
                </p>
                <div className="w-full mb-3 bg-white">
                  <Select />
                </div>
              </div>
            )} 
          </div>*/}
          <a
            target="_blank"
            href="https://clearance.ae"
            className="group relative"
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </a>
        </div>
        {isSearchVisible && (
          <div ref={searchButtonRef} className="w-full absolute top-full z-10">
            <SearchField
              onFocus={() => setSearchDropdownVisible(true)}
              onBlur={() => setSearchDropdownVisible(false)}
            />
          </div>
        )}
      </div>
      <div
        className={`w-full fixed h-screen top-0 transition-all duration-300 ${
          show ? "z-50 bg-white/50" : "-z-10 bg-transparent"
        } `}
      >
        <div
          className={`w-[80%] bg-[#f2f2f3] z-40 relative pb-10 transition-all duration-300 ${
            show ? "left-0" : "-left-full"
          } `}
        >
          <SlideInOut data={navArr} closeActionCb={() => setShow(false)} />
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
