import React from "react";

const Title = () => {
  return (
    <div className="w-full flex justify-between items-center px-10 pt-10 pb-4">
      <h3 className="font-bold text-[28px] leading-8 capitalize">
        flash sale{" "}
      </h3>
      <div className="flex justify-center items-center gap-1.5">
        <span className="text-2xl font-bold text-[#31353c] mr-1.5 capitalize">
          ends in
        </span>
        <span className="inline-flex gap-1.5">
          <span className="rounded-md px-[7px] py-1.5 text-2xl font-black decoration-slate-900 line-through decoration-2 text-white bg-[#31353c]">
            0
          </span>
          <span className="rounded-md px-[7px] py-1.5 text-2xl font-black decoration-slate-900 line-through decoration-2 text-white bg-[#31353c]">
            6
          </span>
        </span>
        <span className="text-3xl font-bold text-[#31353c]">:</span>
        <span className="inline-flex gap-1.5">
          <span className="rounded-md px-[7px] py-1.5 text-2xl font-black decoration-slate-900 line-through decoration-2 text-white bg-[#31353c]">
            0
          </span>
          <span className="rounded-md px-[7px] py-1.5 text-2xl font-black decoration-slate-900 line-through decoration-2 text-white bg-[#31353c]">
            6
          </span>
        </span>
        <span className="text-3xl font-bold text-[#31353c]">:</span>
        <span className="inline-flex gap-1.5">
          <span className="rounded-md px-[7px] py-1.5 text-2xl font-black decoration-slate-900 line-through decoration-2 text-white bg-[#31353c]">
            1
          </span>
          <span className="rounded-md px-[7px] py-1.5 text-2xl font-black decoration-slate-900 line-through decoration-2 text-white bg-[#31353c]">
            3
          </span>
        </span>
        <span className="text-3xl font-bold text-[#31353c]">:</span>
        <span className="inline-flex gap-1.5">
          <span className="rounded-md px-[7px] py-1.5 text-2xl font-black decoration-slate-900 line-through decoration-2 text-white bg-[#31353c]">
            4
          </span>
          <span className="rounded-md px-[7px] py-1.5 text-2xl font-black decoration-slate-900 line-through decoration-2 text-white bg-[#31353c]">
            2
          </span>
        </span>
        <button
          type="button"
          className="h-10 w-10 rounded-full flex justify-center items-center text-gray-800"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Title;
