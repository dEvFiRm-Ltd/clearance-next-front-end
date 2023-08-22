import React, { useEffect, useState } from 'react';
import ModalBodyComponent from './Body';
import ItemDetail from './ItemDetail';
import RecentlyProduct from './RecentlyProducts';
import { useDispatch, useSelector } from 'react-redux';
import ShowedProduct from '../../Body/mobile/ShowedProduct';
import Toast from '../../../helpers/Toast/Big';
import { useTranslation } from 'react-i18next';
const ProductDetails = ({ product, recentlyProduct, openCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSizeRequired, setIsSizeRequired] = useState(
    product?.variation?.length > 0
  );
  const [qtyState, setQtyState] = useState(1);
  const toastMessage = useSelector((state) => state?.CartReducer.toastMessage);
  const [showToast, setShowToast] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setIsSizeRequired(product?.variation?.length > 0);
  }, [product]);
  function addToCart(product) {
    if (isSizeRequired) {
      if (selectedSize) {
        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            id: product?.id,
            quantity: qtyState || 1,
            choice_1: selectedSize?.type,
            openCart: true,
          },
        });
      } else {
        setShowToast({
          show: true,
          message: `${t('main.please_choose_the_size')}`,
        });
        setTimeout(() => {
          setShowToast({ show: false, message: '' });
        }, 4000);
      }
    } else {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id: product?.id,
          quantity: qtyState || 1,
          openCart: true,
        },
      });
    }
  }

  useEffect(() => {
    console.log(qtyState, 'qtyState');
  }, [qtyState]);
  const { t, i18n } = useTranslation('translation');
  return (
    <div className="px-10 bg-white flex justify-center items-center pt-[125px] pb-[100px]">
      <div className="w-full h-full">
        <ModalBodyComponent
          addProduct={(product) => addToCart(product)}
          setSelectedSize={(selectedSize) => setSelectedSize(selectedSize)}
          setQtyState={(qtyState) => setQtyState(qtyState)}
          qtyState={qtyState}
          isSizeRequired={isSizeRequired}
          setIsSizeRequired={(isSizeRequired) =>
            setIsSizeRequired(isSizeRequired)
          }
          selectedSize={selectedSize}
          product={product}
          showToast={showToast}
        />
        {product?.related_products?.length > 0 && (
          <div className="py-10">
            <RecentlyProduct
              recentlyProduct={product?.related_products}
              productId={product?.id}
              title={t('user.related_products')}
            />
          </div>
        )}
        {product?.similar_products?.length > 0 && (
          <div className="py-10">
            <RecentlyProduct
              recentlyProduct={product?.similar_products}
              productId={product?.id}
              title={t('user.similar_products')}
            />
          </div>
        )}
        {recentlyProduct?.length > 0 && (
          <div className="py-10">
            <RecentlyProduct
              recentlyProduct={recentlyProduct}
              productId={product?.id}
              title={t('user.recently_viewed')}
            />
          </div>
        )}
      </div>
      {showToast?.show && <Toast message={showToast?.message} timeout={4000} />}
      {toastMessage && <Toast message={toastMessage} timeout={4000} />}
    </div>
  );
};

export default ProductDetails;
