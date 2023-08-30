import Link from "next/link";
import React from "react";

const MiddleHeader = () => {
  return (
    <div className="px-[60px] flex flex-row justify-between items-center py-5">
      <div className="uppercase text-2xl">Stylewe</div>
      <div className="flex flex-row items-center gap-x-8">
        <div className="">
          <input
            type="text"
            placeholder="Jacket"
            className="w-[300px] pl-5 outline-none py-[15px] border rounded-l"
          />
          <button className="hover:bg-[#616368] bg-[#000000] px-10 py-4 rounded-r">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </button>
        </div>
        <div className="flex flex-row items-center gap-x-8 text-2xl">
          <button type="button" className="group relative">
            <i className="fa-solid fa-globe"></i>
            <div className="group-hover:block hidden absolute top-12 right-0 shadow-lg z-10 px-6 py-[18px] bg-white rounded-lg">
              <p className="text-sm leading-5 font-normal text-[#000000] capitalize">
                country/region
              </p>
            </div>
          </button>
          <button type="button" className="group relative">
            <i className="fa-regular fa-user"></i>
            {/* hover dropdown */}
            <div className="absolute right-[50%] translate-x-[50%] z-50 top-[115%] bg-white group-hover:flex min-w-[240px] rounded-lg hidden cartShadow">
              <div className="w-full flex flex-col justify-start items-center gap-4 relative p-4">
                <button
                  type="button"
                  className="flex justify-center items-center overflow-hidden rounded hover:opacity-80 bg-[#31353C] group w-full px-3 py-2 text-white text-base"
                >
                  Sign In / Register{" "}
                </button>
                <p className="text-sm leading-5 font-normal text-[#000000] capitalize">
                  or sign in:
                </p>
                <span className="flex justify-center items-center gap-x-10">
                  <Link href="">
                    <i className="fab fa-facebook text-blue-500"></i>
                  </Link>
                  <Link href="">
                    <i className="fab fa-google text-red-400"></i>
                  </Link>
                </span>
                <span className="h-px bg-slate-500 w-full" />
                <Link
                  href={""}
                  className="w-full text-base text-left text-[#5d626a] hover:font-bold capitalize"
                >
                  my order
                </Link>
                <Link
                  href={""}
                  className="w-full text-base text-left text-[#5d626a] hover:font-bold capitalize"
                >
                  my coupons
                </Link>
                <Link
                  href={""}
                  className="w-full text-base text-left text-[#5d626a] hover:font-bold capitalize"
                >
                  my wallet
                </Link>
                <span className="h-3 w-3 bg-white cartShadow rotate-45 absolute -z-50 -top-1.5 left-1/2 -translate-x-1/2" />
              </div>
            </div>
            {/* hover dropdown ends */}
          </button>
          <button type="button" className="group relative">
            <i className="fa-solid fa-bag-shopping"></i>
            {/* hover dropdown */}
            <div className="cartShadow group-hover:block hidden absolute top-10 -right-1 z-50 bg-white rounded-lg">
              <div className="flex flex-col justify-center items-center w-[448px] relative gap-6 py-10">
                <div className="h-32 w-32 rounded-full bg-slate-50 overflow-hidden flex justify-center items-end">
                  <i className="fas fa-shopping-cart text-[80px] text-gray-300"></i>
                </div>
                <p className="leading-5 font-normal capitalize text-lg text-center text-[#5d626a]">
                  Your Shopping Bag Is Empty
                </p>
                <span className="h-3 w-3 bg-white cartShadow rotate-45 absolute -z-50 -top-1.5 right-4" />
              </div>
            </div>
            {/* hover dropdown ends */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
