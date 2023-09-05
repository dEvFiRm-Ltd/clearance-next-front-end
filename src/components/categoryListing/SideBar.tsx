"use client"
import React, { useState } from "react";
import Checkbox from "../base/Checkbox";
import FilterItem from "../common/FilterItem";

const SideBar = () => {
  
  return (
  <div className="w-[216px] mr-6 text-black pr-3 hidden 3xl:block">
    <h1 className="text-lg leading-10 pb-3 font-semibold border-b border-[#E0E1E3]">FILTERS</h1>
    <FilterItem/>
  </div>
  );
};

export default SideBar;
