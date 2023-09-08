import React, { useState } from "react";
import FlashSaleCard from "../common/FlashSaleCard";
import CartModal from "../modal/CartModal";
import { productDetailsData } from "@/static";
import { flashSaleCardProps } from "@/utils/type";

const FrequentlyBuy = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="py-10 bg-[#F2F2F3]">
      <div className="container mx-auto">
        <h3 className="text-xl font-bold text-black-primary text-center">
          Frequently bought together{" "}
        </h3>
        <div className="flex justify-center mt-8">
          <FlashSaleCard
            img={
              "https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-06-06-647e58925291c.avif"
            }
            text={"Long sleeve crew neck loose leo...."}
            salePrice={"71.38"}
            price={"80.28"}
            discount={"20"}
            actionCb={() => setModal(!modal)}
            groupClass="w-40 3xl:w-[185px]"
            imgClass="!h-[246px]"
            btnClass="!w-40"
            btnText="Black,S"
            check={true}
            />
            <span className="text-[40px] font-normal mx-6 mt-20">+</span>
          <div className="flex justify-center items-start flex-wrap gap-5 pl-2.5">
          {productDetailsData.map((item: flashSaleCardProps, id: number) => (
            <FlashSaleCard
              key={id}
              img={item.img}
              text={item.text}
              salePrice={item.salePrice}
              price={item.price}
              discount={item.discount}
              actionCb={() => setModal(!modal)}
              groupClass="w-40 3xl:w-[185px] "
              imgClass="!h-[246px]"
              btnClass="!w-40"
              check={true}
            />
          ))}
          </div>
        </div>
      </div>
      <CartModal closeStateCb={() => setModal(false)} viewState={modal} />
    </section>
  );
};

export default FrequentlyBuy;
