import React, { useEffect, useState } from 'react';
import CarouselItemsCard from './CarouselItems';
import ItemDetailCard from './ItemDetailCard';
import { store } from '@/store';
import ItemDetail from './ItemDetail';
import AddToCartButton from '../mobile/AddToCartButton';

const BodyComponent = ({
  setLoading,
  onClose,
  product,
  setSelectedSize,
  selectedSize,
  setIsSizeRequired,
  addProduct,
  isSizeRequired,
  setQtyState,
  qtyState,
  showToast,
}) => {
  function delay(t, val) {
    return new Promise((resolve) => setTimeout(resolve, t, val));
  }
  return (
    <div className="pt-10 gap-5 w-fit-content  h-fit-content flex items-start justify-center pb-[10px] w-full overflow-hidden">
      <div className="w-[48%] h-full h-auto ">
        <CarouselItemsCard product={product} />
      </div>
      <div className="w-[50%] h-full ">
        <div className="flex-1 relative">
          <ItemDetailCard
            setQtyState={(qtyState) => setQtyState(qtyState)}
            qtyState={qtyState}
            addToCart={(product) => addProduct(product)}
            product={product}
            showToast={showToast}
            selectedSize={selectedSize}
            isSizeRequired={isSizeRequired}
            setSelectedSize={(selectedSize) => setSelectedSize(selectedSize)}
            setIsSizeRequired={(isSizeRequired) =>
              setIsSizeRequired(isSizeRequired)
            }
          />

          <ItemDetail product={product} />
        </div>
      </div>
    </div>
  );
};
export default BodyComponent;
