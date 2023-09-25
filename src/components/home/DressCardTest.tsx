"use client";
import React, { useEffect, useState } from "react";
import DressCard from "../common/DressCard";

export const DressCardTest = ({ sectionResponse, sectionLgResponse }: any) => {
  const [mobileImgLarge, setMobileImgLarge] = useState(
    sectionResponse?.data?.sections[0]
  );
  const [mobileImgSmall, setMobileImgSmall] = useState(
    sectionResponse?.data?.sections[1]
  );
  const [desktopImgs, setDesktopImgs] = useState(
    sectionLgResponse?.data?.sections[0]
  );
  return (
    <>
      {/* <----- mobile device -----> */}
      <div className="xl:hidden">
        <div className="w-full flex justify-between pl-1">
          <DressCard
            image={mobileImgLarge?.hs_banner?.photo}
            url={mobileImgLarge?.hs_banner?.url}
            withClass={"w-1/2"}
            hightClass={"aspect-[16/15]"}
          />
          <DressCard
            image={mobileImgLarge?.hs_banner?.photo}
            url={mobileImgLarge?.hs_banner2?.url}
            withClass={"w-1/2"}
            hightClass={"aspect-[16/15]"}
          />
        </div>
        <div className="flex items-center px-1">
          <DressCard
            image={mobileImgSmall?.hs_banner?.photo}
            url={mobileImgSmall?.hs_banner?.url}
            withClass={"w-full"}
            hightClass={"aspect-[40/53]"}
          />
          <DressCard
            image={mobileImgSmall?.hs_banner2?.photo}
            url={mobileImgSmall?.hs_banner2?.url}
            withClass={"w-full"}
            hightClass={"aspect-[40/53]"}
          />
          <DressCard
            image={mobileImgSmall?.hs_banner3?.photo}
            url={mobileImgSmall?.hs_banner3?.url}
            withClass={"w-full"}
            hightClass={"aspect-[40/53]"}
          />
          <DressCard
            image={mobileImgSmall?.hs_banner4?.photo}
            url={mobileImgSmall?.hs_banner4?.url}
            withClass={"w-full"}
            hightClass={"aspect-[40/53]"}
          />
        </div>
      </div>

      {/* <----- desktop (lg) device -----> */}
      <div className="hidden xl:flex items-center px-2">
        <DressCard
          image={desktopImgs?.hs_banner3?.photo} // **** <--- need to change ---> ****
          url={desktopImgs?.hs_banner?.url}
          withClass={"!w-[18%]"}
          hightClass={"!aspect-[40/53] !w-[100%]"}
        />
        <DressCard
          image={desktopImgs?.hs_banner3?.photo}  // **** <--- need to change ---> ****
          url={desktopImgs?.hs_banner2?.url}
          withClass={"!w-[18%]"}
          hightClass={"aspect-[40/53] !w-[100%]"}
        />
        <DressCard
          image={desktopImgs?.hs_banner3?.photo}
          url={desktopImgs?.hs_banner3?.url}
          withClass={"!w-[18%]"}
          hightClass={"aspect-[40/53] !w-[100%]"}
        />
        <DressCard
          image={desktopImgs?.hs_banner4?.photo}
          url={desktopImgs?.hs_banner4?.url}
          withClass={"!w-[18%]"}
          hightClass={"aspect-[40/53] !w-[100%]"}
        />
        <DressCard
          image={desktopImgs?.hs_banner5?.photo}
          url={desktopImgs?.hs_banner5?.url}
          withClass={"!w-[18%]"}
          hightClass={"aspect-[40/53] !w-[100%]"}
        />
        <DressCard
          image={desktopImgs?.hs_banner6?.photo}
          url={desktopImgs?.hs_banner6?.url}
          withClass={"!w-[18%]"}
          hightClass={"aspect-[40/53] !w-[100%]"}
        />
      </div>
    </>
  );
};
