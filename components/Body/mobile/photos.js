import Link from "@/helpers/Link";
import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
const Photos = ({ section }) => {
  return (
    <>
      <OwlCarousel items={2} dots={false} nav={false} navElement="div">
        {section.photos.map((photo, index) => {
          return (
            <div key={index}>
              <Link href={photo.link_to}>
                <a className="cursor-pointer">
                  <img
                    src={photo.file_path}
                    alt="热销新品2坑"
                    className="w-full"
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </OwlCarousel>
    </>
  );
};

export default Photos;
