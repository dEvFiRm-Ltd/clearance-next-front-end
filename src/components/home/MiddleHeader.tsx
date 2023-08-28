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
          <button type="button">
            <i className="fa-regular fa-user"></i>
          </button>
          <button type="button">
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
