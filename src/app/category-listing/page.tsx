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
      <Recommend recommendArr={recommendData} />
      <div className="container flex flex-col 3xl:flex-row mt-[26px] mb-[83px] px-3">
        <SideBar />
        <DressList />
      </div>
    </>
  );
};

export default CategoryPage;
