import React, { useEffect, useState } from 'react';
import HTMLRenderer from '@/helpers/HTMLRenderer';
import Sizes from '../../Body/desktop/Sizes';
import QTY from '../../Body/desktop/qty';
import Link from '@/helpers/Link';
import { SvgLoader } from '../../svgs';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CountFlashSale from '../../Body/desktop/CountFlashSale';
import { useRouter } from 'next/navigation';

const ItemDetailCard = ({
    details,
    product,
    setSelectedSize,
    selectedSize,
    setIsSizeRequired,
    showToast,
    isSizeRequired,
    setQtyState,
    qtyState,
    addToCart,
}) => {
    const productLoading = useSelector(
        (state) => state?.CartReducer?.cartLoading
    );
    useEffect(() => {
        // console.log(product, "product");
    }, [product]);
    const handleAddToCart = () => {
        addToCart(product);
    };
    function getColor(offer_price, price) {
        const num = 100 - parseInt((offer_price * 100) / price);
        switch (true) {
            case 0 < num && num < 39:
                return 'bg-green-600';
            case 38 < num && num < 74:
                return 'bg-yellow-400';
            case 73 < num && num < 89:
                return 'bg-orange-600';
            case 88 < num && num < 101:
                return 'bg-red-600';
            default:
                return '';
        }
    }
    const router = useRouter();
    const [offerPriceState, setOfferPriceState] = useState('');
    const [priceState, setPriceState] = useState('');
    const shippingCart = useSelector((store) => store.CartReducer.shippingCart);
    const addedToCart = useSelector((store) => store.CartReducer.addedToCart);
    const [buy, setBuy] = useState(false);
    function handleBuy() {
        setBuy(true);
        addToCart(product);
    }
    const dispatch = useDispatch();
    useEffect(() => {
        if (product && selectedSize) {
            setOfferPriceState(selectedSize?.offer_price_formated);
            setPriceState(selectedSize?.price_formated);
        } else {
            setOfferPriceState(product?.offer_price_formatted);
            setPriceState(product?.price_formatted);
        }
    }, [product, selectedSize]);
    useEffect(() => {
        if (addedToCart && buy) {
            dispatch({ type: 'RESET_ADDED_TO_CART' });
            dispatch({ type: 'START_LOADING_PRODUCT' });
            router.push('/payment-method');
        }
    }, [buy, addedToCart]);

    const syncInfo = useSelector((state) => state.AuthReducer.syncInfo);
    const [customerInfo, setCustomerInfo] = useState(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const info = JSON.parse(
                localStorage.getItem('CUSTOMER_INFO_STORAGE')
            );
            if (info?.customerInfo) {
                setCustomerInfo(info?.customerInfo);
            }
        }
    }, [syncInfo]);
    const { t, i18n } = useTranslation('translation');
    return (
        <div className="flex flex-col w-full min-h-[100%] relative gap-6">
            <div className="h-full">
                <div className="gap-x-4 flex items-center flex-shrink-0 flex-grow-0">
                    <h1
                        className="break-words cm-goods-detail-title-1 leading-6 line-clamp-2"
                        title="Faux Denim Shirt Collar Casual Loose Denim Dress"
                    >
                        {product?.name}
                    </h1>
                    <div className="relative p-4 w-[50%] ">
                        {product?.flash_deal_details && (
                            <CountFlashSale Upper={true} h={0} pro={product} />
                        )}
                    </div>
                </div>

                <div className="flex flex-col mt-4">
                    <div className="flex flex-col gap-2 relative">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                <span
                                    className="text-red-600 font-[600] text-2xl"
                                    id="custom-product-detail-price"
                                >
                                    {offerPriceState}
                                </span>
                                <p className="flex justify-center items-center component__product-price-origin notranslate cm-goods-detail-price">
                                    {priceState}
                                </p>{' '}
                            </div>
                            {100 -
                                parseInt(
                                    (product?.offer_price * 100) /
                                        product?.price
                                ) >
                                0 && (
                                <div
                                    className={`relative top-0 style_discountTag__LG3NB_mobile z-5 ${getColor(
                                        product?.offer_price,
                                        product?.price
                                    )} `}
                                >
                                    <span
                                        className={`style_discountTagInner__xrve6_mobile notranslate`}
                                    >
                                        -
                                        {100 -
                                            parseInt(
                                                (product?.offer_price * 100) /
                                                    product?.price
                                            )}{' '}
                                        %
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="empty:hidden">
                            <div className="max-w-full flex relative justify-start items-center">
                                <div className="max-w-full flex items-center"></div>
                            </div>
                            <Sizes
                                product={product}
                                showToast={showToast}
                                selectedSize={selectedSize}
                                setSelectedSize={(selectedSize) =>
                                    setSelectedSize(selectedSize)
                                }
                                setIsSizeRequired={(isSizeRequired) =>
                                    setIsSizeRequired(isSizeRequired)
                                }
                            />
                            <div className="flex flex-col justify-start gap-y-2">
                                <QTY
                                    product={product}
                                    isSizeRequired={isSizeRequired}
                                    selectedSize={selectedSize}
                                    qtyState={qtyState}
                                    setQtyState={(qtyState) =>
                                        setQtyState(qtyState)
                                    }
                                />

                                {offerPriceState && (
                                    <div
                                        className={`${
                                            customerInfo?.starting_setting
                                                ?.show_payment_using_post_pay
                                                ? ''
                                                : 'hidden'
                                        } main-info pr-[15px]`}
                                    >
                                        <div className="flex items-start justify-start pl-[15px] space-x-2">
                                            <div className="w-40 h-15 ">
                                                <img
                                                    className="w-full h-full object-contain"
                                                    alt="creditcard"
                                                    src="/image/catalog/activity/postpay.jpeg"
                                                />
                                            </div>
                                            <div
                                                className={`flex flex-col space-x-2`}
                                            >
                                                <span className="pl-2 text-green-400">
                                                    Postpay. Credit/Debit
                                                </span>
                                                <span className="text-green-400">
                                                    Buy{' '}
                                                    {(
                                                        (parseInt(
                                                            offerPriceState
                                                        ) *
                                                            qtyState) /
                                                        3
                                                    )?.toFixed(1)}{' '}
                                                    Now Pay Later 3 Instalments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="max-w-full flex relative justify-start items-center">
                                <div className="max-w-full flex items-center">
                                    {details && (
                                        <HTMLRenderer
                                            htmlContent={product?.details}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex relative justify-center self-stretch flex-grow-0 flex-shrink-0 gap-4 bottom-0 left-0  purchase-btn mt-2 sticky pt-2 bg-white bg-opacity-95 flex-grow items-end">
                    <button
                        onClick={handleAddToCart}
                        className="flex justify-center items-center overflow-hidden rounded disabled:opacity-20 disabled:cursor-not-allowed hover:opacity-80 active:opacity-90 active:shadow-[inset_0px_0px_8px_rgba(0,0,0,0.25)] group cm-btn-primary flex-grow h-12 gap-1"
                    >
                        <div className="inline-block truncate opacity-1 group-active:opacity-90">
                            {productLoading ? (
                                <p className=" flex-grow-0 flex-shrink-0 text-lg font-bold">
                                    <SvgLoader />
                                </p>
                            ) : (
                                <p className="text-white flex-grow-0 flex-shrink-0 text-lg font-bold">
                                    {t('user.add_to_cart')}
                                </p>
                            )}
                        </div>
                    </button>
                    <button
                        onClick={handleBuy}
                        className="flex justify-center items-center overflow-hidden rounded disabled:opacity-20 disabled:cursor-not-allowed hover:opacity-80 active:opacity-90 active:shadow-[inset_0px_0px_8px_rgba(0,0,0,0.25)] group cm-btn-second border h-12 px-3"
                    >
                        <div className="inline-block truncate opacity-1 group-active:opacity-90">
                            {t('user.buy_now')}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ItemDetailCard;
