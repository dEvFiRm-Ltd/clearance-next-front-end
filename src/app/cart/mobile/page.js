'use client';
import ShowItemsInCart from '@/components/CardModal/mobile/ShowItemsInCart';
import HeaderCart from '@/components/CardModal/mobile/ShowItemsInCart/HeaderCart';
import BodyCart from '@/components/CardModal/mobile/ShowItemsInCart/BodyCart';
import AlsoLike from '@/components/CardModal/mobile/ShowItemsInCart/AlsoLike';
import LoginModal from '@/components/CardModal/mobile/LoginModal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonCheckout from '../../../../components/CardModal/desktop/ShowItemsInCart/ButtonCheckout';
export default function Cart() {
    const dispatch = useDispatch();
    const [itemsInCart, setItemsInCart] = useState([]);
    const [priceForFree, setPriceForFree] = useState([]);
    const shippingCart = useSelector((store) => store.CartReducer.shippingCart);
    const sync = useSelector((store) => store.CartReducer.sync);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setItemsInCart(JSON.parse(localStorage.getItem('ADD_TO_CART')));
        }
    }, [sync]);
    const [openModal, setOpenModal] = useState(false);
    const onOpen = () => {
        setOpenModal(true);
    };
    const onClose = () => {
        setOpenModal(false);
    };
    const [recentlyProduct, setRecentlyProduct] = useState([]);
    const loading = useSelector((state) => state?.ProductReducer?.loading);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedRecentlyProduct = JSON.parse(
                sessionStorage.getItem('RECENTLY_PRODUCT')
            );
            if (storedRecentlyProduct) {
                setRecentlyProduct(storedRecentlyProduct);
            }
        }
    }, [loading]);

    return (
        <>
            <HeaderCart items={shippingCart} priceForFree={priceForFree} />
            <BodyCart
                recentlyProduct={recentlyProduct}
                items={itemsInCart}
                setPriceForFree={(priceForFree) =>
                    setPriceForFree(priceForFree)
                }
            />
            <LoginModal openModal={openModal} onClose={() => onClose(false)} />
        </>
    );
}
