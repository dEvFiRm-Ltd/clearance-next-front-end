'use client';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SubCategory from '../common/SubCategory';
type bottomHeaderProps = {
  bottomHeaderArr: any;
};
const BottomHeader: FC<bottomHeaderProps> = ({ bottomHeaderArr }) => {
  const [subCategories, setSubCategories] = useState<Array<any>>([]);
  const [index, setIndex] = useState<number>(0);
  return (
    <div className=' relative lg:flex flex-row items-center justify-center text-[#000000] font-bold uppercase w-screen lg:gap-x-4 xl:gap-x-5 2xl:gap-x-8 3xl:gap-x-10 text-[13px] xl:text-sm 2xl:text-base 3xl:text-lg'>
      <Swiper
        spaceBetween={30}
        loop={true}
        slidesPerView='auto'
        className='categorySlider peer'
      >
        {bottomHeaderArr.map((item: any, id: number) => (
          <SwiperSlide key={id}>
            <Link
              target={process.env.NEXT_PUBLIC_SITE_URL ? '_blank' : ''}
              href={
                process.env.NEXT_PUBLIC_SITE_URL
                  ? `${process.env.NEXT_PUBLIC_SITE_URL}products?category=${item?.slug}&page=1`
                  : '/'
              }
              onMouseEnter={() => {
                if (window?.innerWidth >= 1024) {
                  setSubCategories(item.sub_category);
                  setIndex(id);
                }
              }}
              className='hover-link py-4'
            >
              {item?.name}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {subCategories.length ? (
        <div className='absolute top-full border-t border-t-[#e7e7e7]/30 peer-hover:visible hover:visible invisible flex transition-all flex-row justify-center items-start gap-x-10 pt-10 pb-[52px] z-40 bg-white w-screen'>
          {subCategories.map((item: any, i: number) => (
            <SubCategory
              key={item.id}
              heading={item.name}
              itemArr={item.childes}
              slug={item?.slug}
              categorySlug={bottomHeaderArr[index]}
              headingClass='!text-sm !capitalize !mb-4'
            />
          ))}
          {/* <div className="flex flex-row items-center lg:gap-x-4 2xl:gap-x-5">
          <div className="lg:w-48 xl:w-60 2xl:w-72 3xl:w-80 lg:h-32 xl:h-40 2xl:h-48 3xl:h-52 relative overflow-hidden">
            <Image src="/girl.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="lg:w-48 xl:w-60 2xl:w-72 3xl:w-80 lg:h-32 xl:h-40 2xl:h-48 3xl:h-52 relative overflow-hidden">
            <Image src="/girl2.jpg" alt="" fill className="object-cover" />
          </div>
        </div> */}
        </div>
      ) : (
        <></>
      )}
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

