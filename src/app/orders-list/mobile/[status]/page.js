'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/mobile';
import Footer from '@/components/Footer/mobile';
import Head from 'next/head';
import RightSideChat from '../../../../../components/RightSideChat/mobile';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import OrderList from '../../../../../components/Account/mobile/orderlist';

const PaymentMethod = () => {
    const offset = useSelector((state) => state.CheckoutReducer.offset);
    const router = useRouter();
    const dispatch = useDispatch();

    const param = useParams();
    const { status } = param;
    useEffect(() => {
        dispatch({ type: 'GET_ORDERS_STATUS' });
    }, []);
    useEffect(() => {
        dispatch({
            type: 'GET_FAVORITE_PRODUCTS',
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: 'GET_WALLET',
            payload: { offset },
        });
    }, []);
    useEffect(() => {
        dispatch({
            type: 'GET_WALLET_PAGINATION',
            payload: { offset },
        });
    }, [offset]);

    const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
    const orders = useSelector((state) => state.CheckoutReducer.orders);
    const prevAddresses = useSelector(
        (state) => state.CheckoutReducer.prevAddresses
    );
    const mainCategories = useSelector(
        (state) => state.mainReducer.mainPageData?.categories
    );

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
        // console.log(orders);
    }, [orders]);
    useEffect(() => {
        // console.log(prevAddresses);
    }, [prevAddresses]);
    return (
        <>
            <Head>
                <title>Orders List</title>
            </Head>
            <div className="relative w-full">
                <Header title={'My Account'} checkout={true} />
                <OrderList
                    tab={status}
                    prevAddresses={prevAddresses}
                    orders={orders}
                />
                <Footer />
                <div id="modal-root"></div>
                <RightSideChat />
            </div>
        </>
    );
};

export default PaymentMethod;
