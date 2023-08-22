import LoginMain from './main';
import React, { useEffect, useState } from 'react';
import OTP from './OTP';
import SignupTab from './SignupTab';
import { useRouter } from 'next/navigation';
import ForgotPassword from './ForgotPassword';
import { useDispatch, useSelector } from 'react-redux';
import ResetPassword from './ResetPassword';
import store from '../../../../store';

const IndexRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.AuthReducer?.authToken);
  const [step, setStep] = useState('Main');
  const [isResetPass, setIsResetPass] = useState(false);
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState({
    email: null,
    phoneNumber: null,
    firstName: null,
    password: null,
    confirmPassword: null,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const info = JSON.parse(localStorage.getItem('CUSTOMER_INFO_STORAGE'));
      if (
        info?.customerInfo &&
        info?.customerInfo?.starting_setting &&
        info?.customerInfo?.starting_setting?.default_country_dial_code
      ) {
        const defaultDialCode =
          info?.customerInfo?.starting_setting?.default_country_dial_code;
        setCustomerInfo(defaultDialCode);
        setCountries(info?.customerInfo?.starting_setting?.countries);
      }
    }
  }, []);
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('CUSTOMER_INFO_STORAGE'))

    if (
      info?.customerInfo &&
      info?.customerInfo?.starting_setting &&
      info?.customerInfo?.starting_setting?.default_country_dial_code
    ) {
      const defaultDialCode = info?.customerInfo?.starting_setting?.default_country_dial_code;
      setCustomerInfo(defaultDialCode);
      setCountries(info?.customerInfo?.starting_setting?.countries);
    }
    const unsubscribe = store.subscribe(() => {
      const updatedInfo = JSON.parse(
        localStorage.getItem('CUSTOMER_INFO_STORAGE')
      );
      if (
        updatedInfo?.customerInfo &&
        updatedInfo?.customerInfo?.starting_setting &&
        updatedInfo?.customerInfo?.starting_setting?.default_country_dial_code
      ) {
        const defaultDialCode =
          updatedInfo?.customerInfo?.starting_setting?.default_country_dial_code;
        setCustomerInfo(defaultDialCode);
        setCountries(updatedInfo?.customerInfo?.starting_setting?.countries);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    // console.log(customerInfo, 'customerInfo');
    // console.log(countries, 'countries');
  }, [customerInfo, countries]);
  useEffect(() => {
    if (step === 'Register') {
      // console.log("Register");
      router.push('/');
      dispatch({ type: 'RESET_AUTH_REDUCER' });
      dispatch({ type: 'CLOSE_MODAL_MOBILE' });
      // setStep("Main");
    }
    // console.log(step, "step");
  }, [step]);
  const onNextOTP = () => {
    setStep('OTP');
  };
  const onNextRegister = () => {
    if (isResetPass) {
      setStep('resetPassword');
    } else {
      setStep('Register');
    }
  };
  const onRegister = () => {
    setStep('Register');
    setIsResetPass(false);
  };
  const onForgotPassword = () => {
    setIsResetPass(true);
    setStep('ForgotPassword');
  };

  const onSwitchToMain = () => {
    // console.log("onSwitchToMain");
    dispatch({ type: 'RESET_AUTH_REDUCER' });
    setIsResetPass(false);
    setData({
      email: null,
      phoneNumber: null,
      firstName: null,
      password: null,
      confirmPassword: null,
    });
    setStep('Main');
    setIsWhatsapp(false);
  };
  useEffect(() => {
    onSwitchToMain();
  }, []);
  return (
    <div className="layout-container flex items-center justify-center h-full ">
      <div className=" indexstyle-sc-1uk1vtd-0 gRmITN h-full flex items-center justify-center">
        {step === 'Main' && (
          <LoginMain
            onNextOTP={() => onNextOTP()}
            setIsWhatsapp={(isWhatsapp) => setIsWhatsapp(isWhatsapp)}
            onNextRegister={() => onNextRegister()}
            onSwitchToMain={() => onSwitchToMain()}
            setData={(data) => setData(data)}
            data={data}
            countries={countries}
            customerInfo={customerInfo}
            onForgotPassword={onForgotPassword}
          />
        )}
        {step === 'OTP' && (
          <OTP
            onNextRegister={() => onNextRegister()}
            onSwitchToMain={onSwitchToMain}
            data={data}
            isWhatsapp={isWhatsapp}
            customerInfo={customerInfo}
            isResetPass={isResetPass}
          />
        )}
        {step === 'ForgotPassword' && (
          <ForgotPassword
            countries={countries}
            customerInfo={customerInfo}
            onNextOTP={() => onNextOTP()}
            setIsWhatsapp={(isWhatsapp) => setIsWhatsapp(isWhatsapp)}
            onSwitchToMain={onSwitchToMain}
            setData={(data) => setData(data)}
          />
        )}
        {step === 'resetPassword' && (
          <ResetPassword onSwitchToMain={onSwitchToMain} data={data} />
        )}
      </div>
    </div>
  );
};
export default IndexRegister;
