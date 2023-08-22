import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SvgCheckbox } from '../../svgs';
import { useTranslation } from 'react-i18next';
import Toast from '../../../helpers/Toast';
import { LoaderLogo } from '../../../helpers/Loader/Loading';
import { SwiperSlide } from 'swiper/react';

const PaymentType = ({ setPaymentType, shippingCart, setWalletSelected }) => {
    const { t, i18n } = useTranslation('translation');
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState({});
    const [walletBalance, setWalletBalance] = useState(0);
    const [isWalletEnough, setIsWalletEnough] = useState(false);
    const [selected, setSelected] = useState(null);
    const [selectedWallet, setSelectedWallet] = useState(false);
    const [disableOthers, setDisableOthers] = useState(false);
    const [customerInfo, setCustomerInfo] = useState(null);
    const [paymentArray, setPaymentArray] = useState([]);
    const paymentTypes = useSelector(
        (state) => state.CheckoutReducer?.paymentTypes
    );
    const syncInfo = useSelector((state) => state.AuthReducer.syncInfo);
    const loadingInfo = useSelector((state) => state.AuthReducer.loadingInfo);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const info = JSON.parse(
                localStorage.getItem('CUSTOMER_INFO_STORAGE')
            );
            if (info?.customerInfo?.customer_info?.wallet_balance) {
                setWalletBalance(
                    info?.customerInfo?.customer_info?.wallet_balance
                );
            }
            if (info?.customerInfo) {
                setCustomerInfo(info?.customerInfo);
            }
            // setWalletBalance(10);
        }
    }, [syncInfo]);

    useEffect(() => {
        console.log(customerInfo, 'customerInfo');
    }, [customerInfo]);
    const handleSelectType = (paymentType) => {
        if (selected === paymentType) {
            setSelected(null);
            setPaymentType(null);
        } else {
            setSelected(paymentType);
            setPaymentType(paymentType);
        }
    };
    useEffect(() => {
        if (walletBalance > shippingCart?.total) {
            setIsWalletEnough(true);
            if (selectedWallet) {
                setDisableOthers(true);
            } else {
                setDisableOthers(false);
            }
        } else {
            setIsWalletEnough(false);
        }
    }, [isWalletEnough, selectedWallet, shippingCart]);
    useEffect(() => {
        setPaymentArray(paymentTypes);
    }, [paymentTypes]);
    useEffect(() => {
        if (isWalletEnough && selectedWallet) {
            setPaymentType('Wallet');
        } else if (!isWalletEnough && selectedWallet && selected) {
            setPaymentType(selected);
        } else {
            !selected && setPaymentType(null);
        }
    }, [isWalletEnough, selectedWallet]);

    function handleSelectWallet() {
        setSelectedWallet(!selectedWallet);
    }
    const isShowPayment = (paymentType) => {
        if (paymentType === 'COD') {
            return customerInfo?.starting_setting?.show_Cash_payment;
        }
        if (paymentType === 'Telr') {
            return customerInfo?.starting_setting?.show_payment_using_cards;
        }
        if (paymentType === 'Wallet') {
            return customerInfo?.starting_setting?.return_money_with_wallet;
        }
        if (paymentType === 'Postpay') {
            return customerInfo?.starting_setting?.show_payment_using_post_pay;
        }
    };
    useEffect(() => {
        setWalletSelected(selectedWallet);
    }, [selectedWallet]);

    useEffect(() => {
        if (!isWalletEnough && selectedWallet && !selected) {
            setShowToast({
                show: true,
                message: t('user.wallet_balance_not'),
            });
            setTimeout(() => {
                setShowToast({ show: false, message: '' });
            }, 2000);
        }
    }, [selectedWallet]);
    return (
        <div
            id="payment__list__wrapper"
            className="indexstyle-sc-1x1njrq-0 OlrHu"
        >
            <div className="indexstyle-sc-172cmbz-0 kmQwZW">
                <div className="pay-title">
                    <div className="pay-title-left">
                        <span className="pay-panpal-step notranslate">3</span>
                        <p className="pay-name">{t('user.payment_type')}</p>
                    </div>
                    <div className="pay-title-right" />
                </div>
                <div className="pay-panpel-content">
                    <div className="content-info-pc  cursor-pointer">
                        <div className="indexstyle-sc-1dhgsks-0 hyYLQV">
                            <div className="indexstylepc-xeg0r6-0 guQywE">
                                <div className="payment-radio-list cursor-pointer">
                                    {paymentArray?.length > 0 && (
                                        <>
                                            {paymentArray.map(
                                                (paymentType, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={`${
                                                                disableOthers
                                                                    ? ' disabled'
                                                                    : '  cursor-pointer'
                                                            } ${
                                                                paymentType ===
                                                                'Wallet'
                                                                    ? ' hidden'
                                                                    : ' '
                                                            } ${
                                                                isShowPayment(
                                                                    paymentType
                                                                )
                                                                    ? ''
                                                                    : ' hidden'
                                                            }  no-combined-payment`}
                                                        >
                                                            <label
                                                                onClick={() =>
                                                                    handleSelectType(
                                                                        paymentType
                                                                    )
                                                                }
                                                                className="cursor-pointer"
                                                            >
                                                                <SvgCheckbox
                                                                    click={
                                                                        selected ===
                                                                        paymentType
                                                                    }
                                                                />
                                                                <div className="main-info">
                                                                    <div className="main-info-content">
                                                                        <div className="main-info-price">
                                                                            {paymentType ===
                                                                            'COD' ? (
                                                                                <img
                                                                                    alt="creditcard"
                                                                                    src="/image/catalog/activity/cash.png"
                                                                                />
                                                                            ) : paymentType ===
                                                                              'Telr' ? (
                                                                                <img
                                                                                    alt="creditcard"
                                                                                    src="/image/catalog/activity/Telr.jpg"
                                                                                />
                                                                            ) : paymentType ===
                                                                              'Postpay' ? (
                                                                                <img
                                                                                    alt="creditcard"
                                                                                    src="/image/catalog/activity/postpay.jpeg"
                                                                                />
                                                                            ) : null}
                                                                        </div>
                                                                        <div></div>
                                                                        <div
                                                                            className={` main-info-title`}
                                                                        >
                                                                            <span className="first">
                                                                                {paymentType ===
                                                                                'Postpay'
                                                                                    ? 'Postpay. Credit/Debit'
                                                                                    : paymentType}
                                                                            </span>
                                                                            <span className="first text-sm">
                                                                                {paymentType ===
                                                                                'Postpay'
                                                                                    ? 'Buy Now Pay Later 3 Instalments'
                                                                                    : null}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    );
                                                }
                                            )}
                                            <div
                                                className={`${
                                                    walletBalance === 0
                                                        ? ' disabled'
                                                        : '  cursor-pointer'
                                                } no-combined-payment`}
                                            >
                                                <label
                                                    onClick={() =>
                                                        handleSelectWallet()
                                                    }
                                                    className="cursor-pointer"
                                                >
                                                    <SvgCheckbox
                                                        click={selectedWallet}
                                                    />
                                                    <div className="main-info">
                                                        <div className="main-info-content">
                                                            <div className="main-info-price">
                                                                <img
                                                                    alt="creditcard"
                                                                    src="/image/catalog/activity/Wallet.jpg"
                                                                />
                                                            </div>
                                                            <div></div>
                                                            <div
                                                                className={` main-info-title`}
                                                            >
                                                                <div className="flex gap-x-2">
                                                                    <span className="first">
                                                                        {t(
                                                                            'user.wallet'
                                                                        )}
                                                                    </span>
                                                                    {loadingInfo ? (
                                                                        <div className=" w-full ">
                                                                            <LoaderLogo
                                                                                width={
                                                                                    '100%'
                                                                                }
                                                                                height={
                                                                                    '100%'
                                                                                }
                                                                                viewBox={
                                                                                    '0 0 110 15'
                                                                                }
                                                                                rotate={
                                                                                    '200'
                                                                                }
                                                                            />
                                                                        </div>
                                                                    ) : (
                                                                        <span className="first text-sm font-[400]">
                                                                            (
                                                                            {t(
                                                                                'user.wallet_balance_is'
                                                                            )}
                                                                            :{' '}
                                                                            {
                                                                                walletBalance
                                                                            }{' '}
                                                                            AED
                                                                            )
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 flex items-center justify-center w-[100%]">
                {showToast?.show && (
                    <Toast message={showToast?.message} timeout={2000} />
                )}
            </div>
        </div>
    );
};
export default PaymentType;
