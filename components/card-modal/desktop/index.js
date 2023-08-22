import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes, css } from 'styled-components';
import ModalBodyComponent from './ModalBodyComponent';
import LoadingComponent from '../../LoadingComponent/desktop';
import { useDispatch, useSelector } from 'react-redux';
import ItemDetailCard from './ItemDetailCard';
import Toast from '../../../helpers/Toast/Big';
import { useTranslation } from 'react-i18next';

const AddToCardModal = ({ show, onClose, close, product }) => {
  const dispatch = useDispatch();
  const [qtyState, setQtyState] = useState(1);
  const [isBrowser, setIsBrowser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSizeRequired, setIsSizeRequired] = useState(
    product?.variation?.length > 0
  );
  useEffect(() => {
    setIsSizeRequired(product?.variation?.length > 0);
  }, [product]);
  const cartLoading = useSelector((state) => state?.CartReducer?.cartLoading);
  const cartProduct = useSelector((state) => state?.CartReducer?.cartProduct);
  const addedToCart = useSelector((state) => state?.CartReducer?.addedToCart);
  useEffect(() => {
    setIsBrowser(true);
    show
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [show]);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [show]);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
    setLoading(true);
    setSelectedSize('');
  };

  const [showToast, setShowToast] = useState({});
  const _closeAfterSuccess = () => {
    if (addedToCart && !cartLoading) {
      onClose();
      dispatch({ type: 'RESET_ADDED_TO_CART' });
    }
  };

  useEffect(() => {
    if (addedToCart) {
      _closeAfterSuccess();
    }
  }, [addedToCart, cartLoading]);
  function handleClose() {
    // setOpenCartModal(false);
    setSelectedSize('');
    dispatch({
      type: 'REMOVE_PRODUCT_CART',
      payload: null,
    });
    setSelectedSize('');
    // setIsSizeRequired(false);
  }
  const { t, i18n } = useTranslation('translation');
  function addToCart(product) {
    if (isSizeRequired) {
      if (selectedSize) {
        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            id: product?.id,
            quantity: qtyState || 1,
            choice_1: selectedSize?.type,
            openCart: false,
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
          openCart: false,
        },
      });
    }
  }
  useEffect(() => {
    // console.log(selectedSize, "selectedSize");
  }, [selectedSize]);
  const modalContent = show ? (
    <StyledModalOverlay isModalOpen={show}>
      <ModalContainer isModalOpen={show}>
        <StyledModal>
          <StyledModalHeader>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </StyledModalHeader>
          <StyledModalBody>
            {!cartLoading ? (
              <ModalBodyComponent
                isSizeRequired={isSizeRequired}
                qtyState={qtyState}
                setQtyState={(qtyState) => setQtyState(qtyState)}
                setLoading={() => setLoading(true)}
                addToCart={(product) => addToCart(product)}
                setSelectedSize={(selectedSize) =>
                  setSelectedSize(selectedSize)
                }
                setIsSizeRequired={(isSizeRequired) =>
                  setIsSizeRequired(isSizeRequired)
                }
                selectedSize={selectedSize}
                onClose={() => onClose(close)}
                loading={cartLoading}
                product={cartProduct}
                cartProduct={cartProduct}
                showToast={showToast}
              />
            ) : (
              <LoadingComponent />
            )}
            {showToast?.show && (
              <Toast message={showToast?.message} timeout={4000} />
            )}
          </StyledModalBody>
        </StyledModal>
      </ModalContainer>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;
const shrinkOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
`;
const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const zoomInOverlay = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const zoomOutOverlay = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
`;
const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1111;
  opacity: 1111;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ isModalOpen }) =>
    isModalOpen
      ? css`
          ${zoomIn} 0.4s ease-in-out forwards
        `
      : css`
          ${shrinkOut} 0.4s ease-in-out forwards
        `};
`;

const StyledModal = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 15px;
  padding: 15px;
  z-index: 1111;
  opacity: 1111;
  overflow-y: hidden;
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ isModalOpen }) => (isModalOpen ? 1111 : 0)};
  overflow: auto;
  justify-content: center;
  align-items: center;
  background-color: ${({ isModalOpen }) =>
    isModalOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  transition: all 0.4s ease-in-out;
`;

export default AddToCardModal;
