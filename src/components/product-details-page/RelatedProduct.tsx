import React, { useState } from "react";
import FlashSaleCard from "../common/FlashSaleCard";
import { flashSaleCardProps } from "@/utils/type";
import { relatedProductData } from "@/static";
import CartModal from "../modal/CartModal";
import Button from "../base/Button";

const RelatedProduct = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="py-16 w-full bg-white">
      <div className="mx-auto w-[1200px] flex flex-col justify-start items-center gap-y-5">
        <h3 className="text-xl font-bold text-black-primary text-center mb-3">
          Related Product{" "}
        </h3>
        <div className="flex flex-row justify-start gap-5 flex-wrap">
          {relatedProductData.map((item: flashSaleCardProps, id: number) => (
            <FlashSaleCard
              key={id}
              img={item.img}
              text={item.text}
              text2={item.text2}
              salePrice={item.salePrice}
              discount={item.discount}
              review={item.review}
              colorImg={item.colorImg}
              actionCb={() => setModal(!modal)}
              groupClass="w-40 3xl:w-[220px] "
              imgClass="!h-[294px]"
              btnClass="!w-40"
            />
          ))}
        </div>
        <Button
          actionCb={() => {}}
          btnText="VIEW MORE"
          variant="primary"
          btnClass="hover:!opacity-90 !text-lg !font-bold !w-auto rounded"
        />
        <CartModal closeStateCb={() => setModal(false)} viewState={modal} />
      </div>
    </section>
  );
};

export default RelatedProduct;
