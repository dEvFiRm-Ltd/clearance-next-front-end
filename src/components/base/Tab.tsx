'use client'
import React, { ReactNode, useState } from "react";

export type tabTypes={
    text:string;
    content:ReactNode;
}
export type tabProps={
    actionCb:()=> void;
    value:string;
    tabArr:tabTypes[]
}

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["S(6-8)", "M(10)", "L(12)","XL(14)","XXL(16)"];
  const tabContent = [
    "1",
    "2",
    "3",
    "4",
    "5",
  ]; 

  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <div className="flex justify-start gap-3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`text-sm border text-center border-black-primary p-1.5 2xl:p-2 rounded-sm cursor-pointer ${
              index === activeTab ? "bg-black-primary text-white" : "bg-white text-black-primary"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="mt-1 p-2 bg-[#fafafa] w-full">
        <h6 className="text-gray capitalize text-sm">product measurement</h6>
        <div className="flex gap-x-1 flex-wrap text-base">
            <span className="flex text-black-primary">
                Shoulder: <span className="ml-1 text-gray">16.9</span>, 
            </span>
            <span className="flex text-black-primary">
                Bust: <span className="ml-1 text-gray">40.2</span>, 
            </span>
            <span className="flex text-black-primary">
                Sleeve Length: <span className="ml-1 text-gray">24</span>, 
            </span>
            <span className="flex text-black-primary">
                Length: <span className="ml-1 text-gray">21.1</span>, 
            </span>
            <span className="flex text-black-primary">
                Hem Width: <span className="ml-1 text-gray">29.9(inch)</span>, 
            </span>
        </div>
            {tabContent[activeTab]}
        </div>
    </div>
  );
};

export default Tab;