import React from "react";
import { TimeCountdown } from "./TimeCountdown";

const Title = () => {
  return (
    <div className="w-full flex flex-col justify-start gap-y-5 lg:flex-row lg:justify-between items-center px-10 pt-10 pb-4">
      <h3 className="font-bold text-base lg:text-xl 2xl:text-2xl 3xl:text-[28px] capitalize">
        flash sale{" "}
      </h3>
      <div className="flex flex-row justify-center">
        <span className="hidden lg:block lg:text-lg 2xl:text-xl 3xl:text-2xl lg:font-bold text-black-primary mt-2 2xl:mt-4 lg:mr-4 capitalize">
          ends in
        </span>
        <TimeCountdown date={"2023-10-08T15:27:32.635Z"} />
      </div>
    </div>
  );
};

export default Title;
