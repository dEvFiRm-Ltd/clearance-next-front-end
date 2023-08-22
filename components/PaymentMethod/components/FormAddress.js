import { ArrowSvgUp, SvgArrow, SvgLoader } from "../../svgs";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const FormAddress = () => {
  const { t, i18n } = useTranslation('translation');
  const dispatch = useDispatch();
  const checkoutLoading = useSelector(
    (state) => state.CheckoutReducer?.checkoutLoading
  );
  const [countries, setCountries] = useState([]);
  const [defaultCountry, setDefaultCountry] = useState(null);
  const [addressType, setAddressType] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: null,
    firstName: null,
    addressOne: null,
    addressTwo: null,
    addressType: null,
    city: null,
    countryId: null,
    postalCode: null,
    dial: countries?.length > 0 ? countries[0]?.phonecode : null,
  });

  const [customerInfo, setCustomerInfo] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const info = JSON.parse(localStorage.getItem('CUSTOMER_INFO_STORAGE'));
      if (info?.customerInfo && info?.customerInfo?.starting_setting) {
        setCountries(info?.customerInfo?.starting_setting?.countries);
        console?.log(
          info?.customerInfo?.starting_setting?.default_country,
          'info?.customerInfo?.starting_setting?.default_country'
        );
        setDefaultCountry(
          info?.customerInfo?.starting_setting?.default_country
        );
        setAddressType(info?.customerInfo?.starting_setting?.address_type);
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const info = JSON.parse(localStorage.getItem('CUSTOMER_INFO_STORAGE'));
      if (info?.customerInfo && info?.customerInfo.customer_info) {
        setCustomerInfo(info?.customerInfo.customer_info);
      }
      if (info?.customerInfo && info?.customerInfo?.starting_setting) {
        console?.log(
          info?.customerInfo?.starting_setting?.default_country,
          'info?.customerInfo?.starting_setting?.default_country'
        );
        setDefaultCountry(
          info?.customerInfo?.starting_setting?.default_country
        );

        setCountries(info?.customerInfo?.starting_setting?.countries);
      }
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'dial') {
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors({
        ...errors,
        [name]: null,
      });
    }
    if (name === 'phoneNumber') {
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors({
        ...errors,
        [name]: null,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors({
        ...errors,
        [name]: null,
      });
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

    if (!data.email) {
      errors.email = 'Email is required.';
    }
    if (!data.countryId) {
      errors.countryId = 'Country is required.';
    }
    if (!data.city) {
      errors.city = 'City is required.';
    }
    if (!data.addressType) {
      errors.addressType = 'address Type is required.';
    }
    if (!data.addressOne) {
      errors.addressOne = 'Address is required.';
    }
    return errors;
  };
  useEffect(() => {
    dispatch({
      type: 'GET_PREV_ADDRESS',
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch({
        type: 'ADD_ADDRESS',
        payload: {
          formData,
        },
      });
    }
  };
  const syncInfo = useSelector((state) => state.AuthReducer.syncInfo);
  useEffect(() => {
    setFormData({
      ...formData,
      countryId: defaultCountry?.nicename,
      addressType: addressType[0],
    });
  }, [defaultCountry, addressType, countries, syncInfo]);

  const [selectOpen, setSelectOpen] = useState(false);

  const handleSelectChange = (event) => {
    setSelectOpen(!selectOpen);
  };
  const [selectOpen1, setSelectOpen1] = useState(false);

  const handleSelectChange1 = (event) => {
    setSelectOpen1(!selectOpen1);
  };
  return (
    <div className="indexstyle-eqiam-0 hoGLcc">
      <div className="content-info">
        <form onSubmit={handleSubmit} className="indexstyle-n2rpxa-0 hVouFa">
          <section className="adderss-form-content">
            <div className="list-panel">
              {/*<span className="login-tips">*/}
              {/*  Already have an account？*/}
              {/*  <span className="login-tips-link">Login</span>*/}
              {/*</span>*/}
              <div className="w-full input-type email-bottom-box">
                <div className="input-type-value">
                  <label
                    className="indexstyle-okpc1p-0 feJXxt placeholder-before show-clear"
                    placeholder={t('user.email')}
                  >
                    <div className="input-warrper">
                      <input
                        autoComplete="on"
                        name="email"
                        placeholder={t('user.email')}
                        type="email"
                        onChange={handleChange}
                      />
                      <span className="input-close">
                        <svg
                          className="icon"
                          height={200}
                          p-id={6363}
                          t={1662694777667}
                          version="1.1"
                          viewBox="0 0 1024 1024"
                          width={200}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M512 853.333333a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m150.613333-491.946666a32 32 0 0 1 0 45.226666L557.226667 512l105.386666 105.386667a32 32 0 1 1-45.226666 45.226666L512 557.226667l-105.386667 105.386666a32 32 0 0 1-45.226666-45.226666L466.773333 512 361.386667 406.613333a32 32 0 0 1 45.226666-45.226666L512 466.773333l105.386667-105.386666a32 32 0 0 1 45.226666 0z"
                            fill="#000000"
                            fillOpacity=".2"
                            p-id={6364}
                          />
                        </svg>
                      </span>
                    </div>
                    {errors.email && (
                      <small className="my-1 w-full bg-red-200">
                        {errors.email}
                      </small>
                    )}
                  </label>
                </div>
              </div>
              {/*<label className="select-address">*/}
              {/*  <input*/}
              {/*    className="input-checked-form asd"*/}
              {/*    name="newsletter"*/}
              {/*    type="checkbox"*/}
              {/*  />*/}
              {/*  <span className="select-address-txt">*/}
              {/*    {t("user.Keep_me")}*/}
              {/*  </span>*/}
              {/*</label>*/}
            </div>
            <div className="list-panel">
              <p className="address-form-title">{t('user.shipping_address')}</p>
              <div className="name-line">
                <div className="input-type">
                  <div className="input-type-value">
                    <label
                      className="indexstyle-okpc1p-0 dvDDgZ"
                      placeholder="First name"
                    >
                      <div className="input-warrper">
                        <input
                          autoComplete="on"
                          maxLength={20}
                          name="firstName"
                          placeholder={t('user.name')}
                          type="text"
                          onChange={handleChange}
                        />
                      </div>
                      {errors.firstName && (
                        <small className="my-1 w-full bg-red-200">
                          {errors.firstName}
                        </small>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="input-type">
                <div className="input-type-value">
                  <label
                    className="indexstyle-okpc1p-0 fJrUjM"
                    placeholder="Street name and No., etc"
                  >
                    <div className="input-warrper">
                      <input
                        autoComplete="pca-override"
                        maxLength={35}
                        name="addressOne"
                        onChange={handleChange}
                        placeholder={t('user.street')}
                        type="text"
                      />
                    </div>
                    {errors.addressOne && (
                      <small className="my-1 w-full bg-red-200">
                        {errors.addressOne}
                      </small>
                    )}
                  </label>
                </div>
              </div>
              <div className="name-line flex flex-col">
                <div className="w-full input-type">
                  <div className="input-type-value">
                    <label
                      className="w-full indexstyle-okpc1p-0 ipLwxy"
                      placeholder="State/Province"
                    >
                      <div className="input-warrper">
                        <select
                          className="country-id-input text-gray-500"
                          autoComplete="on"
                          onChange={handleChange}
                          name="addressType"
                          // onFocus={() => setSelectOpen(!selectOpen)}
                          // onBlur={() => setSelectOpen(false)}
                          placeholder={t('user.address_type')}
                        >
                          {addressType.map((add, i) => (
                            <option key={i} value={add}>
                              {add}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ArrowSvgUp rotate={selectOpen ? 0 : 180} />
                        </div>
                      </div>
                      {errors.addressType && (
                        <small className="my-1 w-full bg-red-200">
                          {errors.addressType}
                        </small>
                      )}
                    </label>
                  </div>
                </div>
                <div className="w-full input-type">
                  <div className="input-type-value">
                    <label
                      className="indexstyle-okpc1p-0 ipLwxy"
                      placeholder="City"
                    >
                      <div className="input-warrper">
                        <input
                          autoComplete="on"
                          maxLength={35}
                          onChange={handleChange}
                          name="city"
                          placeholder={t('user.city')}
                          type="text"
                        />
                      </div>
                      {errors.city && (
                        <small className="my-1 w-full bg-red-200">
                          {errors.city}
                        </small>
                      )}
                    </label>
                  </div>
                </div>
                <div className="w-full  input-type">
                  <div className="input-type-value country-id-input w-full">
                    <label
                      className="indexstyle-okpc1p-0 ipLwxy"
                      placeholder="Country/Region"
                    >
                      <div className="input-warrper">
                        <select
                          autoComplete="on"
                          className="country-id-input text-gray-500"
                          id="countryId"
                          name="countryId"
                          onChange={handleChange}
                          value={formData?.countryId}
                          // onFocus={() => setSelectOpen1(!selectOpen1)}
                          // onBlur={() => setSelectOpen1(false)}
                          placeholder={t('user.country')}
                        >
                          {countries.map((country, i) => (
                            <option key={country.id} value={country.nicename}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ArrowSvgUp rotate={selectOpen1 ? 0 : 180} />
                        </div>
                      </div>
                      {errors.countryId && (
                        <small className="my-1 w-full bg-red-200">
                          {errors.countryId}
                        </small>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="input-type">
                <div className="input-type-value">
                  <label
                    className="indexstyle-okpc1p-0 fJrUjM"
                    placeholder="Phone number"
                  >
                    <div className="input-warrper">
                      <input
                        autoComplete="on"
                        maxLength={20}
                        name="phoneNumber"
                        onChange={handleChange}
                        placeholder={t('user.phone_number')}
                        type="number"
                      />
                      {errors.phoneNumber && (
                        <small className="my-1 w-full bg-red-200">
                          {errors.phoneNumber}
                        </small>
                      )}
                    </div>
                  </label>
                </div>
              </div>
              <div className="input-type hidden">
                <div className="input-type-value">
                  <label
                    className="indexstyle-okpc1p-0 fJrUjM"
                    placeholder="Postal Code"
                  >
                    <div className="input-warrper">
                      <input
                        autoComplete="on"
                        maxLength={20}
                        name="postalCode"
                        onChange={handleChange}
                        placeholder={t('user.postal_code')}
                        type="text"
                      />
                      {errors.postalCode && (
                        <small className="my-1 w-full bg-red-200">
                          {errors.postalCode}
                        </small>
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </section>
          <div className="total-bottom-address">
            <div className="total-bottom-btn">
              <button
                disabled={checkoutLoading}
                type="submit"
                className="indexstyle-sc-147lzxr-0 kUGXNx payment-btn"
              >
                <div className="children-container">
                  {checkoutLoading ? (
                    <p className=" flex-grow-0 flex-shrink-0 text-lg font-bold">
                      <SvgLoader />
                    </p>
                  ) : (
                    t('user.save_address')
                  )}
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormAddress;
