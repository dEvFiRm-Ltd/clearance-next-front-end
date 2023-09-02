"use client";
import React, { useState } from "react";

const SlideInOut = () => {
  const [view, setView] = useState(false);
  return (
    <div className="w-[600px] bg-white z-40 relative">
      <button
        type="button"
        onClick={() => setView(!view)}
        className="w-full flex flex-row justify-between items-center uppercase text-base text-black py-4 border-b"
      >
        <p className="pl-4">Clothing</p>
        <div>
          <i className="fa-solid fa-chevron-right text-xs pr-4"></i>
        </div>
      </button>
      {view && (
        <div
          className={`absolute w-full bg-white transition-transform pl-4 z-50 ${
            view ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {" "}
          <div>kabir</div>
        </div>
      )}
    </div>
  );
};

export default SlideInOut;
