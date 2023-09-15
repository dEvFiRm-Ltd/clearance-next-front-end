"use client";
import React, { FC, useState } from "react";
import FilterItem from "../common/FilterItem";
import Button from "../base/Button";

type FilterItemType = {
  title: string;
  labels: Label[];
};

type Label = {
  label: string;
};

const SideBar: FC = () => {
  const [check, setCheck] = useState(true);

  // Define an array of filter items with different titles and labels
  const filterItems: FilterItemType[] = [
    {
      title: "sizes",
      labels: [
        { label: "xxl" },
        { label: "xs" },
        { label: "l" },
        { label: "s" },
      ],
    },
    {
      title: "Brands",
      labels: [
        { label: "Pull & Bear" },
        { label: "Zara" },
        { label: "Reebok" },
        { label: "adidas" },
        { label: "UNIVERSAL" },
        { label: "Roccobarroco" },
        { label: "Speedo" },
      ],
    },
    {
      title: "Prices",
      labels: [
        { label: "Less than 266" },
        { label: "266 - 517" },
        { label: "517 - 768" },
        { label: "More than 768" },
      ],
    },
    // Add more filter items as needed
  ];

  return (
    <div className="w-[216px] mr-6 text-black pr-3 hidden xl:block">
      <h1 className="text-lg leading-10 pb-3 font-semibold border-b border-[#E0E1E3]">
        FILTERS
      </h1>

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

      <Button
        btnText="Reset"
        btnClass="!mt-5 !text-lg !font-semibold disabled:opacity-20 disabled:cursor-not-allowed hover:opacity-80 active:opacity-90 active:shadow-[inset_0px_0px_8px_rgba(0,0,0,0.25)] px-4 h-10 border-[1.5px] self-center uppercase"
        variant="outlined"
      />
    </div>
  );
};

export default SideBar;
