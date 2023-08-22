import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Coupon from "./Coupon";

const ShoppingBag = ({paymentType}) => {
  const { t, i18n } = useTranslation("translation");
  const shippingCart = useSelector((store) => store.CartReducer.shippingCart);
  return (
    <div className="indexstyle-sc-7b8xmr-0 exaipq">
      <div className="indexstyle-sc-172cmbz-0 kmQwZW">
        <div className="pay-title">
          <div className="pay-title-left">
            <p className="pay-name">
              {t("user.shipping_bag")} {t("user.total")}
            </p>
          </div>
          <div className="pay-title-right" />
        </div>
        <div className="pay-panpel-content">
          <div className="price-info">
            <div className="total-info-box">
              <p className="total-info-item">
                <span className="title">{t("user.sub_total")}：</span>
                <span className="price notranslate">
                  {shippingCart?.sub_total_formated}
                </span>
              </p>
              <p className="total-info-item">
                <span className="title">{t("user.shipping_cost")} ：</span>
                <span className="price notranslate">
                  {shippingCart?.total_shipping_cost_formated}
                </span>
              </p>
              <p className="total-info-item discount-price">
                <span className="title">{t("user.discount")}：</span>
                <span className="price notranslate">
                  {shippingCart?.total_discount_on_product_formated}
                </span>
              </p>
              <p className="total-info-item discount-price">
                <span className="title">
                  {t("user.discountt")} {t("user.couponn")}
                </span>
                <span className="price notranslate">
                  {shippingCart?.coupon_discount_formated}
                </span>
              </p>
              {/*<p className="total-info-item discount-price">*/}
              {/*  <span className="title">Shipping：</span>*/}
              {/*  <span className="price notranslate">*/}
              {/*    Calculated at next step*/}
              {/*  </span>*/}
              {/*</p>*/}
              <p className="total-info-item total-active">
                <span className="title">{t("user.total")}：</span>
                <span className="price notranslate">
                  {paymentType === "COD" ? shippingCart?.total_cash_formated : shippingCart?.total_formated}
                </span>
              </p>
            </div>
            <div className="total-save-prcie">
              <span className="total-save-img" />
              <p className="total-save-txt">{t("user.save")}</p>
              <p>
                <span className="price">
                  {shippingCart?.total_discount_on_product}
                </span>
                {t("user.for_you")}
              </p>
            </div>
            {/*<div className="flash-sale-checkout-tip">*/}
            {/*  The stock of flash deals is limited, and the final discounts on*/}
            {/*  the stock of goods actually paid shall prevail*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>

  );
};
export default ShoppingBag;
