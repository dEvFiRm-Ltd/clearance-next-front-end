import React, { useEffect, useRef, useState } from "react";
import Offer from "./Offer";
import Items from "./Items";
import ButtonCheckout from "./ButtonCheckout";
import AlsoLike from "./AlsoLike";
import { useDispatch, useSelector } from "react-redux";
const ShowItemsInCart = ({ items, shippingCart }) => {
  const [recentlyProduct, setRecentlyProduct] = useState([]);
  const loading = useSelector((state) => state?.ProductReducer?.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRecentlyProduct = JSON.parse(
        sessionStorage.getItem("RECENTLY_PRODUCT")
      );
      if (storedRecentlyProduct) {
        setRecentlyProduct(storedRecentlyProduct);
      }
    }
  }, [loading]);
  const [itemsInCart, setItemsInCart] = useState([]);
  useEffect(() => {
    if (shippingCart) {
      setItemsInCart(shippingCart?.cart);
    }
  }, [shippingCart, dispatch]);

  const [total, setTotal] = useState("");
  const [selected, setSelected] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [saved, setSaved] = useState("");
  useEffect(() => {
    // console.log(selected, "selected");
  }, [selected]);
  return (
    <>
      <div
        style={{
          flex: "1 1 auto",
        }}
        className="container h-full overflow-auto w-[90%]"
      >
        <div className="flex flex-col relative justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2 bg-[#f2f2f3]">
          <Offer />
          <div className="slider-cart-item bg-white w-full pt-[16px] relative">
            {items?.length > 0 && (
              <Items
                setSelected={(selected) => setSelected(selected)}
                setTotal={(total) => setTotal(total)}
                items={items}
                selectAll={selectAll}
                shippingCart={shippingCart}
                setSaved={(saved) => setSaved(saved)}
              />
            )}
          </div>
        </div>
        <AlsoLike recentlyProduct={recentlyProduct} itemsInCart={itemsInCart} />
      </div>
      <ButtonCheckout
        items={items}
        selectAll={selectAll}
        setSelectAll={(selectAll) => setSelectAll(selectAll)}
        total={total}
        saved={saved}
        shippingCart={shippingCart}
        selected={selected}
      />
    </>
  );
};
export default ShowItemsInCart;
