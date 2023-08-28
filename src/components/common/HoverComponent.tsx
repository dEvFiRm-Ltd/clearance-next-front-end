import React from "react";
import FooterPart from "./FooterPart";
import Image from "next/image";

const HoverComponent = () => {
  const hoverItems = [
    [
      {
        heading: "Shop By Category",
        title: "All Dresses",
        url: "",
      },
      {
        heading: "",
        title: "New Dresses",
        url: "",
        titleClass: "",
      },
      {
        heading: "",
        title: "Top-Rated Dresses",
        url: "",
        titleClass: "",
      },
      {
        heading: "",
        title: "Maxi Dresses",
        url: "",
        titleClass: "",
      },
      {
        heading: "",
        title: "Midi Dresses",
        url: "",
        titleClass: "",
      },
      {
        heading: "",
        title: "Mini Dresses",
        url: "",
        titleClass: "",
      },
      {
        heading: "",
        title: "Plus Dresses",
        url: "",
        titleClass: "",
      },
    ],
    [
      {
        heading: "Featured Shops",
        title: "Best Sellers",
        url: "",
      },
      {
        heading: "",
        title: "FW 2023",
        url: "",
        titleClass: "",
      },
      {
        heading: "",
        title: "Special Event",
        url: "",
        titleClass: "",
      },
      {
        heading: "",
        title: "Earth tone",
        url: "",
        titleClass: "",
      },
      {
        heading: "",
        title: "Intellectual Looks",
        url: "",
        titleClass: "",
      },
    ],
    [
      {
        heading: "Stylewe Classic Look",
        title: "Item 1",
        url: "",
      },
      {
        heading: "",
        title: "Designer Shop",
        url: "",
        titleClass: "",
      },
    ],
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-[52px] z-50 bg-white w-screen">
      <div className=" flex flex-row gap-x-10">
        {hoverItems.map((itemArr: any[], j: number) => (
          <div key={j} className="flex flex-col capitalize">
            {itemArr.map((item: any, i: number) => (
              <FooterPart
                key={i}
                heading={item.heading}
                title={item.title}
                url={item.url}
                headingClass="!text-sm !leading-5 !capitalize mb-1"
                titleClass={`!text-xm ${item.titleClass}`}
              />
            ))}
          </div>
        ))}
        <div className="flex flex-row items-center gap-x-5">
          <div className="w-[322px] h-[202px] relative overflow-hidden">
            <Image src="/girl.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="w-[322px] h-[202px] relative overflow-hidden">
            <Image src="/girl2.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverComponent;
