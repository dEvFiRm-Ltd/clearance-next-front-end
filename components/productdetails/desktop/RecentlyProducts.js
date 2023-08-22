import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../../Body/desktop/productItem";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import React, { useEffect, useState } from "react";

const RecentlyProduct = ({ recentlyProduct, productId, title }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // console.log(products, "products");
    // console.log(recentlyProduct, "recentlyProduct");
  }, [recentlyProduct, products]);
  SwiperCore.use([Navigation, Scrollbar, Pagination]);
  const swiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
  };
  useEffect(() => {
    const updatedArray = recentlyProduct.filter(
      (product) => product?.id !== productId
    );
    // console.log(updatedArray);
    setProducts(updatedArray);
  }, [recentlyProduct, productId]);
  return products?.length > 0 ? (
    <div className="">
      <div className="flex justify-center  items-center self-stretch flex-grow-0 flex-shrink-0 relative">
        <span className="font-[600] text-1xl text-center padding-8">
          {title}
        </span>
      </div>

      <Swiper className="flex justify-center items-center" {...swiperOptions}>
        {products?.map((product) => {
          if (product) {
            return (
              <SwiperSlide className="h-[110%] shadow-xl">
                <Product
                  product={product}
                  flashSale={product?.flash_deal_details}
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  ) : null;
};
export default RecentlyProduct;
