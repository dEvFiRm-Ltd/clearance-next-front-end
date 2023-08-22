'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/desktop';
import Footer from '@/components/Footer/desktop';
import ProductDetails from '@/components/productdetails/desktop';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../../../../../components/LoadingComponent/mobile';
import { useParams } from 'next/navigation';
import RightSideChat from '../../../../../components/RightSideChat/desktop';

const ProductDetailsPage = ({ productData, productProps }) => {
    const params = useParams();
    const { slug } = params;
    const dispatch = useDispatch();
    const loading = useSelector((state) => state?.ProductReducer?.loading);
    const productName = useSelector(
        (state) => state?.ProductReducer?.Product?.name
    );
    const syncSessionStorage = useSelector(
        (state) => state?.ProductReducer?.syncSessionStorage
    );
    const productLoading = useSelector(
        (state) => state?.ProductReducer?.productLoading
    );
    const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
    const mainLoading = useSelector((state) => state?.mainReducer?.loading);
    const mainCategories = useSelector(
        (state) => state.mainReducer.mainPageData?.categories
    );
    const [recentlyProduct, setRecentlyProduct] = useState([]);

    useEffect(() => {
        if (!mainCategories?.length > 0) {
            dispatch({
                type: 'GET_SECTIONS_SAGA',
            });
            dispatch({ type: 'GET_ITEMS_CART' });
        }
    }, [mainCategories]);

    // useEffect(() => {
    //   productData &&
    //     dispatch({ type: "PRODUCT_DETAILS_SERVER", payload: { productData } });
    // }, [slug]);
    useEffect(() => {
        slug && dispatch({ type: 'PRODUCT_DETAILS', payload: { id: slug } });
    }, [slug]);

    useEffect(() => {
        // console.log(productProps, "productProps");
    }, [productProps]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedRecentlyProduct = JSON.parse(
                sessionStorage.getItem('RECENTLY_PRODUCT')
            );
            if (storedRecentlyProduct) {
                setRecentlyProduct(storedRecentlyProduct);
            }
        }
    }, [loading, syncSessionStorage]);

    const product = useSelector((state) => state?.ProductReducer?.Product);

    function capitalizeFirstChars(str) {
        const words = str?.split(' ');
        const capitalizedWords = words?.map((word) => {
            const firstChar = word.charAt(0).toUpperCase();
            const restOfWord = word.slice(1);
            return firstChar + restOfWord;
        });
        return capitalizedWords.join(' ');
    }

    const newSlug = slug?.replace(/-/g, ' ');
    const title = newSlug && capitalizeFirstChars(newSlug);

    useEffect(() => {
        // console.log(productName, "productName");
    }, []);

    return (
        <>
            {/*{typeof window !== "undefined" && (*/}
            {/*  <Head>*/}
            {/*    <title>{productData?.name}</title>*/}
            {/*  </Head>*/}
            {/*)}*/}

            <div className="relative pt-[30px]  min-w-[1024px]">
                <Header
                    collection={true}
                    categories={mainPageData?.categories}
                />
                {/* {(productLoading || mainLoading) && <LoadingComponent />} */}
                <ProductDetails
                    product={product}
                    recentlyProduct={recentlyProduct}
                />
                <Footer />
                <RightSideChat />
            </div>
            <div id="modal-root"></div>
        </>
    );
};

export default ProductDetailsPage;
