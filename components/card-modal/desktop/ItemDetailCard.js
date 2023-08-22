import React, { useEffect } from 'react';
import HTMLRenderer from '@/helpers/HTMLRenderer';
import Sizes from '../../Body/desktop/Sizes';
import Link from '@/helpers/Link';
import ModalBodyComponent from './ModalBodyComponent';
import { useTranslation } from 'react-i18next';
import QTY from '@/components/Body/desktop/qty';

const ItemDetailCard = ({
  details,
  product,
  setSelectedSize,
  selectedSize,
  showToast,
  setIsSizeRequired,
  isSizeRequired,
  setQtyState,
  qtyState,
}) => {
  useEffect(() => {
    // console.log(product, "product");
  }, [product]);
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
    <div className="flex flex-col w-full min-h-[100%] relative gap-6">
      <div>
        <div className="flex items-center flex-shrink-0 flex-grow-0">
          <h1
            className="break-words w-full cm-goods-detail-title-1 leading-6 line-clamp-2"
            title="Faux Denim Shirt Collar Casual Loose Denim Dress"
          >
            {product?.name}
          </h1>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col gap-2 relative">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex text-2xl font-[700] text-red-500 justify-center items-center notranslate cm-goods-detail-price">
                  {product?.offer_price_formatted}
                </p>
                <p className="component__product-price-origin flex justify-center items-center notranslate cm-goods-detail-price">
                  {product?.price_formatted}
                </p>{' '}
                {100 - parseInt((product?.offer_price * 100) / product?.price) >
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
                          (product?.offer_price * 100) / product?.price
                        )}{' '}
                      %
                    </span>
                  </div>
                )}
              </div>
              <Link href={`/product/${product?.slug}`}>
                <a className="flex items-center flex-1 justify-end cursor-pointer text-[#31353B]">
                  {t('main.detail')}
                  <svg
                    stroke="#31353B"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    className="rotate-180"
                  >
                    <path d="m20 8-8 8 8 8" strokeWidth={2} />
                  </svg>
                </a>
              </Link>
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
                <QTY
                  product={product}
                  selectedSize={selectedSize}
                  isSizeRequired={isSizeRequired}
                  qtyState={qtyState}
                  setQtyState={(qtyState) => setQtyState(qtyState)}
                />

              <div className="max-w-full flex relative justify-start items-center">
                <div className="max-w-full flex items-center">
                  {details && <HTMLRenderer htmlContent={product?.details} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetailCard;
