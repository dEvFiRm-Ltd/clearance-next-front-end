'use client';
import FloatingLeft from '@/components/FloatingDiscount/desktop';
import RightSideChat from '@/components/RightSideChat/desktop';
import Header from '@/components/Header/desktop';
import Body from '@/components/Body/desktop';
import Footer from '@/components/Footer/desktop';
import RelatedSearches from '@/components/RelatedSearches/desktop';
import Annousement from '@/components/Header/desktop/annousmentTop';
import ModalPopup from '@/components/Body/desktop/ModalPopup';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../store';
import Head from 'next/head';

const Main_Page = () => {
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const loading = useSelector((state) => state.mainReducer.loading);
    const authLoading = useSelector((state) => state.AuthReducer?.authLoading);

    const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
    const flashSale = useSelector((state) => state.mainReducer.flashSale);
    const mainCategories = useSelector(
        (state) => state.mainReducer.mainCategories
    );
    // let loading = true;
    const dispatch = useDispatch();
    const [getFlashSale, setGetFlashSale] = useState(false);
    const [getMain, setGetMain] = useState(false);
    const [token, setToken] = useState(null);
    useEffect(() => {
        const Token = JSON.parse(
            localStorage.getItem('TOKEN_LOCAL_STORAGE')
        )?.token;
        setToken(Token);

        const unsubscribe = store.subscribe(() => {
            const updatedToken = JSON.parse(
                localStorage.getItem('TOKEN_LOCAL_STORAGE')
            )?.token;
            if (updatedToken) {
                setToken(updatedToken);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);
    useEffect(() => {
        if (token) {
            console.log('8');
            // dispatch({ type: 'GET_ITEMS_CART' });
        }
    }, [token]);
    useEffect(() => {
        setGetMain(true);
        dispatch({
            type: 'GET_SECTIONS_SAGA',
        });
    }, []);
    useEffect(() => {
        // if (flashSale && !loading && !mainCategories) {
        console.log('111');
        if (!mainCategories) {
            console.log('2222');
            dispatch({
                type: 'GET_CATEGORIES_SAGA',
            });
        }
    }, [mainCategories]);
    useEffect(() => {
        if (!getFlashSale) {
            setGetFlashSale(true);
            setTimeout(() => {
                dispatch({
                    type: 'GET_FLASH_SALE_SAGA',
                });
            }, 100);
        }
    }, [getFlashSale]);
    useEffect(() => {
        if (scrolled && !getFlashSale) {
            setGetFlashSale(true);
            dispatch({
                type: 'GET_FLASH_SALE_SAGA',
            });
        }
    }, [getFlashSale, scrolled]);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);
    return (
        <>
            {/*<Head>*/}
            {/*  <link*/}
            {/*    rel="icon"*/}
            {/*    type="image/png"*/}
            {/*    sizes="32x32"*/}
            {/*    href="https://www.clearance.ae/storage/company/2022-04-24-62659f15aff38.png"*/}
            {/*  />*/}
            {/*  <title>Welcome To Clearance Home</title>*/}
            {/*</Head>*/}
            <div className="relative min-w-[1024px]">
                <Annousement />
                {/*{mainPageData?.popup_banners?.length > 0 && (*/}
                {/*  <FloatingLeft popupBanners={mainPageData?.popup_banners} />*/}
                {/*)}*/}
                <RightSideChat />
                <ModalPopup show={show} onClose={() => setShow(false)} />
                <Header
                    loading={loading}
                    categories={mainPageData?.categories}
                    collection={true}
                />

                {/* <InitialHeader /> */}
                <Body
                    loading={loading || authLoading}
                    mainBanners={mainPageData?.main_banners}
                    footerBanners={mainPageData?.footer_banners}
                    featuredProducts={mainPageData?.featured_products}
                    flashSale={flashSale?.flash_deals_products}
                    categories={mainPageData?.categories}
                    mainCategories={mainCategories}
                />
                {/*<RelatedSearches />*/}
                {loading ? null : <Footer />}
                <div id="modal-root"></div>
                <div id="popup"></div>
            </div>
        </>
    );
};
export default Main_Page;
