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
  const measurementContent = [
    {shoulder:'16.9',bust:'40.2',sleeveLength:'24',length:'21.1',hemWidth:'29.9'},
    {shoulder:'18.9',bust:'41.2',sleeveLength:'25',length:'22.1',hemWidth:'30.9'},
    {shoulder:'19.9',bust:'42.2',sleeveLength:'26',length:'23.1',hemWidth:'31.9'},
    {shoulder:'20.9',bust:'43.2',sleeveLength:'27',length:'24.1',hemWidth:'32.9'},
    {shoulder:'21.9',bust:'44.2',sleeveLength:'28',length:'25.1',hemWidth:'33.9'},
  ]; 
  const renderMeasurementContent = (index: number) => {
    const measurement = measurementContent[index];
    return (
      <div className="flex gap-x-1 flex-wrap text-base">
        <span className="flex text-black-primary">
          Shoulder: <span className="ml-1 text-gray">{measurement.shoulder}</span>,
        </span>
        <span className="flex text-black-primary">
          Bust: <span className="ml-1 text-gray">{measurement.bust}</span>,
        </span>
        <span className="flex text-black-primary">
          Sleeve Length: <span className="ml-1 text-gray">{measurement.sleeveLength}</span>,
        </span>
        <span className="flex text-black-primary">
          Length: <span className="ml-1 text-gray">{measurement.length}</span>,
        </span>
        <span className="flex text-black-primary">
          Hem Width: <span className="ml-1 text-gray">{measurement.hemWidth}(inch)</span>,
        </span>
      </div>
    );
  };

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
            {renderMeasurementContent(activeTab)}
        </div>
    </div>
  );
};

export default Tab;