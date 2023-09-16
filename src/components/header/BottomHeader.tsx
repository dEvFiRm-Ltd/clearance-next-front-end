import Link from "next/link";
import React from "react";
import { bottomHeaderItems, bottomHeaderLinkItems } from "@/static";
import { footerProps, linkType } from "@/utils/type";
import FooterPart from "../common/FooterPart";
import Image from "next/image";
import { env } from "process";
const BottomHeader = async() => {

  const categoryApiCall = await fetch(
    env.BASE_URL + "api/v10/web/home/categories",
    {
      next: { revalidate: 10 },
    }
  );
  const categoryResponse = await categoryApiCall.json();
  const categoryArr: Array<any> = categoryResponse.data.categories || [];
  return (
    <div className="hidden  border-b relative lg:flex flex-row items-center justify-center text-[#000000] font-bold uppercase w-fit mx-auto lg:gap-x-4 xl:gap-x-5 2xl:gap-x-8 3xl:gap-x-10 text-[13px] xl:text-sm 2xl:text-base 3xl:text-lg">
      {categoryArr.map((item:  any, id: number) => (
        <Link key={id} href={item?.url || ''} className="hover-link py-4 peer">
          {item?.name}
        </Link>
      ))}
      <div className="absolute top-full border-t peer-hover:visible hover:visible invisible flex transition-all flex-row justify-center items-start gap-x-10 pt-10 pb-[52px] z-40 bg-white w-screen">
        {bottomHeaderItems.map((item: footerProps, id: number) => (
          <FooterPart
            key={id}
            heading={item.heading}
            itemArr={item.itemArr}
            headingClass="!text-sm !capitalize !mb-4"
          />
        ))}
        <div className="flex flex-row items-center lg:gap-x-4 2xl:gap-x-5">
          <div className="lg:w-48 xl:w-60 2xl:w-72 3xl:w-80 lg:h-32 xl:h-40 2xl:h-48 3xl:h-52 relative overflow-hidden">
            <Image src="/girl.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="lg:w-48 xl:w-60 2xl:w-72 3xl:w-80 lg:h-32 xl:h-40 2xl:h-48 3xl:h-52 relative overflow-hidden">
            <Image src="/girl2.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;

// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import HoverComponent from "../common/HoverComponent";

// const BottomHeader = () => {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const handleItemHover = (item: any) => {
//     setHoveredItem(item);
//   };

//   const menuItems = [
//     { text: "clothing", link: "/clothing" },
//     { text: "FW23", link: "/fw23" },
//     { text: "clothing", link: "/clothing" },
//     { text: "FW23", link: "/fw23" },
//     { text: "clothing", link: "/clothing" },
//     { text: "FW23", link: "/fw23" },
//     { text: "clothing", link: "/clothing" },
//     { text: "FW23", link: "/fw23" },
//     { text: "clothing", link: "/clothing" },
//     { text: "FW23", link: "/fw23" },
//     { text: "clothing", link: "/clothing" },
//     { text: "FW23", link: "/fw23" },
//     { text: "clothing", link: "/clothing" },
//     { text: "FW23", link: "/fw23" },
//   ];

//   return (
//     <div className="border-b mt-4 flex flex-col items-center justify-center">
//       <div className="flex flex-row items-center gap-x-10 text-lg leading-6 text-[#000000] font-bold uppercase">
//         {menuItems.map((item: any, i: number) => (
//           <div
//             key={item.text}
//             onMouseEnter={() => handleItemHover(item.text)}
//             onMouseLeave={() => handleItemHover(null)}
//             className="pb-4 relative"
//           >
//             <Link href={item.link}>{item.text}</Link>
//             {hoveredItem === item.text && (
//               <div className="absolute top-full z-50 transform -translate-x-1/2 left-1/2 transition-all ease-in-out duration-300">
//                 <HoverComponent />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BottomHeader;
