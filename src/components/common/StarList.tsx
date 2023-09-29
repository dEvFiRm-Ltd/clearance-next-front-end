import React, { FC } from "react";
export type starProps = {
  review?: string;
  groupClass?: string;
  starClass?: string;
};
const StarList: FC<starProps> = ({ review, groupClass, starClass }) => {
  const star = [
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
  ];
  return (
    <button
      type="button"
      className={`text-sm flex text-yellow-500 flex-row justify-start items-center gap-x-1 ${groupClass}`}
    >
      {star.map((item: string, id: number) => (
        <i key={id} className={`${starClass} ${item}`}></i>
      ))}
      <p className="pl-1 text-gray hover:underline">({review})</p>
    </button>
  );
};

export default StarList;
