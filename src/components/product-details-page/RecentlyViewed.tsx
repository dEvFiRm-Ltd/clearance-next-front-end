import { recentlyBuyData } from "@/static";
import React, { useState } from "react";
import FlashSaleCard from "../common/FlashSaleCard";
import { flashSaleCardProps } from "@/utils/type";
import CartModal from "../modal/CartModal";

const RecentlyViewed = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="py-16 w-full bg-white">
      <div className="mx-auto w-[1200px]">
        <h3 className="text-xl font-bold text-black-primary text-center mb-3">
          Recently Viewed{" "}
        </h3>
        <div className="flex flex-row justify-start gap-5 p-3">
          {recentlyBuyData.map((item: flashSaleCardProps, id: number) => (
            <FlashSaleCard
              key={id}
              img={item.img}
              text={item.text}
              salePrice={item.salePrice}
              discount={item.discount}
              review={item.review}
              colorImg={item.colorImg}
              actionCb={() => setModal(!modal)}
              groupClass="w-40 3xl:w-[185px] "
              imgClass="!h-[246px]"
              btnClass="!w-40"
            />
          ))}
        </div>
        <CartModal closeStateCb={() => setModal(false)} viewState={modal} />
      </div>
    </section>
  );
};

export default RecentlyViewed;
