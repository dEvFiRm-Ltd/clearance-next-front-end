"use client"
import React, { FC, useState } from "react";
import FilterItem from "../common/FilterItem";
import { FilterItemType } from "@/utils/type";


const SideBar: FC = () => {
  const [check, setCheck] = useState(true);

  // Define an array of filter items with different titles and labels
  const filterItems: FilterItemType[] = [
    {
      title: "Category 1",
      labels: [
        { label: "Label 1" },
        { label: "Label 2" },
      ],
    },
    {
      title: "Category 2",
      labels: [
        { label: "Label 3" },
        { label: "Label 4" },
      ],
    },
    // Add more filter items as needed
  ];

  return (
    <div className="w-[216px] mr-6 text-black pr-3 hidden 3xl:block">
      <h1 className="text-lg leading-10 pb-3 font-semibold border-b border-[#E0E1E3]">FILTERS</h1>

      {/* Use map to render FilterItem components for each filter item */}
      {filterItems.map((item, index) => (
        <FilterItem
          key={index}
          title={item.title}
          actionCb={() => setCheck(!check)}
          viewStateCb={check}
          icon={`${check === false ? "rotate-180" : ""}`}
          labels={item.labels}
          actionCbView={() => {}}
        />
      ))}
    </div>
  );
};

export default SideBar;
