import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const Coupon = () => {
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState(null);
  const [open, setOpen] = useState(false);
  const [oldCoupons, setOldCoupons] = useState([]);

  useEffect(() => {
    const storedCouponCodesJSON = localStorage.getItem("COUPON_CODES");
    const storedCouponCodes = storedCouponCodesJSON
      ? JSON.parse(storedCouponCodesJSON)
      : [];
    setOldCoupons(storedCouponCodes);
  }, []);

  const handleCouponSelect = (coupon) => {
    setCoupon(coupon);
    setOpen(!open);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setCoupon(value);
  };
  const applyCoupon = () => {
    dispatch({ type: "APPLY_COUPON", payload: coupon });
  };
  const { t, i18n } = useTranslation("translation");
  return (
    <div className="indexstyle-sc-60raj9-0 cqTUDm checkout-coupon-input">
      <div className="indexstyle-sc-172cmbz-0 kmQwZW">
        <div className="pay-title flex justify-center">
          <div className="pay-title-left">
            <p className="pay-name">
              {t("user.apply")} {t("user.coupon")}
            </p>
          </div>
          <div className="pay-title-right" />
        </div>
        <div className="pay-panpel-content">
          <div className="indexstyle-i4qewv-0 ksrDqv coupon-content new-coupon-content">
            <div className="slid-cart-coupon">
              <div className="select-input-info-wrapper">
                <div className="indexstyle-sc-19wu2cr-0 dcOGst">
                  <div className="select-input-wrapper" title="">
                    <div className="select-wrapper">
                      <input
                        name="coupon"
                        value={coupon}
                        onChange={handleChange}
                        className=" input-wrapper"
                        placeholder={t("user.enter_or_select_coupon_code")}
                        defaultValue=""
                      />
                      <div className="hidden">
                        <div
                          onClick={() => setOpen(!open)}
                          className="cursor-pointer icon-box"
                        >
                          <svg
                            className="icon arrow-down-coupon"
                            height={200}
                            version="1.1"
                            viewBox="0 0 1024 1024"
                            width={200}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M140.458667 358.997333L512 730.538667l371.541333-371.541334-60.416-60.330666L512 609.877333 200.874667 298.666667z"
                              fill="#9999a4"
                            />
                          </svg>
                        </div>
                        <div
                          className={`${
                            open ? "block" : "hidden "
                          } flex justify-center select-info-wrapper`}
                        >
                          {oldCoupons.length > 0 ? (
                            oldCoupons.map((coupon) => (
                              <li
                                className="w-full cursor-pointer text-center"
                                key={coupon}
                                onClick={() => handleCouponSelect(coupon)}
                              >
                                <div className="w-full  padding-8 no-code">
                                  {coupon}
                                </div>
                              </li>
                            ))
                          ) : (
                            <div className="padding-8 no-code">
                              {t("user.No_codes_available")}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                disabled={!coupon}
                onClick={() => applyCoupon()}
                className={`${coupon ? "" : "bg-gray-200 " } indexstyle-sc-147lzxr-0 cpfaAp`}
              >
                <div className="children-container">{t("user.apply")}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coupon;
