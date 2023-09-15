import DressList from "@/components/categoryListing/DressList";
import Recommend from "@/components/categoryListing/Recommend";
import SideBar from "@/components/categoryListing/SideBar";
import BottomHeader from "@/components/header/BottomHeader";
import MiddleHeader from "@/components/header/MiddleHeader";
import MobileHeader from "@/components/header/MobileHeader";
import TopHeader from "@/components/header/TopHeader";
import Footer from "@/components/home/Footer";
import { recommendData } from "@/static";
import React from "react";

const CategoryPage = () => {
  return (
    <>
      <div className=" container xl:w-[1160px] 2xl:w-full mx-auto my-10 xl:flex flex-row items-center gap-x-3 bg-[#F2F2F3] px-6 py-7 hidden">
        <Recommend
          recommendArr={recommendData}
          heading="Recommend"
          btnClass=""
        />
      </div>
      <div className="container xl:w-[1160px] 2xl:w-full flex flex-col xl:flex-row mt-[26px] mb-[83px]">
        <SideBar />
        <DressList />
      </div>
    </>
  );
};

export default CategoryPage;
