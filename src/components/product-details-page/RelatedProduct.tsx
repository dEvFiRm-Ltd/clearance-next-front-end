import React, { useState } from 'react'
import FlashSaleCard from '../common/FlashSaleCard'
import { flashSaleCardProps } from '@/utils/type'
import { relatedProductData } from '@/static'
import CartModal from '../modal/CartModal'

const RelatedProduct = () => {
    const [modal, setModal] = useState(false);
  return (
    <section className="py-16 w-full bg-white">
    <div className="mx-auto w-[1200px]">
      <h3 className="text-xl font-bold text-black-primary text-center mb-8">
        Related Product{" "}
      </h3>
      <div className="flex flex-row justify-start gap-5 flex-wrap">
        {relatedProductData.map((item: flashSaleCardProps, id: number) => (
          <FlashSaleCard
            key={id}
            img={item.img}
            text={item.text}
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
      <CartModal closeStateCb={() => setModal(false)} viewState={modal} />
    </div>
  </section>
  )
}

export default RelatedProduct