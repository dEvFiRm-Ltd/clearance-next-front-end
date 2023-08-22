import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../../../LoadingComponent/mobile';
import { ArrowSvgUp, SvgLoader, WhatsappSvg } from '../../../svgs';
import { PiEyeClosed, PiEyeThin } from 'react-icons/pi';
import { RiMessage2Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t, i18n } = useTranslation('translation');

  const syncInfo = useSelector((state) => state.AuthReducer.syncInfo);
  const dispatch = useDispatch();
  const validateNumber = useSelector(
    (state) => state.AuthReducer?.validateNumber
  );
  const validateEmail = useSelector(
    (state) => state.AuthReducer?.validateEmail
  );
  const authLoading = useSelector((state) => state.AuthReducer?.authLoading)

  const checkoutLoading = useSelector(
    (state) => state.CheckoutReducer?.checkoutLoading
  );
  const verificationId = useSelector(
    (state) => state.AuthReducer?.verificationId
  );
  const [formData, setFormData] = useState({
    email: null,
    phoneNumber: null,
    firstName: null,
    password: null,
    confirmPassword: null,
    dial: null,
  });
  const [errors, setErrors] = useState({});
  const [customerInfo, setCustomerInfo] = useState(null);
  const [countries, setCountries] = useState([]);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isWhatsappSMS, setIsWhatsappSMS] = useState({
    isWhatsapp: 1,
    isSMS: 1,
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const info = JSON.parse(localStorage.getItem('CUSTOMER_INFO_STORAGE'));
      if (info?.customerInfo && info?.customerInfo.customer_info) {
        setCustomerInfo(info?.customerInfo.customer_info);
      }
      if (
        info?.customerInfo &&
        info?.customerInfo?.starting_setting &&
        info?.customerInfo?.starting_setting?.countries
      ) {
        setCountries(info?.customerInfo?.starting_setting?.countries);
      }
    }
  }, [syncInfo]);
  const checkIfWhatsappOrSMS = (phoneCode) => {
    const country = countries.find(
      (item) => item.phonecode === parseInt(phoneCode.replace('+', ''))
    );
    if (country) {
      setIsWhatsappSMS({
        isWhatsapp: country.otp_by_whatsapp,
        isSMS: country.otp_by_sms,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'dial') {
      // checkIfWhatsappOrSMS(value);
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
      setErrors({
        ...errors,
        [name]: null,
      });
    }
    if (name === 'phoneNumber') {
      // isValidPhoneNumber(value);
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
      setErrors({
        ...errors,
        [name]: null,
      });
    } else {
      if (name === 'email') {
        // isValidEmail(value);
      }
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsWhatsapp(whatsapp);
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (formData?.password) {
        dispatch({
          type: 'UPDATE_PROFILE',
          payload: {
            data: {
              phone: formData?.dial + formData?.phoneNumber,
              f_name: formData?.firstName,
              l_name: formData?.firstName,
              country_dial_code: formData?.dial,
              email: formData?.email ? formData?.email : customerInfo?.email,
              password: formData?.password,
            },
          },
        });
      } else {
        dispatch({
          type: 'UPDATE_PROFILE',
          payload: {
            data: {
              phone: formData?.dial + formData?.phoneNumber,
              f_name: formData?.firstName,
              l_name: formData?.firstName,
              country_dial_code: formData?.dial,
              email: formData?.email ? formData?.email : customerInfo?.email,
            },
          },
        });
      }
    }
  };

  const validateFormData = (data) => {
    const errors = {};

    if (!data.firstName) {
      errors.firstName = 'First Name is required.';
    }
    if (!data.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required.';
    }
    // else if (!isValidPhoneNumber(data.phoneNumber)) {
    //   errors.phoneNumber = "Phone Number Already Exists";
    // }

  else if (data.password && data.password.length < 8) {
      errors.password = 'Password should be at least 8 characters long.';
    } else if (data.password && data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }
    return errors;
  };

  const isValidEmail = async (email) => {
    if (email) {
      dispatch({
        type: 'CHECK_EMAIL',
        payload: { email: email },
      });
    }
    return new Promise((resolve) => {
      resolve(validateEmail);
    });
  };
  const isValidPhoneNumber = async (number) => {
    if (number.length > 5) {
      dispatch({
        type: 'CHECK_NUMBER',
        payload: { phoneNumber: `${formData.dial}${number}` },
      });
    }
    return new Promise((resolve) => {
      resolve(validateNumber);
    });
  };
  useEffect(() => {
    if (verificationId) {
      // setData(formData);
      // onNextOTP();
    }
  }, [verificationId]);
  useEffect(() => {
   console.log(checkoutLoading, "checkoutLoading")
   console.log(authLoading, "authLoading")
  }, [checkoutLoading, authLoading]);

  const getPhoneNumber= useCallback((phone) => {
    console.log(phone, "phone");
    const phoneI = phone?.replace("+", "")
    const formattedPhoneNumber = phoneI?.startsWith("00")
      ? phoneI?.substring(2)
      : phoneI;
    const phoneCodeToSearch = formattedPhoneNumber?.substring(0, 3);

    // console.log(phoneCodeToSearch, "phoneCodeToSearch");
    const foundCountry = countries.find(
      (country) => country?.phonecode === parseInt(phoneCodeToSearch)
    );
    const phoneNumberWithoutCode = formattedPhoneNumber?.replace(foundCountry?.phonecode, '');
    // console.log('Found Country:', foundCountry);
    // console.log('Phone Number:', phoneNumberWithoutCode);
    setFormData({
      ...formData,
      dial: foundCountry?.phonecode,
    });
    return phoneNumberWithoutCode;
  }, [countries])
  const getDialPhoneNumber= useCallback((phone) => {
    const phoneCodeToSearch = phone?.substring(0, 3);
    const foundCountry = countries.find(
      (country) => country?.phonecode === parseInt(phoneCodeToSearch)
    );

    return foundCountry?.phonecode;
  }, [countries])

  useEffect(() => {
    console.log(customerInfo?.country_dial_code, "dial")
    setFormData({
      ...formData,
      dial: customerInfo?.country_dial_code,
      firstName: customerInfo?.f_name,
      phoneNumber: customerInfo?.phone !== "0" ? getPhoneNumber(customerInfo?.phone) : null,
      email:  !customerInfo?.email?.includes("@guest") ? customerInfo?.email : null,
    });
  }, [ customerInfo, syncInfo]);

  return (
    <>
      {/*{checkoutLoading && <LoadingComponent />}*/}
      <h3 className="text-[rgb(49,53,60)] text-2xl font-semibold leading-[29px] mb-6 pb-4 border-b-2 border-b-[rgb(93,98,106)] border-solid">
        <span>Change Profile</span>
      </h3>
      <div className="layout-container">
        <form
          className="w-full indexstyle-sc-1ta56kz-0 fnEqht"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className=" p-4">
            <label
              id="firstName"
              placeholder={t('user.fname')}
              className="indexstyle-sc-1p4nwz9-0 fSxngv flex flex-col w-full iIBTwB-first"
            >
              <input
                autoComplete="on"
                name="firstName"
                placeholder={t('user.name')}
                required=""
                // value={formData.firstName}
                onChange={handleChange}
                defaultValue={customerInfo?.f_name}
                type="text"
              />
              {errors.firstName && (
                <small className="my-1 w-full bg-red-200">
                  {errors.firstName}
                </small>
              )}
            </label>
          </div>
          <div className=" p-4">
            <label
              id="email"
              placeholder={t('user.email')}
              className="indexstyle-sc-1p4nwz9-0 fSxngv flex flex-col w-full iIBTwB-email"
            >
              <input
                autoComplete="on"
                name="email"
                placeholder={t('user.email')}
                required=""
                type="email"
                value={formData?.email}
                defaultValue={formData?.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="my-1 w-full bg-red-200">{errors.email}</small>
              )}
            </label>
          </div>
          <div className=" p-4">
            <label
              id="number"
              placeholder={t('user.phone_number')}
              className="indexstyle-sc-1p4nwz9-0 fSxngv  flex flex-col w-full iIBTwB-phone"
            >
              <div className="flex items-center">
                <select
                  name="dial"
                  value={formData?.dial}
                  onChange={handleChange}
                  className="appearance-none h-full bg-gray-50 border-r-0 w-[20%] border border-gray-300 rounded-l rounded-r-none py-2 px-4 leading-tight focus:outline-none"
                >
                  {countries.length > 0 &&
                    countries.map((country, i) => {
                      return (
                        country.isAccess && (
                          <option
                            defaultChecked={
                              country ===
                              parseInt(customerInfo?.country_dial_code)
                            }
                            key={country.iso}
                            value={'+' + country.phonecode}
                          >
                            +{country.phonecode}
                          </option>
                        )
                      );
                    })}
                </select>
                <div className="absolute inset-y-0 right-[80%] flex items-center pointer-events-none">
                  <ArrowSvgUp rotate={180} />
                </div>
                <input
                  autoComplete="on"
                  name="phoneNumber"
                  placeholder={t('user.phone_number')}
                  required=""
                  type="number"
                  defaultValue={formData.phoneNumber}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-[80%] rounded-r rounded-l-none border border-l-0 border-gray-300 py-2 px-4 leading-tight focus:outline-none"
                />
              </div>
              {/*<div className="flex w-full h-full">*/}
              {/*  <span className="border text-lg text-[rgb(157,156,156)] border-l-1 border-t-1 border-b-1 border-r-0 border-[rgb(217,217,217)] p-[13px] w-20% bg-gray-100 disabled cursor-not-allowed">*/}
              {/*    {customerInfo && customerInfo}*/}
              {/*  </span>*/}
              {/*  <input*/}
              {/*    className="w-80% border-l-0"*/}
              {/*    autoComplete="on"*/}
              {/*    name="phoneNumber"*/}
              {/*    placeholder={t("user.phone_number")}*/}
              {/*    required=""*/}
              {/*    type="number"*/}
              {/*    value={formData.phoneNumber}*/}
              {/*    onChange={handleChange}*/}
              {/*  />*/}
              {/*</div>*/}
              {errors.phoneNumber && (
                <small className="my-1 w-full bg-red-200">
                  {errors.phoneNumber}
                </small>
              )}
            </label>
          </div>
          <div className=" p-4">
            <label
              id="password"
              placeholder={t('user.password')}
              className="indexstyle-sc-1p4nwz9-0 kEXvcw flex flex-col w-full iIBTwB-password"
            >
              <input
                autoComplete="on"
                name="password"
                placeholder={t('user.password')}
                required=""
                value={formData.password}
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
              />
              <div
                className="eye-icon absolute w-6 h-6 top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <PiEyeThin size={20} />
                ) : (
                  <PiEyeClosed size={20} />
                )}
              </div>
              {errors.password && (
                <small className="my-1 w-full bg-red-200">
                  {errors.password}
                </small>
              )}
            </label>
          </div>
          <div className=" p-4">
            <label
              id="confirmPassword"
              placeholder={t('user.reenter_new_password')}
              className="indexstyle-sc-1p4nwz9-0 hJWRSG flex flex-col w-full iIBTwB-confirm"
            >
              <input
                autoComplete="on"
                name="confirmPassword"
                placeholder={t('user.reenter_new_password')}
                required=""
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div
                className="eye-icon absolute w-6 h-6 top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <PiEyeThin size={20} />
                ) : (
                  <PiEyeClosed size={20} />
                )}
              </div>
              {errors.confirmPassword && (
                <small className="my-1 w-full bg-red-200">
                  {errors.confirmPassword}
                </small>
              )}
            </label>
          </div>
          <div className="p-2">
            <button
              onClick={(e) => handleSubmit(e)}
              className={` ${
                authLoading ? 'cursor-not-allowed ' : ' cursor-pointer'
              } w-full min-h-[48px] gap-x-2 hover:opacity-[0.8] transition-opacity tracking-wide uppercase transition-duration-1000 leading-4 pr-[40px] font-[600] flex items-center justify-center text-lg p-4 bg-[rgb(49,53,60)] text-[var(--c-gray-rgb255255)]
            `}
              type="submit"
              disabled={authLoading}
            >
              {authLoading || checkoutLoading ? (
                <p className=" flex-grow-0 flex-shrink-0 text-lg font-bold">
                  <SvgLoader />
                </p>
              ) : (
                t('user.update')
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Profile;
