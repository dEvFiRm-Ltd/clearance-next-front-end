import Link from "next/link";
import React from "react";

const RelatedSearches = () => {
  const searches = [
    {
      title: "floral wrap dress long",
      url: "",
    },
    {
      title: "front wrap maxi dress",
      url: "",
    },
    {
      title: "iconic wrap dress",
      url: "",
    },
    {
      title: "dress with wrap skirt",
      url: "",
    },
    {
      title: "famous wrap dress",
      url: "",
    },
    {
      title: "cotton midi wrap dress",
      url: "",
    },
    {
      title: "curvy wrap dress",
      url: "",
    },
    {
      title: "dolman wrap dress",
      url: "",
    },
  ];
  return (
    <div className="container mb-12">
      <p className="text-xl leading-8 font-bold text-[#000000] capitalize text-center mb-[23px]">
        Related Searches
      </p>
      <div className="flex flex-row">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="flex flex-row gap-x-5">
          {searches.map((item: any, i: number) => (
            <div key={i} className="">
              <Link href={item.url} className="p-4 rounded-full bg-[#F2F2F3]">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default RelatedSearches;
