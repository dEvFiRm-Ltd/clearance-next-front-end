import Link from "next/link";
import React, { FC } from "react";
import FooterPart from "../common/FooterPart";
import Image from "next/image";

const Footer = () => {
  const footerOne = [
    {
      heading: "COMPANY INFO",
      title: "About Us",
      url: "",
    },
    {
      heading: "",
      title: "Intellectual Property Rights",
      url: "",
    },
    {
      heading: "",
      title: "Privacy Policy",
      url: "",
    },
    {
      heading: "",
      title: "Terms",
      url: "",
    },
    {
      heading: "",
      title: "Sitemap",
      url: "",
    },
    {
      heading: "",
      title: "B2B Partners",
      url: "",
    },
    {
      heading: "",
      title: "Sustainability",
      url: "",
    },
  ];
  const footerTwo = [
    {
      heading: "HELP & SUPPORT",
      title: "Shipping & Delivery",
      url: "",
    },
    {
      heading: "",
      title: "Return Policy",
      url: "",
    },
    {
      heading: "",
      title: "Tracking Order",
      url: "",
    },
    {
      heading: "",
      title: "Tracking Order",
      url: "",
    },
    {
      heading: "",
      title: "Pre Order Guidance",
      url: "",
    },
    {
      heading: "",
      title: "About Wallet",
      url: "",
    },
    {
      heading: "",
      title: "Influencer Program",
      url: "",
    },
    {
      heading: "",
      title: "Affiliate Program",
      url: "",
    },
  ];
  const footerThree = [
    {
      heading: "CUSTOMER SERVICE",
      title: "Customer Reviews",
      url: "",
    },
    {
      heading: "",
      title: "Contact Us",
      url: "",
    },
    {
      heading: "",
      title: "How To Choose Your Size",
      url: "",
    },
    {
      heading: "",
      title: "FAQs",
      url: "",
    },
  ];
  const iconCard = [
    {
      icon: "fa-brands fa-cc-paypal",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-visa text-[#232E75]",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-paypal",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-visa text-[#232E75]",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-paypal",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-visa text-[#232E75]",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-paypal",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-visa text-[#232E75]",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-paypal",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-visa text-[#232E75]",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-paypal",
      url: "",
    },
    {
      icon: "fa-brands fa-cc-visa text-[#232E75]",
      url: "",
    },
  ];
  return (
    <div className="bg-[#F2F2F3] py-10 xl:px-5 px-3 3xl:px-0">
      <div className="container">
        <div className=" flex flex-row flex-wrap justify-between gap-y-5">
          <div className="flex flex-col">
            {footerOne.map((item: any, i: number) => (
              <FooterPart
                key={i}
                heading={item.heading}
                title={item.title}
                url={item.url}
              />
            ))}
          </div>
          <div className="flex flex-col">
            {footerTwo.map((item: any, i: number) => (
              <FooterPart
                key={i}
                heading={item.heading}
                title={item.title}
                url={item.url}
              />
            ))}
          </div>
          <div className="flex flex-col">
            {footerThree.map((item: any, i: number) => (
              <FooterPart
                key={i}
                heading={item.heading}
                title={item.title}
                url={item.url}
              />
            ))}
          </div>
          <div className="w-[340px] sm:w-[445px]">
            <p className="text-lg leading-7 font-bold text-[#000000] capitalize mb-5">
              News letter
            </p>
            <p className="text-sm text-[#000000] font-normal leading-5">
              Subscribe to get exclusive 10% OFF. And receive product launches,
              special offers and company news via email.
            </p>
            {/* subscribe here  */}

            <div className="my-4 flex flex-row w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full pl-3 outline-none py-3 border border-black rounded-l capitalize placeholder:text-sm placeholder:leading-5 text-sm leading-5"
              />
              <button className="text-white font-bold leading-6 text-base hover:bg-[#616368] bg-[#000000] px-5 py-[12px] rounded-r">
                Subscribe
              </button>
            </div>
            {/* Icons are here  */}
            <div className="flex flex-row flex-wrap gap-x-8 text-2xl text-[#000000]">
              <div>
                <i className="fa-brands fa-square-twitter hover:text-[#1DA1F2]"></i>
              </div>
              <div>
                <i className="fa-brands fa-facebook hover:text-[#1DA1F2]"></i>
              </div>
              <div>
                <i className="fa-brands fa-pinterest hover:text-[#1DA1F2]"></i>
              </div>
              <div>
                <i className="fa-brands fa-youtube hover:text-[#1DA1F2]"></i>
              </div>
              <div>
                <i className="fa-brands fa-square-instagram hover:text-[#1DA1F2]"></i>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-5 mt-[45px]">
              <div className="h-[105px] w-[105px] border-2 rounded-md overflow-hidden relative">
                <Image src="/qrcode.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <Link
                  href=""
                  className="w-[50px] h-[50px] bg-[#000000] rounded flex flex-col items-center justify-center"
                >
                  <i className="fa-brands fa-apple text-2xl text-[#FFFFFF]"></i>
                </Link>
                <Link
                  href=""
                  className="w-[50px] h-[50px] bg-[#000000] rounded flex flex-col items-center justify-center"
                >
                  <i className="fa-solid fa-robot text-2xl text-[#FFFFFF]"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-3 my-5 md:my-8 lg:my-10">
          {iconCard.map((item: any, i: number) => (
            <Link key={i} href={item.url}>
              <i className={`text-3xl ${item.icon}`}></i>
            </Link>
          ))}
        </div>
        <Link href="" className="flex flex-row justify-center">
          <p className="text-xs text-[#000000] leading-4 font-normal">
            © 2023 stylewe
          </p>
          <div className="h-9 w-[100px] rounded-md overflow-hidden relative">
            <Image src="/privacy.jpg" alt="" fill className="object-cover" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
