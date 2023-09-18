import Link from "next/link";
import React from "react";

export const Wallet = () => {
  return (
    <div className="flex flex-col items-start justify-between min-h-[400px] lg:min-h-[410px] md:pt-4">
      <div className="flex items-start space-x-6">
        <button className="text-black-primary font-extrabold text-2xl underline underline-offset-8">
          My Wallet
        </button>
        <button className="text-slate-400 font-bold text-lg">
          Credit Record
        </button>
      </div>
      <div className="w-full">
        <h4 className="text-black-primary text-xl font-bold mb-6">
          Account Balance
        </h4>
        <div className="w-full md:w-[430px] h-36 sm:h-40 bg-gradient-to-r from-[#FEF7E3] to-[#FCDDAA] flex justify-center items-center rounded-xl shadow-xl">
          <p className="text-xl sm:text-4xl font-bold text-black-primary">
            USD 0
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <i className="fa-regular fa-circle-question text-xl" />
          <Link href="#" className="underline text-black-primary text-xl">
            About My Wallet
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fa-solid fa-book-bookmark"></i>
          <Link href="#" className="underline text-black-primary text-xl">
            Terms of service
          </Link>
        </div>
      </div>
    </div>
  );
};
