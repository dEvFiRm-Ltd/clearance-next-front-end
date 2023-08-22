import React, { useEffect, useState } from "react";
import ContactInformation from "../components/ContactInformation";
import ShippingMethod from "../components/ShippingMethod";
import PaymentType from "../components/PaymentType";
import Coupon from "../components/Coupon";
import ShoppingBag from "../components/ShoppingBag";
import { useDispatch, useSelector } from "react-redux";
import { SvgLoader } from "../../svgs";
import { useTranslation } from "react-i18next";

const Body = ({ shippingCart, itemsInCart }) => {
  const dispatch = useDispatch();
  const [paymentType, setPaymentType] = useState(null);
  const [addressId, setAddressId] = useState(null);
  const [orderNote, setOrderNote] = useState(null);
  const [walletSelected, setWalletSelected] = useState(false);
  const checkoutLoading = useSelector(
    (state) => state.CheckoutReducer?.checkoutLoading
  );

  const handleSubmit = () => {
    if (paymentType === "COD") {
      dispatch({
        type: "PLACE_ORDER",
        payload: { paymentType, orderNote, addressId, type: "COD" },
      });
    }
    if (paymentType === "Wallet") {
      dispatch({
        type: "PLACE_ORDER",
        payload: { paymentType, orderNote, addressId, type: "Wallet" },
      });
    }
    else if(paymentType === "Telr"){
      dispatch({
        type: "PLACE_ORDER",
        payload: { paymentType, orderNote, addressId, type: "Telr" },
      });
    }
    else if(paymentType === "Postpay"){
      dispatch({
        type: "PLACE_ORDER",
        payload: { paymentType, orderNote, addressId, type: "postpay" },
      });
    }
  };
  const { t, i18n } = useTranslation("translation");
  return (
    <section className="payment-method-info w-full">
      <div className="payment-method-info-left w-[50%]">
        <ContactInformation
          setAddressId={(addressId) => setAddressId(addressId)}
        />
        <ShippingMethod setOrderNote={(orderNote) => setOrderNote(orderNote)} />
        <PaymentType
          setWalletSelected={(walletSelected) => setWalletSelected(walletSelected)}
          shippingCart={shippingCart}
          setPaymentType={(paymentType) => setPaymentType(paymentType)}
        />
        <div className={`${paymentType && addressId ? "" : "hidden"} p-5`}>
          <button
            onClick={(e) => handleSubmit(e)}
            className={`
              ${
                checkoutLoading ? "cursor-not-allowed " : " cursor-pointer"
              } w-full min-h-[48px] hover:opacity-[0.8] transition-opacity tracking-wide uppercase transition-duration-1000 leading-4 pr-[9px] font-[600] flex items-center justify-center text-lg p-4 bg-[rgb(49,53,60)] text-[var(--c-gray-rgb255255)]
            `}
            type="submit"
            disabled={checkoutLoading}
          >
            {checkoutLoading ? (
              <p className=" flex-grow-0 flex-shrink-0 text-lg font-bold">
                <SvgLoader />
              </p>
            ) : (
              t("user.confirm")
            )}
          </button>
        </div>
      </div>
      <div className="payment-method-info-right w-[50%]">
        {shippingCart && shippingCart?.coupon_discount > 0 ? null : <Coupon />}
        <ShoppingBag paymentType={paymentType}/>
      </div>
    </section>
  );
};
export default Body;
