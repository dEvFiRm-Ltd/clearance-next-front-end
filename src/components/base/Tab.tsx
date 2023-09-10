"use client";
import { tabs } from "@/static";
import React, { FC, ReactNode, useState } from "react";

export type tabTypes = {
  shoulder: string;
  bust: string;
  sleeveLength: string;
  length: string;
  hemWidth: string;
};
export type tabProps = {
  tabArr: tabTypes[];
};

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const renderMeasurementContent = (index: number) => {
    const measurement = tabArr[index];
    return (
      <div className="flex gap-x-1 flex-wrap text-base">
        <span className="flex text-black-primary">
          Shoulder:{" "}
          <span className="ml-1 text-gray">{measurement.shoulder}</span>,
        </span>
        <span className="flex text-black-primary">
          Bust: <span className="ml-1 text-gray">{measurement.bust}</span>,
        </span>
        <span className="flex text-black-primary">
          Sleeve Length:{" "}
          <span className="ml-1 text-gray">{measurement.sleeveLength}</span>,
        </span>
        <span className="flex text-black-primary">
          Length: <span className="ml-1 text-gray">{measurement.length}</span>,
        </span>
        <span className="flex text-black-primary">
          Hem Width:{" "}
          <span className="ml-1 text-gray">{measurement.hemWidth}(inch)</span>,
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <div className="flex justify-start gap-3">
        {tabb?.map((tab:string, index:number) => (
          <div
            key={index}
            className={`text-sm border text-center border-black-primary p-1.5 2xl:p-2 rounded-sm cursor-pointer ${
              index === activeTab
                ? "bg-black-primary text-white"
                : "bg-white text-black-primary"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="mt-1 p-2 bg-[#fafafa] w-full">
        <h6 className="text-gray capitalize text-sm">product measurement</h6>
        {renderMeasurementContent(activeTab)}
      </div>
    </div>
  );
};

export default Tab;
