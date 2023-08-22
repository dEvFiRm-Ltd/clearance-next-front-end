'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/desktop';
import Footer from '@/components/Footer/desktop';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import PaymentMethodBody from '../../../components/PaymentMethod/desktop';
import OTP from '../../../components/Account/desktop/Login/OTP';
import ConfirmPhone from '../../../components/PaymentMethod/components/ConfirmPhone';
import store from '../../../store';
import { useRouter } from 'next/navigation';
import RightSideChat from '../../../components/RightSideChat/desktop';
import DoneComponent from '../../../components/PaymentMethod/DoneComponent';
import GoogleAnalytics from '@/app/GoogleAnalytics';

const PaymentMethod = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [endLoad, setEndLoad] = useState(false);
  const [token, setToken] = useState(null);
  const [done, setDone] = useState(false);
  const [guest, setGuest] = useState(true);
  const [userData, setUserData] = useState(null);
  const shippingCart = useSelector((store) => store.CartReducer.shippingCart);
  const PaymentURL = useSelector((store) => store.CheckoutReducer.PaymentURL);

  const [customerInfo, setCustomerInfo] = useState(null);
  const loading = useSelector((state) => state?.ProductReducer?.loading);
  const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
  const authToken = useSelector((state) => state.AuthReducer.authToken);
  const syncInfo = useSelector((state) => state.AuthReducer.syncInfo);
  const mainCategories = useSelector(
    (state) => state.mainReducer.mainPageData?.categories
  );

  useEffect(() => {
    console.log(guest, 'guest');
    console.log(customerInfo, 'customerInfo');
    console.log(userData, 'userData');
    console.log(token, 'token');
    console.log(authToken, 'authToken');
    console.log(endLoad, 'endLoad');
    console.log(syncInfo, 'syncInfo');
    console.log(done, 'done');
  }, [
    guest,
    customerInfo,
    userData,
    token,
    authToken,
    endLoad,
    syncInfo,
    done,
  ]);
  useEffect(() => {
    if (!mainCategories?.length > 0) {
      dispatch({
        type: 'GET_SECTIONS_SAGA',
      });
      dispatch({ type: 'GET_ITEMS_CART' });
    }
  }, [mainCategories]);
  useEffect(() => {
    if (shippingCart?.sub_total === 0 && authToken) {
      setDone(true);
      // router.push("/orders-list/all");
    }
  }, [shippingCart, authToken]);

  useEffect(() => {
    dispatch({ type: 'GET_PREV_ADDRESS' });
  }, []);

  useEffect(() => {
    if (PaymentURL) {
      console.log(token, 'token');
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);

      window.location.href = PaymentURL;
    }
  }, [PaymentURL]);
  const product = useSelector((state) => state?.ProductReducer?.Product);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(JSON.parse(localStorage.getItem('TOKEN_LOCAL_STORAGE'))?.token);
      setUserData(
        JSON.parse(localStorage.getItem('TOKEN_LOCAL_STORAGE'))?.userData
      );
    }
  }, []);
  useEffect(() => {
    const updateStateFromLocalStorage = () => {
      console.log('updateStateFromLocalStorage1');
      const local = JSON.parse(localStorage.getItem('TOKEN_LOCAL_STORAGE'));
      const info = JSON.parse(localStorage.getItem('CUSTOMER_INFO_STORAGE'));
      setCustomerInfo(
        info?.customerInfo?.starting_setting?.default_country_dial_code
      );
      setToken(local?.token);
      const customer = JSON.parse(
        localStorage.getItem('CUSTOMER_INFO_STORAGE')
      );
      setGuest(
        !(
          customer?.customerInfo?.customer_info?.is_email_verified === 1 ||
          customer?.customerInfo?.customer_info?.is_phone_verified === 1
        )
      );
      setUserData(local?.userData);
      setEndLoad(true);
    };

    updateStateFromLocalStorage();

    const handleStorageChange = () => {
      console.log('updateStateFromLocalStorage2');
      const customer = JSON.parse(
        localStorage.getItem('CUSTOMER_INFO_STORAGE')
      );
      setGuest(
        !(
          customer?.customerInfo?.customer_info?.is_email_verified === 1 ||
          customer?.customerInfo?.customer_info?.is_phone_verified === 1
        )
      );
      updateStateFromLocalStorage();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [syncInfo]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [done]);

  useEffect(() => {
    dispatch({ type: 'STOP_LOADING_PRODUCT' });
  }, []);
  if (!guest && token && endLoad && !done) {
    return (
      <>
        <Head>
          <title>Payment Methods</title>
        </Head>
        <div className="relative min-w-[1024px] bg-gray-50">
          <Header
            checkout={!done}
            categories={mainPageData?.categories}
            collection={done}
          />
          <div className="w-full">
            <PaymentMethodBody />
          </div>

          <Footer />
        </div>
        <RightSideChat />
        <div id="modal-root"></div>
      </>
    );
  }

  if (endLoad && !done) {
    return (
      <>
        <Head>
          <title>Payment Methods</title>
        </Head>
        <div className="relative min-w-[1024px] bg-gray-50">
          <div className="pt-140 flex justify-center items-center h-screen bg-gray-50">
            <ConfirmPhone customerInfo={customerInfo} />
          </div>
          <Footer />
        </div>
        <RightSideChat />
        <div id="modal-root"></div>
      </>
    );
  }
  if (!guest && token && endLoad && done) {
    return (
      <>
        <Head>
          <title>Payment Methods</title>
        </Head>
        <div className="relative min-w-[1024px] bg-gray-50">
          <div className="pt-140 flex justify-center items-center h-screen bg-gray-50">
            <DoneComponent />
          </div>
          <Footer />
        </div>
        <RightSideChat />
        <GoogleAnalytics />
        <div id="modal-root"></div>
      </>
    );
  }
};

export default PaymentMethod;
