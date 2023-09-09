import React, { FC } from "react";
import Button from "../base/Button";

export type recommendType = {
  title: string;
};
export type recommendProps = {
  recommendArr: recommendType[];
  heading:string;
  btnClass:string;
};

const Recommend: FC<recommendProps> = ({ recommendArr,heading, btnClass }) => {
  return (
    <>
      <p className="text-base capitalize text-[#222]">{heading}</p>
      <div className="w-full flex flex-row flex-wrap items-center gap-3">
        {recommendArr.map((item: recommendType, i: number) => (
          <div key={i} className="">
          <Button
           
            btnText={`${item.title}`}
            variant="primary"
            btnClass={`!text-sm !leading-4 !px-3 !py-2 !bg-[#F2F2F3] !rounded-md lg:!rounded-none lg:!bg-white !text-[#222] hover:!bg-[#111] hover:!text-white ${btnClass}`}
          /></div>
        ))}
      </div>
   </>
  );
};

export default Recommend;
