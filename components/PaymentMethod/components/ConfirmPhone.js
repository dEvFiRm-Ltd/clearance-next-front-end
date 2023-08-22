import Header from "../desktop/Header";
import OTP from "../../Account/desktop/Login/OTP";
import PhoneInput from "../../Account/desktop/Login/PhoneInput";
import ForgotPassword from "../../Account/desktop/Login/ForgotPassword";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ConfirmPhone = ({ customerInfo }) => {
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.AuthReducer?.idToken);
  const [step, setStep] = useState("Phone");
  const [data, setData] = useState({
    phoneNumber: null,
  });
  const [countries, setCountries] = useState([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const info = JSON.parse(localStorage.getItem('CUSTOMER_INFO_STORAGE'))
      // console.log(info);
      if (info?.customerInfo && info?.customerInfo?.starting_setting && info?.customerInfo?.starting_setting?.default_country_dial_code) {
        setCountries(
          info?.customerInfo?.starting_setting?.countries
        )
      }
    }
  }, [])
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const onNextOTP = () => {
    setStep("OTP");
  };

  const onNextRegister = () => {
    dispatch({
      type: "VERIFY_GUEST",
      payload: { idToken, data },
    });
  };
  const onSwitchToMain = () => {
    // console.log("onSwitchToMain");
    dispatch({ type: "RESET_AUTH_REDUCER" });
    setData({
      phoneNumber: null,
    });
    setStep("Phone");
    setIsWhatsapp(false);
  };
  useEffect(() => {
    onSwitchToMain();
  }, []);
  return (
    <div className="layout-container">
      <div className="indexstyle-sc-188xtxu-0 hqtAzk my-cart-wrapper w-full bg-gray-50">
        <div className="layout-container flex items-center justify-center h-[100vh] pb-[200px]">
          <div className=" indexstyle-sc-1uk1vtd-0 gRmITN h-full flex items-center justify-center">
            <div className="flex w-full items-center justify-center space-x-10">
              {step === "Phone" && (
                <PhoneInput
                  countries={countries}
                  customerInfo={customerInfo}
                  onNextOTP={() => onNextOTP()}
                  setIsWhatsapp={(isWhatsapp) => setIsWhatsapp(isWhatsapp)}
                  onSwitchToMain={onSwitchToMain}
                  setData={(data) => setData(data)}
                />
              )}
              {step === "OTP" && (
                <OTP
                  onNextRegister={() => onNextRegister()}
                  onSwitchToMain={onSwitchToMain}
                  data={data}
                  isWhatsapp={isWhatsapp}
                  customerInfo={customerInfo}
                  isResetPass={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmPhone;
