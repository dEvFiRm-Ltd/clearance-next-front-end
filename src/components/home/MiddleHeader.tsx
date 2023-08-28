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
          <button type="button">
            <i className="fa-solid fa-globe"></i>
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
