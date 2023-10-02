import React from "react";
import { TimeCountdown } from "./TimeCountdown";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Title = () => {
  const path = usePathname();
  const local = path.split("/")[1];
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center justify-start gap-y-5 items-center px-10 mx-auto container pt-5 lg:pb-4">
      <h3 className="font-bold text-base lg:text-xl 2xl:text-2xl 3xl:text-[28px] capitalize ">
        {local === "en" ? "flash sale" : "بيع مفاجئ"}
      </h3>
      <div className="flex flex-row justify-center">
        <span className="hidden lg:block lg:text-lg 2xl:text-xl 3xl:text-2xl lg:font-bold text-black-primary mt-2 2xl:mt-4 lg:mr-4 capitalize">
          {local === "en" ? " ends in" : "ينتهي في"}
        </span>
        <TimeCountdown date={"2023-10-08T15:27:32.635Z"} />
        <Link
          href={""}
          className="hidden bg-[#ffffff88] lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 rounded-full lg:flex justify-center items-center text-gray-800 "
        >
          <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Title;
