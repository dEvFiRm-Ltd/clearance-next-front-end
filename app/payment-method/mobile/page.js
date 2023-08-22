'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/mobile';
import Footer from '@/components/Footer/mobile';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import PaymentMethodBody from '../../../components/PaymentMethod/mobile';
import ConfirmPhone from '../../../components/PaymentMethod/components/ConfirmPhone';
import store from '../../../store';
import RightSideChat from '../../../components/RightSideChat/mobile';
import { useRouter } from 'next/navigation';
import DoneComponent from '../../../components/PaymentMethod/DoneComponent';
import GoogleAnalytics from '@/app/GoogleAnalytics';

const PaymentMethod = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [endLoad, setEndLoad] = useState(false);
  const [done, setDone] = useState(false);
  const [token, setToken] = useState(null);
  const [guest, setGuest] = useState(null);
  const [userData, setUserData] = useState(null);
  const PaymentURL = useSelector((store) => store.CheckoutReducer.PaymentURL);

  useEffect(() => {
    if (PaymentURL) {
      // console.log(token, "token");
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);

      window.location.href = PaymentURL;
    }
  }, [PaymentURL]);
  const shippingCart = useSelector((store) => store.CartReducer.shippingCart);
  const [customerInfo, setCustomerInfo] = useState(null);
  const prevAddresses = useSelector(
    (state) => state?.CheckoutReducer?.prevAddresses
  );
  const syncInfo = useSelector((state) => state.AuthReducer.syncInfo);
  const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
  const authToken = useSelector((state) => state.AuthReducer.authToken);
  const mainCategories = useSelector(
    (state) => state.mainReducer.mainPageData?.categories
  );
  useEffect(() => {
    if (shippingCart?.sub_total === 0 && authToken) {
      setDone(true);
      // router.push("/orders-list/all");
    }
  }, [shippingCart, authToken]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [done]);

  useEffect(() => {
    if (!mainCategories?.length > 0) {
      dispatch({
        type: 'GET_SECTIONS_SAGA',
      });
      dispatch({ type: 'GET_ITEMS_CART' });
    }
  }, [mainCategories]);
  useEffect(() => {
    dispatch({ type: 'GET_PREV_ADDRESS' });
  }, []);
  useEffect(() => {}, [authToken]);
  const product = useSelector((state) => state?.ProductReducer?.Product);
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
    if (typeof window !== 'undefined') {
      setToken(JSON.parse(localStorage.getItem('TOKEN_LOCAL_STORAGE'))?.token);
      setGuest(JSON.parse(localStorage.getItem('TOKEN_LOCAL_STORAGE'))?.guest);
      setUserData(
        JSON.parse(localStorage.getItem('TOKEN_LOCAL_STORAGE'))?.userData
      );
    }
  }, [authToken]);
  useEffect(() => {
    dispatch({ type: 'STOP_LOADING_PRODUCT' });
  }, []);
  return (
    <>
      <Head>
        <title>Payment Methods</title>
      </Head>
      <div className="relative w-full">
        <Header checkout={true} />
        {!guest && token && endLoad && !done ? (
          <div className="w-full">
            <PaymentMethodBody />
          </div>
        ) : endLoad && !done ? (
          <ConfirmPhone customerInfo={customerInfo} />
        ) : done ? (
          <div className="h-screen bg-gray-50">
            <DoneComponent />
            <GoogleAnalytics />
          </div>
        ) : (
          <div className="h-screen bg-gray-50" />
        )}
        <Footer />
        <div id="modal-root"></div>
        <RightSideChat />
      </div>
    </>
  );
};

export default PaymentMethod;
