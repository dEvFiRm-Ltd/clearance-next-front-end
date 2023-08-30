import Link from "next/link";
import React from "react";
import HoverComponent from "../common/HoverComponent";
const BottomHeader = () => {
  return (
    <div className="border-b mt-4 flex flex-col items-center justify-center w-full relative group">
      <div className="flex flex-row items-center justify-center gap-x-1 sm:gap-x-2.5 lg:gap-x-5 2xl:gap-x-10 text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg 3xl:leading-6 text-[#000000] font-bold uppercase w-full">
        <Link href="" className="hover-link pb-4">
          clothing
        </Link>
        <Link href="" className="hover-link pb-4">
          FW23
        </Link>
        <Link href="" className="hover-link pb-4">
          new in
        </Link>
        <Link href="" className="hover-link pb-4">
          tops
        </Link>
        <Link href="" className="hover-link pb-4">
          dresses
        </Link>
        <Link href="" className="hover-link pb-4">
          outerwear
        </Link>
        <Link href="" className="hover-link pb-4">
          knitwear
        </Link>
        <Link href="" className="hover-link pb-4">
          bottoms
        </Link>
        <Link href="" className="hover-link pb-4">
          plus+curve
        </Link>
        <Link href="" className="hover-link pb-4">
          shoes+accessories
        </Link>
        <Link href="" className="hover-link pb-4">
          sale
        </Link>
        <Link href="" className="hover-link pb-4">
          community
        </Link>
      </div>
      <div className="absolute top-10 border-t z-50 group-hover:block hidden w-screen">
        <HoverComponent />
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
