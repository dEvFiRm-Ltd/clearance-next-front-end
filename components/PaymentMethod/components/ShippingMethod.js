import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const ShippingMethod = ({ setOrderNote }) => {
  const { t, i18n } = useTranslation("translation");
  const dispatch = useDispatch();
  function handleNote(e) {
    const note = e.target.value;
    if (note) {
      dispatch({ type: "SET_ORDER_NOTE", payload: note });
      setOrderNote(note);
    }
  }

  return (
    <div className="indexstyle-trkfea-0 iKbZHG">
      <div className="indexstyle-sc-172cmbz-0 kmQwZW">
        <div className="pay-title">
          <div className="pay-title-left">
            <span className="pay-panpal-step notranslate">2</span>
            <p className="pay-name">{t("user.order_note")}</p>
          </div>
          <div className="pay-title-right" />
        </div>
        <label className="indexstyle-okpc1p-0 feJXxt p-4 show-clear">
          <div className="input-warrper">
            <input
              onMouseLeave={handleNote}
              className=" p-8"
              name="note"
              type="text"
              placeholder={t("user.enter_order_note")}
            />
          </div>
        </label>
      </div>
    </div>
  );
};
export default ShippingMethod;
