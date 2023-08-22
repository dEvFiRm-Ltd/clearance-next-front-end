'use client';
import Header from '@/components/Header/mobile';
import Footer from '@/components/Footer/mobile';
import RelatedSearches from '@/components/RelatedSearches/mobile';
import CollectionBody from '@/components/CollectionBody/mobile';
import { useRouter, useParams } from 'next/navigation';
import SideMenu from '@/components/Header/mobile/navigationWrapper';
import Annousment from '@/components/Header/mobile/annousmentTop';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import ModalSearch from '../../../../../components/Header/mobile/ModalSearch';
// import { Transition } from "@headlessui/react";
import store from '../../../../../store';
import RightSideChat from '../../../../../components/RightSideChat/mobile';
import { stringify } from 'querystring';
export default function Collections() {
    const param = useParams();
    const { params } = param;

    const decodedParams = decodeURIComponent(params);
    const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
    const Products = useSelector((state) => state.ProductReducer.Products);
    const Update_Filters = useSelector(
        (state) => state.ProductReducer.Update_Filters
    );
    const [cate, setCate] = useState(null);
    const [sear, setSear] = useState(null);
    const offset = useSelector((state) => state.ProductReducer.offset);
    const data_from = useSelector((state) => state.ProductReducer.data_from);
    const sort_by = useSelector((state) => state.ProductReducer.sort_by);
    const page = useSelector((state) => state.ProductReducer.page);
    const categoryReducer = store.getState()?.ProductReducer?.category;
    const searchValueReducer = useSelector(
        (state) => state.ProductReducer.search_value
    );
    const [subCategories, setSubCategories] = useState([]);
    const [finalFilteredItems, setFinalFilteredItems] = useState([]);
    const dispatch = useDispatch();

    const handleClickOutsideBox = (event) => {
        // 👇️ the element the user clicked
        const box = document?.getElementById('navigation-wrapper-element');
        if (!box.contains(event.target)) {
            document
                .getElementById('navigation-wrapper-element')
                ?.classList.remove('open');
            document.getElementById('nav-open-mask')?.classList.remove('open');
            document?.removeEventListener('click', handleClickOutsideBox);
        }
    };
    const openSideBar = () => {
        if (typeof window !== 'undefined') {
            // console.log("openSideBar");
            document
                .getElementById('navigation-wrapper-element')
                ?.classList.add('open');
            document.getElementById('nav-open-mask')?.classList.add('open');
            // setTimeout(() => {
            //   document?.addEventListener("click", handleClickOutsideBox);
            // }, 100);
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

    useEffect(() => {
        // console.log(params, "params");
        // console.log(param, "param");
    }, [params]);
    let collection = null;
    let category = null;
    let brands = [];
    let sizes = [];
    let prices = [];
    let searchText = null;

    if (decodedParams && decodedParams.length > 0) {
        const parts = decodedParams.split('&');

        // console.log(parts, "parts");
        parts.forEach((part) => {
            const [key, value] = part.split('=');
            if (key === 'category') {
                category = value;
            } else if (key === 'brands') {
                brands = value.includes('+')
                    ? parseInt(value.split('+'))
                    : [parseInt(value)];
            } else if (key === 'sizes') {
                sizes = value.includes('+') ? value.split('+') : [value];
            } else if (key === 'prices') {
                prices = value.includes('+') ? value.split('+') : [value];
            } else if (key === 'search_text') {
                searchText = value;
            }
        });
    }

    useEffect(() => {
        // console.log(params, "params");
        // console.log(params, "params");
    }, [params]);
    const loading = useSelector((state) => state.mainReducer.loading);
    function _getSubCategories() {
        const category = mainPageData?.categories.find(
            (category) => category.category === category
        );

        if (category) {
            const subCategories = category.sub_categories;
            // console.log(subCategories);
            setSubCategories(subCategories);
        } else {
            // console.log("Category not found");
        }
    }

    useEffect(() => {
        _getSubCategories();
    }, [category]);
    useEffect(() => {
        // console.log(Update_Filters, "data_from");
        dispatch({ type: 'RESET_JUST_GET_PRODUCTS' });
    }, [Update_Filters, sort_by, data_from]);

    const sortFilteredItems = useCallback(
        (Update_Filters) => {
            if (Update_Filters) {
                const Category = categoryReducer;
                const searchText = searchValueReducer;
                const Sizes = Update_Filters['Sizes']
                    ? Object.values(Update_Filters['Sizes']).map(
                          (obj) => obj.value
                      )
                    : [];
                const Prices = Update_Filters['Prices']
                    ? Object.values(Update_Filters['Prices']).map(
                          (obj) => obj.value
                      )
                    : [];
                const Brands = Update_Filters['Brands']
                    ? Object.values(Update_Filters['Brands']).map(
                          (obj) => obj.value
                      )
                    : [];

                return {
                    page,
                    data_from,
                    sort_by,
                    Category,
                    searchText,
                    Sizes,
                    Prices,
                    Brands,
                };
            }
        },
        [
            Update_Filters,
            sort_by,
            data_from,
            searchValueReducer,
            categoryReducer,
        ]
    );
    useEffect(() => {
        const Attributes = sortFilteredItems(Update_Filters);
        // console.log(Attributes, "Attributes");
        if (
            categoryReducer ||
            searchValueReducer ||
            Attributes.Brands.length > 0
        ) {
            if (
                Attributes.Category ||
                Attributes.searchText ||
                Attributes.Sizes.length > 0 ||
                Attributes.Brands.length > 0 ||
                Attributes.data_from ||
                Attributes.sort_by ||
                Attributes.Prices.length > 0
            ) {
                dispatch({
                    type: 'GET_PRODUCTS',
                    payload: { Attributes },
                });
            }
        }
    }, [sortFilteredItems]);
    useEffect(() => {
        const Attributes = sortFilteredItems(Update_Filters);
        if (offset > 1) {
            dispatch({
                type: 'GET_PRODUCTS_PAGINATION',
                payload: { Attributes },
            });
        }
    }, [offset]);
    useEffect(() => {
        const categoryValue = category || null;
        const searchTextValue = searchText || null;
        const sizesArray = Update_Filters.Sizes.map((size) => size.value);
        const pricesArray = Update_Filters.Prices.map((price) => price.value);
        const brandsArray = Update_Filters.Brands.map((brand) => brand.value);

        // Remove duplicates using Set
        const uniqueSizes = Array.from(new Set(sizesArray));
        const uniquePrices = Array.from(new Set(pricesArray));
        const uniqueBrands = Array.from(new Set(brandsArray));

        const queryObject = {};
        if (categoryValue) {
            queryObject.category = categoryValue;
        }
        if (searchTextValue) {
            queryObject.search_text = searchTextValue;
        }
        if (sizesArray.length > 0) {
            queryObject.sizes = uniqueSizes.join('+');
        }
        if (pricesArray.length > 0) {
            queryObject.prices = uniquePrices.join('+');
        }
        if (brandsArray.length > 0) {
            queryObject.brands = uniqueBrands.join('+');
        }
        const currentUrl = window.location.href;
        const Url = currentUrl.replace(/\/$/, '');
        const updatedUrlWithoutQuery = `${Url.split('products/')[0]}products/`;
        // console.log(updatedUrlWithoutQuery, "updatedUrlWithoutQuery");
        const queryString = stringify(queryObject, '&', '=', { encode: false });
        const updatedUrl = `${updatedUrlWithoutQuery}${queryString
            .replace(/%2F/g, '/')
            .replace(/%2B/g, '+')
            .replace(/%20/g, ' ')}`;

        if (Object.keys(queryObject).length > 0) {
            window.history.pushState(null, '', updatedUrl);
        }
        // console.log(updatedUrl);
    }, [Update_Filters]);

    useEffect(() => {
        store.dispatch({
            type: 'START_LOADING_PRODUCT',
        });
        if (category) {
            store.dispatch({
                type: 'CATEGORY_REDUCER',
                payload: { category: category.replace('/', '') },
            });
            if (category !== categoryReducer) {
                store.dispatch({ type: 'RESET_FILTERS' });
                store.dispatch({ type: 'RESET_GET_PRODUCTS' });
                dispatch({
                    type: 'SET_SEARCH_REDUCER',
                    payload: null,
                });
            }
            store.dispatch({ type: 'RESET_GET_PRODUCTS' });
        }
        if (searchText) {
            // if (searchText !== searchValueReducer) {
            store.dispatch({ type: 'RESET_FILTERS' });
            store.dispatch({ type: 'RESET_GET_PRODUCTS' });
            // }
            dispatch({
                type: 'SET_SEARCH_REDUCER',
                payload: searchText.replace('/', ''),
            });
            store.dispatch({ type: 'RESET_GET_PRODUCTS' });
        }
        if (sizes) {
            const sizesObject = {
                Sizes: sizes.map((size) => ({ key: size, value: size })),
            };
            dispatch({ type: 'Add_Filters', payload: sizesObject });
        }
        if (brands) {
            const brandsObject = {
                Brands: brands.map((brand) => ({ key: brand, value: brand })),
            };
            dispatch({ type: 'Add_Filters', payload: brandsObject });
        }
        if (prices) {
            const pricesObject = {
                Prices: prices.map((brand) => ({ key: brand, value: brand })),
            };
            dispatch({ type: 'Add_Filters', payload: pricesObject });
        }
    }, [decodedParams]);
    useEffect(() => {
        if (!mainPageData) {
            dispatch({
                type: 'GET_SECTIONS_SAGA',
            });
        }
    }, [mainPageData]);
    const [openSearchModal, setOpenSearchModal] = useState(false);
    function handleOpenSearchModal() {
        setOpenSearchModal(true);
    }
    function handleCloseSearchModal() {
        setOpenSearchModal(false);
    }
    useEffect(() => {
        openSearchModal
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'unset');
    }, [openSearchModal]);
    const productLoading = useSelector(
        (state) => state?.ProductReducer?.productLoading
    );
    return (
        <>
            <div className="relative ">
                <Header
                    categories={mainPageData?.categories}
                    handleOpenSearchModal={handleOpenSearchModal}
                    handleCloseSearchModal={handleCloseSearchModal}
                    openSideBar={(e) => {
                        openSideBar(e);
                    }}
                    loading={loading}
                />
                <SideMenu
                    closeSideBar={() => {
                        closeSideBar();
                    }}
                    elements={mainPageData?.categories}
                />
                <CollectionBody
                    Products={Products}
                    name={category}
                    collections={subCategories}
                />
                {/*<RelatedSearches />*/}
                <RightSideChat />
                {productLoading ? null : <Footer />}
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
                    <ModalSearch
                        handleCloseSearchModal={handleCloseSearchModal}
                    />
                </div>
                {/* </Transition> */}
            </div>
        </>
    );
}
