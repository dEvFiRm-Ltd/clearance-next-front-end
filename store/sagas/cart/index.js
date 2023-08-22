import { all, fork, put, takeEvery } from "@redux-saga/core/effects";
import { fetchDataError } from "../../actions";
import API from "@/helpers/API";
import {
  AddedCart,
  fetchCartProduct,
  fetchShippingCart,
  removeCartProduct,
  startCartLoading,
  stopCartLoading,
} from "../../actions/cart";
import store from "@/store/index";

//################# Start QuickProduct #################//

function* fetchQuickProductSaga(action) {
  const id = action.payload.id;
  try {
    yield put(startCartLoading());
    const cartProduct = yield API.get(`api/v10/products/quickView/${id}`);
    yield put(fetchCartProduct({ cartProduct: cartProduct?.data }));
    yield put(stopCartLoading());
  } catch (error) {
    // console.log(error);
    yield put(fetchDataError(error));
    yield put(stopCartLoading());
  }
}

function* QuickProductWatch() {
  yield takeEvery("PRODUCT_CART", fetchQuickProductSaga);
}

//################# End QuickProduct #################//

//################# Start Remove #################//

function* RemoveCartProductSaga() {
  try {
    const Toast = store.getState()?.CartReducer?.toastMessage;
    if (!Toast) {
      yield put(removeCartProduct({ cartProduct: null }));
    }
  } catch (error) {
    // console.log(error);
    yield put(fetchDataError(error));
  }
}

function* RemoveCartProductWatch() {
  yield takeEvery("REMOVE_PRODUCT_CART", RemoveCartProductSaga);
}

//################# End Remove #################//

//################# Start Add To Cart  #################//

function* fetchAddToCartSaga(action) {
  yield put(startCartLoading());
  // console.log(action, "action");
  const id = action.payload.id;
  const choice_1 = action.payload.choice_1;
  const quantity = action.payload.quantity;
  const openCart = action.payload.openCart;
  try {
    const Add = yield API.post(`api/v10/cart/add`, {
      id,
      quantity,
      choice_1,
    });
    yield put(stopCartLoading());
    if (
      Add.data.message?.includes("Successfully") ||
      Add.data.message?.includes("بنجاح")
    ) {
      yield put(AddedCart());
      // console.log(Add.data.message, "222");
      if (openCart) {
        store.dispatch({ type: "OPEN_CART" });
      }
    }
    store.dispatch({ type: "SYNC" });
  } catch (error) {
    // console.log(error);
    yield put(fetchDataError(error));
    yield put(stopCartLoading());
    yield put(AddedCart());
  }
}

function* AddToCartWatch() {
  yield takeEvery("ADD_TO_CART", fetchAddToCartSaga);
}

//################# End Add To Cart #################//
//################# Start Delete Form Cart  #################//

function* DeleteFromCart(action) {
  yield put(startCartLoading());
  const key = action.payload.id;
  try {
    yield API.post(`api/v10/cart/remove`, {
      key,
    });
    yield put(stopCartLoading());
    store.dispatch({ type: "SYNC" });
    store.dispatch({ type: "GET_ITEMS_CART" });
  } catch (error) {
    // console.log(error);
    yield put(fetchDataError(error));
    yield put(stopCartLoading());
  }
}

function* DeleteFromCartWatch() {
  yield takeEvery("DELETE_FROM_CART", DeleteFromCart);
}

//################# End Delete Form Cart #################//
//################# Start Update Item In Cart  #################//

function* UpdateItemInCart(action) {
  yield put(startCartLoading());
  const key = action.payload.id;
  const quantity = action.payload.quantity;
  try {
    yield API.post(`api/v10/cart/update`, {
      key,
      quantity,
    });
    const updatedShippingCart = yield API.get(`api/v10/cart/cart_shipping`);
    yield put(fetchShippingCart({ shippingCart: updatedShippingCart?.data }));
    yield put(stopCartLoading());
    // store.dispatch({ type: "SYNC" });
    if (updatedShippingCart?.data) {
      const coupon = localStorage.getItem("COUPON");
      if (coupon) {
        store.dispatch({ type: "APPLY_COUPON", payload: coupon });
      }
    }
  } catch (error) {
    // console.log(error);
    yield put(fetchDataError(error));
    yield put(stopCartLoading());
  }
}

function* UpdateItemInCartWatch() {
  yield takeEvery("UPDATE_ITEM_IN_CART", UpdateItemInCart);
}

function* UpdateItemInOrder(action) {
  yield store.dispatch({ type: "START_LOADING_CHECKOUT" });
  const data = action.payload.data;
  try {
    const updatedOrder = yield API.post(`api/v10/order/cancel-item`, data);
    yield store.dispatch({ type: "GET_ORDERS_SAGA" });
    if (updatedOrder?.data){
      yield store.dispatch({ type: "STOP_LOADING_CHECKOUT" });
    }
  } catch (error) {
    // console.log(error);
    yield put(fetchDataError(error));
    yield store.dispatch({ type: "STOP_LOADING_CHECKOUT" });
  }
}

function* UpdateItemInOrderWatch() {
  yield takeEvery("UPDATE_ITEM_IN_ORDER", UpdateItemInOrder);
}

//################# End Update Item In Cart #################//
//################# Start ItemsCart Cart  #################//

function* fetchItemsCartSaga() {
  yield put(startCartLoading());
  try {
    const shippingCart = yield API.get(`api/v10/cart/cart_shipping`);
    yield put(fetchShippingCart({ shippingCart: shippingCart?.data }));
    // console.log(shippingCart?.data);
    store.dispatch({
      type: "PAYMENT_TYPES",
      payload: shippingCart?.data?.data?.available_payment_method,
    });
    yield put(stopCartLoading());
  } catch (error) {
    // console.log(error);
    yield put(fetchDataError(error));
    yield put(stopCartLoading());
  }
}

function* getItemsCartWatch() {
  yield takeEvery("GET_ITEMS_CART", fetchItemsCartSaga);
}

//################# End ItemsCart Cart #################//

function* applyCouponSaga(action) {
  const code = action.payload;
  yield put(startCartLoading());
  try {
    const apply = yield API.get(`api/v10/coupon/apply?code=${code}`);
    store.dispatch({ type: "GET_ITEMS_CART" });
    // console.log(apply);
    if (
      apply?.data?.messages?.includes("Successfully") ||
      apply?.data?.messages?.includes("نجاح")
    ) {
      localStorage.setItem("COUPON", code);
      const storedCouponCodesJSON = localStorage.getItem("COUPON_CODES");
      const storedCouponCodes = storedCouponCodesJSON
        ? JSON.parse(storedCouponCodesJSON)
        : [];

      if (!storedCouponCodes.includes(code)) {
        storedCouponCodes.push(code);

        localStorage.setItem("COUPON_CODES", JSON.stringify(storedCouponCodes));
      }
    }
    yield put(stopCartLoading());
  } catch (error) {
    // console.log(error);
    yield put(fetchDataError(error));
    yield put(stopCartLoading());
  }
}

function* applyCouponWatch() {
  yield takeEvery("APPLY_COUPON", applyCouponSaga);
}

//################# End ItemsCart Cart #################//

export function* CartSaga() {
  yield all([fork(QuickProductWatch)]);
  yield all([fork(UpdateItemInOrderWatch)]);
  yield all([fork(RemoveCartProductWatch)]);
  yield all([fork(applyCouponWatch)]);
  yield all([fork(AddToCartWatch)]);
  yield all([fork(DeleteFromCartWatch)]);
  yield all([fork(UpdateItemInCartWatch)]);
  yield all([fork(getItemsCartWatch)]);
}
