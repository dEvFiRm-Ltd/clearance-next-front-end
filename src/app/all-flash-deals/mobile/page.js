'use client';
import React, { useEffect } from 'react';
import FloatingLeft from '@/components/FloatingDiscount/mobile';
import RightSideChat from '@/components/RightSideChat/mobile';
import Header from '@/components/Header/mobile';
import FlashSale from '@/components/FlashSale/mobile';
import Footer from '@/components/Footer/mobile';
import Annousement from '@/components/Header/mobile/annousmentTop';
import { useDispatch, useSelector } from 'react-redux';
import SideMenu from '../../../../components/Header/mobile/navigationWrapper';
const FlashSaleMobile = () => {
    const dispatch = useDispatch();
    const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
    const flashSale = useSelector((state) => state.FlashSaleReducer.flashSale);
    const flashSaleProducts = useSelector(
        (state) => state.FlashSaleReducer.flashSaleProducts
    );
    const offset = useSelector((state) => state.FlashSaleReducer.offset);
    useEffect(() => {
        dispatch({
            type: 'GET_FLASH_SALE_PAGINATION',
            payload: { offset },
        });
    }, [offset]);
    return (
        <div className="relative">
            {/*<Annousement />*/}
            {/*<FloatingLeft />*/}
            {/*<RightSideChat />*/}
            {/*<Header collection={true} categories={mainPageData?.categories} />*/}
            <FlashSale flashSale={flashSaleProducts} />
            <RightSideChat />
            <Footer />
        </div>
    );
};

export default FlashSaleMobile;
