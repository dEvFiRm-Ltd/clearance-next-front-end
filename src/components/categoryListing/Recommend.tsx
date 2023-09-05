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
    <div className="container my-10 flex flex-row items-center gap-x-3 bg-[#F2F2F3] px-6 py-7">
      <p className="text-base capitalize text-[#222]">Recommend</p>
      <div className="flex flex-row flex-wrap items-center gap-3">
        {recommendArr.map((item: recommendType, i: number) => (
          <Button
            key={i}
            btnText={`${item.title}`}
            btnClass="text-sm leading-4 px-3 py-2 bg-white text-[#5D626A] hover:bg-[#111] hover:text-white"
          />
        ))}
      </div>
    </div>
  );
};

export default Recommend;
