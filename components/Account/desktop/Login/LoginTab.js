import React, { useCallback, useEffect, useState } from 'react';
import Image from '@/helpers/image';
import { FacebookSvg, GoogleSvg, HotSearchSVG } from '@/components/svgs';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowSvgUp, SvgArrowLeft, SvgLoader } from '../../../svgs';
import { PiEyeThin, PiEyeClosed } from 'react-icons/pi';
import { useRouter } from 'next/navigation';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';

const LoginTab = ({ onForgotPassword, countries }) => {
  const [tab, setTab] = useState(0);
  const { t, i18n } = useTranslation('translation');
  const authLoading = useSelector((state) => state.AuthReducer?.authLoading);
  const verificationId = useSelector(
    (state) => state.AuthReducer?.verificationId
  );
  const useStyles = makeStyles((theme) => ({
    focused: {
      borderColor: 'gray',
    },
  }));

  const classes = useStyles();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: null,
    phoneNumber: null,
    dial: null,
    password: null,
    emailOrPhone: null,
  });
  const dispatch = useDispatch();
  const [isEmail, setIsEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const authToken = useSelector((state) => state.AuthReducer?.authToken);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // if (name === 'phoneNumber') {
    //     // validateInput(value)
    // }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };

  const validateInput = (value) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: value,
      }));
      setIsEmail(true);
    } else if (/^\d+$/.test(value)) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        phoneNumber: value,
      }));
      setIsEmail(false);
    } else {
    }
  };

  const validateFormData = (data) => {
    const errors = {};

    if (!data.phoneNumber && tab === 0) {
      errors.phoneNumber = 'Phone Number This Field is required.';
    }
    if (!data.email && tab === 1) {
      errors.email = 'Email This Field is required.';
    }
    if (!data.password) {
      errors.password = 'Password is required.';
    } else if (data.password.length < 8) {
      errors.password = 'Password should be at least 8 characters long.';
    }
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch({
        type: 'LOGIN',
        payload: {
          phoneNumber: `${formData.dial}${formData.phoneNumber}`,
          email: formData.email,
          password: formData.password,
          isEmail: tab !== 0,
        },
      });
    }
  };

  useEffect(() => {
    if (authToken) {
      router.push('/');
    }
  }, [authToken]);
  const getPhoneNumber = useCallback(
    (phone) => {
      // console.log(phone, "phone");
      const formattedPhoneNumber = phone?.startsWith('00')
        ? phone?.substring(2)
        : phone;
      const phoneCodeToSearch = formattedPhoneNumber?.substring(0, 3);

      // console.log(phoneCodeToSearch, "phoneCodeToSearch");
      const foundCountry = countries.find(
        (country) => country?.phonecode === parseInt(phoneCodeToSearch)
      );
      const phoneNumberWithoutCode = formattedPhoneNumber?.replace(
        foundCountry?.phonecode,
        ''
      );
      // console.log('Found Country:', foundCountry);
      // console.log('Phone Number:', phoneNumberWithoutCode);
      setFormData({
        ...formData,
        dial: foundCountry?.phonecode,
      });
      return phoneNumberWithoutCode;
    },
    [countries]
  );
  const [customerInfo, setCustomerInfo] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const info = JSON.parse(localStorage.getItem('CUSTOMER_INFO_STORAGE'));
      if (info?.customerInfo && info?.customerInfo.customer_info) {
        setCustomerInfo(info?.customerInfo.customer_info);
      }
      if (info?.customerInfo && info?.customerInfo.customer_info) {
        setCustomerInfo(info?.customerInfo.customer_info);
      }
    }
  }, []);
  useEffect(() => {
    console.log('111');
    if (!formData?.dial && customerInfo?.country_dial_code) {
      setFormData({
        ...formData,
        dial: customerInfo?.country_dial_code,
      });
    }
    if (!formData?.phoneNumber && customerInfo?.phone !== '0') {
      setFormData({
        ...formData,
        phoneNumber: getPhoneNumber(customerInfo?.phone),
      });
    }
    if (!formData?.email && !customerInfo?.email?.includes('@guest')) {
      setFormData({
        ...formData,
        email: customerInfo?.email,
      });
    }
  }, [countries, customerInfo]);
  useEffect(() => {
    // console.log(customerInfo, "customerInfo")
    // console.log(countries, "countries")
  }, [customerInfo, countries]);
  return (
    <>
      <p className="flex gap-x-10 justify-center p-5">
        <span
          onClick={() => setTab(0)}
          className={`text-lg  font-[500] cursor-pointer  ${
            tab === 0
              ? 'active border border-l-0 border-r-0 border-t-0 border-b-[1px] border-b-[#000]'
              : ''
          }`}
        >
          {t('user.phone_number')}
        </span>
        <span
          onClick={() => setTab(1)}
          className={`text-lg font-[500] cursor-pointer  ${
            tab === 1
              ? 'active border border-l-0 border-r-0 border-t-0 border-b-[1px] border-b-[#000]'
              : ''
          }`}
        >
          {t('user.email')}
        </span>
      </p>
      <li className="w-full flex items-center justify-center">
        <form
          className="indexstyle-sc-1ta56kz-0 fnEqht"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="p-4 register-header flex flex-row items-center justify-between">
              <h1
                // onClick={onSwitchToMain}
                className="cursor-pointer register-title font-[600] text-lg"
              >
                {/*<SvgArrowLeft />*/}
              </h1>
              <h1 className="login-title font-[600] text-lg">
                {/*{t("user.login")}*/}
              </h1>
              <h1 className="login-title font-[600] text-lg"></h1>
            </div>
          </div>
          <div className={` ${tab === 0 ? ' ' : 'hidden'} p-4`}>
            <label
              id="phoneNumber"
              className={` indexstyle-sc-1p4nwz9-0 fSxngv flex flex-col w-full iIBTwB-first`}
            >
              <div className="flex items-center">
                <select
                  name="dial"
                  // value={formData?.dial}
                  defaultValue={formData?.dial || countries[0]?.phonecode}
                  onChange={handleChange}
                  className="appearance-none h-full bg-gray-50 border-r-0 w-[20%] border border-gray-300 rounded-l rounded-r-none py-2 px-4 leading-tight focus:outline-none"
                >
                  {countries.map((country, i) => {
                    return (
                      country.isAccess && (
                        <option
                          defaultChecked={i === 0}
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
                  type="number"
                  autoComplete="on"
                  name="phoneNumber"
                  onChange={handleChange}
                  defaultValue={formData.phoneNumber}
                  // value={formData.phoneNumber}
                  placeholder="Enter your phone number"
                  className="w-[80%] rounded-r rounded-l-none border border-l-0 border-gray-300 py-2 px-4 leading-tight focus:outline-none"
                />
              </div>
              {/* Display any errors related to the phone number input */}
              {errors.phoneNumber && (
                <small className="my-1 w-full bg-red-200">
                  {errors.phoneNumber}
                </small>
              )}
            </label>
          </div>
          <div className={` ${tab === 1 ? ' ' : 'hidden'} p-4`}>
            <label
              id="email"
              className={` indexstyle-sc-1p4nwz9-0 fSxngv flex flex-col w-full iIBTwB-first`}
            >
              <div className="flex items-center">
                <input
                  type="email"
                  autoComplete="on"
                  name="email"
                  onChange={handleChange}
                  defaultValue={formData.email}
                  // value={formData.email}
                  placeholder="Enter your Email"
                  className="w-[100%] rounded-r rounded-l-none border border-gray-300 py-2 px-4 leading-tight focus:outline-none"
                />
              </div>
              {/* Display any errors related to the phone number input */}
              {errors.email && (
                <small className="my-1 w-full bg-red-200">{errors.email}</small>
              )}
            </label>
          </div>
          <div className="p-4">
            <label
              id="password"
              placeholder={t('user.password')}
              className="indexstyle-sc-1p4nwz9-0 erPdbt  iIBTwB-password"
            >
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="on"
                name="password"
                onChange={handleChange}
                placeholder={t('user.password')}
                required=""
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
          <p
            onClick={onForgotPassword}
            className="cursor-pointer underline hover:font-[700] p-4 forgot-password"
          >
            {t('user.forgot_password')}
          </p>
          <div className="p-4">
            <button
              disabled={authLoading}
              className={`
              ${
                authLoading ? 'cursor-not-allowed ' : ' cursor-pointer'
              } w-full min-h-[48px] hover:opacity-[0.8] transition-opacity tracking-wide uppercase transition-duration-1000 leading-4 pr-[9px] font-[600] flex items-center justify-center text-lg p-4 bg-[rgb(49,53,60)] text-[var(--c-gray-rgb255255)]
            `}
              type="submit"
            >
              {authLoading ? (
                <p className=" flex-grow-0 flex-shrink-0 text-lg font-bold">
                  <SvgLoader />
                </p>
              ) : (
                t('user.login')
              )}
            </button>
          </div>
        </form>
      </li>{' '}
    </>
  );
};
export default LoginTab;
