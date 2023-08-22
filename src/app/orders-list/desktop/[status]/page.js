'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/desktop';
import Footer from '@/components/Footer/desktop';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import store from '../../../../../store';
import { useParams, useRouter } from 'next/navigation';
import OrderList from '../../../../../components/Account/desktop/orderlist';
import RightSideChat from '../../../../../components/RightSideChat/desktop';

const PaymentMethod = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const param = useParams();
    const { status } = param;
    const SuccessPayment = useSelector(
        (state) => state?.CheckoutReducer?.SuccessPayment
    );
    const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
    const orders = useSelector((state) => state.CheckoutReducer.orders);
    const offset = useSelector((state) => state.CheckoutReducer.offset);
    const prevAddresses = useSelector(
        (state) => state.CheckoutReducer.prevAddresses
    );
    useEffect(() => {
        if (SuccessPayment) {
            dispatch({ type: 'RESET_CONFIRM_PAYMENT_REDUCER' });
        }
    }, [SuccessPayment]);
    const mainCategories = useSelector(
        (state) => state.mainReducer.mainPageData?.categories
    );
    useEffect(() => {
        dispatch({ type: 'GET_ORDERS_STATUS' });
    }, []);
    useEffect(() => {
        if (!mainCategories?.length > 0) {
            dispatch({
                type: 'GET_SECTIONS_SAGA',
            });
            dispatch({ type: 'GET_ITEMS_CART' });
        }
    }, [mainCategories]);
    useEffect(() => {
        dispatch({
            type: 'GET_ORDERS_SAGA',
        });
    }, []);
    useEffect(() => {
        dispatch({
            type: 'GET_PREV_ADDRESS',
        });
    }, []);
    useEffect(() => {
        dispatch({
            type: 'GET_FAVORITE_PRODUCTS',
        });
    }, []);
    useEffect(() => {
        // console.log(orders);
    }, [orders]);
    useEffect(() => {
        // console.log(prevAddresses);
    }, [prevAddresses]);

    useEffect(() => {
        dispatch({
            type: 'GET_WALLET',
            payload: { offset },
        });
    }, [offset]);
    useEffect(() => {
        dispatch({
            type: 'GET_WALLET_PAGINATION',
            payload: { offset },
        });
    }, [offset]);
    return (
        <>
            <Head>
                <title>Orders List</title>
            </Head>
            <div className="relative min-w-[1024px] bg-gray-50">
                <Header
                    collection={true}
                    categories={mainPageData?.categories}
                />
                <OrderList
                    tab={status}
                    prevAddresses={prevAddresses}
                    orders={orders}
                />
                <Footer />
            </div>
            <RightSideChat />
            <div id="modal-root"></div>
        </>
    );
};

export default PaymentMethod;
