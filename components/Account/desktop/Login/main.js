import React, { useState } from "react";
import SignupTab from "./SignupTab";
import LoginTab from "./LoginTab.js";
import { useTranslation } from "react-i18next";
const LoginMain = ({
  onNextOTP,
  setIsWhatsapp,
  countries,
  setData,
  onForgotPassword,
  onSwitchToMain,
  customerInfo,
}) => {
  const [tab, setTab] = useState(0);
  const { t, i18n } = useTranslation("translation");

  return (
    <div className="w-[90%]">
      <p className="nav-tabs flex">
        <span
          onClick={() => setTab(0)}
          className={`nav-item font-[700] cursor-pointer  ${
            tab === 0 ? "active" : ""
          }`}
        >
          {t("user.login")}
        </span>
        <span
          onClick={() => setTab(1)}
          className={`nav-item font-[700] cursor-pointer  ${
            tab === 1 ? "active" : ""
          }`}
        >
          {t("user.register")}
        </span>
      </p>
      <ul className="login-register only-pc-show w-full">
        <div className={`w-full ${tab === 0 ? " " : "hidden"}`}>
          <LoginTab
              countries={countries}
            customerInfo={customerInfo}
            onForgotPassword={() => onForgotPassword()}
            onSwitchToMain={() => onSwitchToMain()}
          />
        </div>
        <div className={`w-full ${tab === 1 ? " " : "hidden"}`}>
          <SignupTab
              countries={countries}
            customerInfo={customerInfo}
            onNextOTP={() => onNextOTP()}
            setIsWhatsapp={(isWhatsapp) => setIsWhatsapp(isWhatsapp)}
            setData={(data) => setData(data)}
          />
        </div>
      </ul>
    </div>
  );
};
export default LoginMain;
