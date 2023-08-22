'use client';
import AppInvite from '@/components/mobile/appInvite';
import Header from '@/components/Header/mobile';
import SideMenu from '@/components/Header/mobile/navigationWrapper';
import Body from '@/components/Body/mobile';
import Footer from '@/components/Footer/mobile';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import RightSideChat from '../../../components/RightSideChat/mobile';
// import { Transition } from "@headlessui/react";
import ModalSearch from '../../../components/Header/mobile/ModalSearch';
import { useTranslation } from 'react-i18next';
import HeaderMobile from '../../../components/Header/mobile/Header';
import store from '../../../store';
import Head from 'next/head';

export default function Home() {
    const { t, i18n } = useTranslation();
    const authLoading = useSelector((state) => state.AuthReducer?.authLoading);
    const handleClickOutsideBox = (event) => {
        if (typeof window !== 'undefined') {
            // 👇️ the element the user clicked
            const box = document?.getElementById('navigation-wrapper-element');
            if (!box.contains(event.target)) {
                document
                    .getElementById('navigation-wrapper-element')
                    ?.classList.remove('open');
                document
                    .getElementById('nav-open-mask')
                    ?.classList.remove('open');
                document?.removeEventListener('click', handleClickOutsideBox);
            }
        }
    };
    const openSideBar = () => {
        if (typeof window !== 'undefined') {
            document
                .getElementById('navigation-wrapper-element')
                ?.classList.add('open');
            document.getElementById('nav-open-mask')?.classList.add('open');
            setTimeout(() => {
                document?.addEventListener('click', handleClickOutsideBox);
            }, 100);
        }
    };
    const closeSideBar = () => {
        if (typeof window !== 'undefined') {
            document
                .getElementById('navigation-wrapper-element')
                ?.classList.remove('open');
            document.getElementById('nav-open-mask')?.classList.remove('open');
            document?.removeEventListener('click', handleClickOutsideBox);
        }
    };
    const closeAppInvite = () => {
        if (typeof window !== 'undefined') {
            document
                .getElementById('app-invite-main')
                ?.classList?.replace('hidden', 'hidden');
            document
                .getElementById('main-body-element')
                ?.classList?.remove('mt-[68px]');
        }
    };
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const loading = useSelector((state) => state.mainReducer.loading);
    const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
    const flashSale = useSelector((state) => state.mainReducer.flashSale);
    const mainCategories = useSelector(
        (state) => state.mainReducer.mainCategories
    );
    // let loading = true;
    const dispatch = useDispatch();
    const [getFlashSale, setGetFlashSale] = useState(false);
    const [getMain, setGetMain] = useState(false);
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
    const [token, setToken] = useState(null);
    const sync = useSelector((store) => store.CartReducer.sync);
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
            // console.log("8");
            // dispatch({ type: "GET_ITEMS_CART" });
        }
    }, [token]);
    const [openSearchModal, setOpenSearchModal] = useState(false);
    function handleOpenSearchModal() {
        setOpenSearchModal(true);
    }
    function handleCloseSearchModal() {
        setOpenSearchModal(false);
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            openSearchModal
                ? (document.body.style.overflow = 'hidden')
                : (document.body.style.overflow = 'unset');
        }
    }, [openSearchModal]);
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
            {/*<AppInvite*/}
            {/*  closeAppInvite={() => {*/}
            {/*    closeAppInvite();*/}
            {/*  }}*/}
            {/*/>*/}
            <RightSideChat />
            <Header
                handleOpenSearchModal={handleOpenSearchModal}
                handleCloseSearchModal={handleCloseSearchModal}
                openSideBar={(e) => {
                    openSideBar(e);
                }}
                loading={loading}
                categories={mainPageData?.categories}
                collection={true}
            />
            <Body
                loading={loading || authLoading}
                mainBanners={mainPageData?.main_banners}
                footerBanners={mainPageData?.footer_banners}
                featuredProducts={mainPageData?.featured_products}
                flashSale={flashSale?.flash_deals_products}
                categories={mainPageData?.categories}
                mainCategories={mainCategories}
            />
            <SideMenu
                closeSideBar={() => {
                    closeSideBar();
                }}
                elements={mainPageData?.categories}
            />

            <Footer />
            {/* <Transition
        show={openSearchModal}
        enter="transition-opacity duration-0"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-0"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      > */}
            <div
                className={` fixed top-0  left-0 w-full h-full bg-black bg-opacity-50 transition-transform duration-300 transform ${
                    openSearchModal
                        ? 'translate-x-0 z-[999999]'
                        : '-translate-x-full z-0'
                }`}
            >
                <ModalSearch handleCloseSearchModal={handleCloseSearchModal} />
            </div>
            {/* </Transition> */}
        </>
    );
}
