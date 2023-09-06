import React, { FC } from "react";
import Button from "../base/Button";

export type recommendType = {
  title: string;
};
export type recommendProps = {
  recommendArr: recommendType[];
};

const Recommend: FC<recommendProps> = ({ recommendArr }) => {
  return (
    <div className="w-full hidden container my-10 3xl:flex flex-row items-center gap-x-3 lg:bg-[#F2F2F3] px-6 py-7">
      <p className="text-base capitalize text-[#222]">Recommend</p>
      <div className="w-full flex flex-row flex-wrap items-center gap-3">
        {recommendArr.map((item: recommendType, i: number) => (
          <div key={i} className="">
          <Button
           
            btnText={`${item.title}`}
            variant="primary"
            btnClass="!text-sm !leading-4 !px-3 !py-2 !bg-[#F2F2F3] !rounded-md lg:!rounded-none lg:!bg-white !text-[#222] hover:!bg-[#111] hover:!text-white"
          /></div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
