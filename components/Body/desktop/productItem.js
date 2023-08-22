import Link from '@/helpers/Link';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '@/store';
import React, { useEffect, useRef, useState } from 'react';
import AddToCardModal from '../../card-modal/desktop';
import CountFlashSale from './CountFlashSale';
import { HeartSVG } from '../../svgs';
import { useTranslation } from 'react-i18next';

export default function Product({ product, flashSale }) {
  let loading = useSelector((store) => store.LanguageReducer.loading);
  const AddOrRemoveHeart = useSelector(
    (store) => store.ProductReducer.AddOrRemoveHeart
  );
  const lang_code = store.getState().LanguageReducer.langCode;
  const [openModal, setOpenModal] = useState(false);
  const [timers, setTimers] = useState({});
  let [translations, setTranslations] = useState(
    store.getState().LanguageReducer.data[lang_code]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setTranslations(store.getState().LanguageReducer.data[lang_code]);
  }, [loading]);

  const handleClickCart = () => {
    setOpenModal(true);
    dispatch({
      type: 'PRODUCT_CART',
      payload: {
        id: product.id,
      },
    });
  };

  const [check, setCheck] = useState(product?.is_favourite);

  function setFavorite() {
    dispatch({
      type: 'FAVORITE_PRODUCT',
      payload: { id: product?.id, isFavorite: check },
    });
    setCheck(!check);
  }

  useEffect(() => {
    if (product?.is_favourite) {
      setCheck(true);
    }
  }, [product]);
  useEffect(() => {
    // if (
    //   AddOrRemoveHeart?.filter((HeartedProduct) => {
    //     return HeartedProduct === product?.id;
    //   })?.length > 0
    // ) {
    //   setCheck(true);
    // } else {
    //   // if (product?.is_favourite) {
    //   setCheck(false);
    //   // }
    // }
  }, [AddOrRemoveHeart]);

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

  const { t, i18n } = useTranslation('translation');
  return (
    <div className="cursor-pointer w-full h-full group relative bg-white aspect-[1/1] flex flex-col items-center hover:shadow-[0px_2px_12px_rgba(0,0,0,0.2)]">
      <div
        onClick={() => setFavorite()}
        className="absolute top-2 right-2 p-2 z-[1] flex items-center justify-center bg-gray-100 rounded-full"
      >
        <HeartSVG check={check} />
      </div>
      {100 - parseInt((product?.offer_price * 100) / product?.price) > 0 && (
        <div
          className={`style_discountTag__LG3NB z-10 ${getColor(
            product?.offer_price,
            product?.price
          )} `}
        >
          <span className={`style_discountTagInner__xrve6 notranslate`}>
            -{100 - parseInt((product?.offer_price * 100) / product?.price)} %
          </span>
        </div>
      )}
      <Link
        shallow
        className="w-full h-full block relative"
        href={`/product/${product?.slug}`}
      >
        <div className="group card h-full w-full">
          <>
            <img
              src={product?.thumbnail || product?.image}
              alt={product?.name}
              className="object-contain w-full h-full"
            />
            <img
              alt={product?.name}
              src={product?.thumbnail || product?.image}
              className="object-cover w-full h-full opacity-0 hover:opacity-[99999] absolute top-0"
            />
            {flashSale && <CountFlashSale pro={product} />}
          </>
        </div>
      </Link>
      {/*<div className="absolute left-0 top-3 px-1 py-[2px] bg-red-600 flex items-center justify-center">*/}
      {/*  <span className="text-base leading-[19px] text-white notranslate">*/}
      {/*    /!*{product.details}*!/*/}
      {/*  </span>*/}
      {/*</div>*/}
      <div
        onClick={handleClickCart}
        className="top-[40%]
         hidden group-hover:flex
          items-center justify-center
           h-[56px] w-auto min-w-[191px]
            2xl:min-w-[220px] max-w-[calc(100%-24px)]
             px-3 absolute left-1/2 -translate-x-1/2
              cursor-pointer rounded-[50px]
               bg-[#ebebeb] undefined"
        style={{ minWidth: '118px', height: '40px' }}
      >
        <p className="text-center text-base leading-4 text-black whitespace-normal 2xl:whitespace-nowrap">
          {t('main.add_to_pag')}
        </p>
      </div>
      <Link shallow href={`/product/${product?.slug}`}>
        <div className="bg-white p-3 flex flex-row w-full text-center items-center justify-center">
          <div className="w-full text-center">
            <div className="flex flex-wrap component__product-price notranslate product-item with-origin">
              <div className="w-full component__product-price-special">
                <h3 className="flex-1 text-left text-sm cm-goods-list-title truncate">
                  {product?.name}
                </h3>
                <span
                  className="component__product-price-currency"
                  id="custom-product-item-activity-price"
                />
                <span
                  className="component__product-price-number"
                  id="custom-product-item-price"
                >
                  {product?.offer_price_formatted}
                </span>
              </div>
              <div className="flex justify-center w-full">
                <div className="truncate component__product-price-origin config__origin-price">
                  {product?.price_formatted}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {
        <AddToCardModal
          show={openModal}
          onClose={() => {
            setOpenModal(false);
            dispatch({
              type: 'REMOVE_PRODUCT_CART',
              payload: null,
            });
          }}
          close={openModal}
          product={product}
        />
      }
    </div>
  );
}
