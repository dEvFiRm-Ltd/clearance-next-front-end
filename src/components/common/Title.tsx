import React from "react";

const Title = () => {
  return (
    <div className="w-full flex flex-col justify-start gap-y-5 lg:flex-row lg:justify-between items-center px-10 pt-10 pb-4">
      <h3 className="font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-[28px] capitalize">
        flash sale{" "}
      </h3>
      <div className="flex justify-center items-center gap-0.5 lg:gap-1.5">
        <span className="text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl lg:font-bold text-[#31353c] mr-1.5 capitalize">
          ends in
        </span>
        <span className="inline-flex gap-0.5 lg:gap-1.5">
          <span className="rounded-[4px] lg:rounded-md px-[7px] py-1.5 font-black decoration-slate-900 line-through text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl decoration-1 xl:decoration-2 text-white bg-[#31353c]">
            0
          </span>
          <span className="rounded-[4px] lg:rounded-md px-[7px] py-1.5 font-black decoration-slate-900 line-through text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl decoration-1 xl:decoration-2 text-white bg-[#31353c]">
            7
          </span>
        </span>
        <span className="text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl font-bold text-[#31353c]">
          :
        </span>
        <span className="inline-flex gap-0.5 lg:gap-1.5">
          <span className="rounded-[4px] lg:rounded-md px-[7px] py-1.5 font-black decoration-slate-900 line-through text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl decoration-1 xl:decoration-2 text-white bg-[#31353c]">
            0
          </span>
          <span className="rounded-[4px] lg:rounded-md px-[7px] py-1.5 font-black decoration-slate-900 line-through text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl decoration-1 xl:decoration-2 text-white bg-[#31353c]">
            7
          </span>
        </span>
        <span className="text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl font-bold text-[#31353c]">
          :
        </span>
        <span className="inline-flex gap-0.5 lg:gap-1.5">
          <span className="rounded-[4px] lg:rounded-md px-[7px] py-1.5 font-black decoration-slate-900 line-through text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl decoration-1 xl:decoration-2 text-white bg-[#31353c]">
            1
          </span>
          <span className="rounded-[4px] lg:rounded-md px-[7px] py-1.5 font-black decoration-slate-900 line-through text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl decoration-1 xl:decoration-2 text-white bg-[#31353c]">
            3
          </span>
        </span>
        <span className="text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl font-bold text-[#31353c]">
          :
        </span>
        <span className="inline-flex gap-0.5 lg:gap-1.5">
          <span className="rounded-[4px] lg:rounded-md px-[7px] py-1.5 font-black decoration-slate-900 line-through text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl decoration-1 xl:decoration-2 text-white bg-[#31353c]">
            4
          </span>
          <span className="rounded-[4px] lg:rounded-md px-[7px] py-1.5 font-black decoration-slate-900 line-through text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl decoration-1 xl:decoration-2 text-white bg-[#31353c]">
            2
          </span>
        </span>
        <button
          type="button"
          className="hidden h-10 w-10 rounded-full lg:flex justify-center items-center text-gray-800"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Title;
