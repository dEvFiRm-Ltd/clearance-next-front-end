import React, { useEffect, useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../LoadingComponent/desktop";
import Orders from "./Parts/Orders";
import Coupons from "./Parts/Coupons";
import Addresses from "./Parts/Addresses";
import AddToCardModal from "../../card-modal/desktop";
import AddressModal from "./Parts/AddressModal";
import OrderModal from "./Parts/OrderModal";
import Profile from "./Parts/Profile";
import WishList from "./Parts/WishList/desktop";
import { useTranslation } from "react-i18next";
import WalletList from "./Parts/WalletList";
import ReturnModal from "./Parts/ReturnModal";

export default function OrderList({ orders, prevAddresses, tab }) {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("translation");
  const [activeBigTab, setActiveBigTab] = useState("order-list");
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [openOrderModalReturn, setOpenOrderModalReturn] = useState({ show:false, type: null });
  const [openDialogOrder, setIsOpenDialogOrder] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [address, setAddress] = useState(null);
  const [order, setOrder] = useState(null);
  const [userData, setUserData] = useState(null);
  const WishListReducer = useSelector(
    (state) => state?.ProductReducer?.WishList
  );
  const WalletListReducer = useSelector(
    (state) => state?.CheckoutReducer?.WalletList
  );
  const productLoading = useSelector(
    (state) => state?.ProductReducer?.productLoading
  );
  const handleCancelDelete = () => {
    setIsOpenDialog(false);
  };
  const handleCancelDeleteOrder = () => {
    setIsOpenDialogOrder(false);
  };
  const handleConfirmDeleteOrder = () => {
    if (order) {
      dispatch({ type: "DELETE_ORDER", payload: order.id });
    }
    setIsOpenDialogOrder(false);
  };
  const handleConfirmDelete = () => {
    if (address) {
      dispatch({ type: "DELETE_ADDRESS", payload: address.id });
    }
    setIsOpenDialog(false);
  };
  const handleActiveBigTab = (tab) => {
    setActiveBigTab(tab);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserData(
        JSON.parse(localStorage.getItem("CUSTOMER_INFO_STORAGE"))?.customerInfo
          ?.customer_info
      );
    }
  }, []);
  useEffect(() => {
    // console.log(tab, "tab");
    if(tab !== 'all'){
      setActiveBigTab(tab)
    }

  }, [tab]);

  useEffect(() => {
    // console.log(isOpenDialog, "isOpen");
    isOpenDialog
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpenDialog]);
  const [customerInfo, setCustomerInfo] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const info = JSON.parse(localStorage.getItem("CUSTOMER_INFO_STORAGE"));
      if (info?.customerInfo && info?.customerInfo?.starting_setting) {
        // Check if the state is already set before updating
        if (!customerInfo) {
          setCustomerInfo(
            info?.customerInfo?.starting_setting?.order_status_can_canceled
          );
        }
      }
    } else {
    }
  }, []);
  return (
    <div className="min-h-[100vh]">
      {orders ? (
        <div className="pt-[190px] p-40 md:flex py-5">
          {/* Sidebar */}
          <div className="mr-[60px] mb-5 md:mb-0 md:sticky md:top-0 md:h-screen">
            <div className="mr-[60px] justify-center items-start mb-5 flex flex-row md:flex-col">
              <div className="hidden md:block text-[rgb(147,147,147)] cursor-pointer text-[13px] mb-2.5">
                {t("user.Logout")}
              </div>
              <div className="hidden md:block text-[rgb(92,92,92)] text-[13px] tracking-[0.75px]">
                {t("user.Welcome_back")}
              </div>
              <div className="hidden md:block  mb-[30px]">
                {userData?.f_name + userData?.l_name || userData?.email}!
              </div>
              <div className={`  flex flex-row md:flex-col`}>
                <div
                  onClick={() => handleActiveBigTab("order-list")}
                  className={`${
                    activeBigTab === "order-list" ? "underline" : ""
                  } h-10 px-0 py-2 cursor-pointer pr-4`}
                >
                  {t("user.Order_List")}
                </div>
                {/*<div*/}
                {/*  onClick={() => handleActiveBigTab("coupon")}*/}
                {/*  className={`${*/}
                {/*    activeBigTab === "coupon" ? "underline" : ""*/}
                {/*  } h-10 px-0 py-2 cursor- pr-4`}*/}
                {/*>*/}
                {/*  Coupon*/}
                {/*</div>*/}
                <div
                  onClick={() => handleActiveBigTab("address")}
                  className={`${
                    activeBigTab === "address" ? "underline" : ""
                  } h-10 px-0 py-2 cursor-pointer pr-4`}
                >
                  {t("user.Address")}
                </div>
                <div
                  onClick={() => handleActiveBigTab("account")}
                  className={`${
                    activeBigTab === "account" ? "underline" : ""
                  } h-10 px-0 py-2 cursor-pointer w-fit`}
                >
                  {t("user.Change_Profile")}
                </div>
                <div
                  onClick={() => handleActiveBigTab("wish-list")}
                  className={`${
                    activeBigTab === "wish-list" ? "underline" : ""
                  } h-10 px-0 py-2 cursor-pointer w-fit`}
                >
                  {t("user.wishlist")}
                </div>
                <div
                  onClick={() => handleActiveBigTab("wallet")}
                  className={`${
                    activeBigTab === "wallet" ? "underline" : ""
                  } h-10 px-0 py-2 cursor-pointer w-fit`}
                >
                  {t("user.wallet")}
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-1 text-[rgb(92,92,92)] text-[15px]">
            {activeBigTab === "order-list" ? (
              <Orders
                orders={orders}
                activeTab={activeBigTab}
                openOrderModalReturn={({ show, type }) => setOpenOrderModalReturn({ show, type })}
                customerInfo={customerInfo}
                openOrderModal={() => setOpenOrderModal(true)}
                setOrder={(order) => setOrder(order)}
                setIsOpenDialog={() => setIsOpenDialogOrder(true)}
              />
            ) : activeBigTab === "coupon" ? (
              <Coupons />
            ) : activeBigTab === "address" ? (
              <Addresses
                openAddressModal={() => setOpenAddressModal(true)}
                setAddress={(address) => setAddress(address)}
                prevAddresses={prevAddresses}
                setIsEdit={(isEdit) => setIsEdit(isEdit)}
                setIsOpenDialog={() => setIsOpenDialog(true)}
              />
            ) : activeBigTab === "account" ? (
              <Profile />
            ) : activeBigTab === "wish-list" ? (
              <WishList WishLists={WishListReducer} />
            ) : activeBigTab === "wallet" ? (
              <WalletList WalletLists={WalletListReducer} />
            ) : null}
          </div>
        </div>
      ) : (
        ""
      )}
      <AddressModal
        show={openAddressModal}
        onClose={() => {
          setOpenAddressModal(false);
        }}
        addressId={address?.id}
        isEdit={isEdit}
        close={openAddressModal}
        address={address}
      />
      <OrderModal
        show={openOrderModal}
        onClose={() => {
          setOpenOrderModal(false);
        }}
        order={order}
        close={openOrderModal}
        address={address}
      />
      {isOpenDialog && (
        <ConfirmDialog
          message={"Are you sure you wish to delete this address?"}
          handleCancelDelete={handleCancelDelete}
          handleConfirmDelete={handleConfirmDelete}
          isOpen={isOpenDialog}
        />
      )}
      <ReturnModal
        width={"100%"}
        padding={true}
        show={openOrderModalReturn.show}
        type={openOrderModalReturn.type}
        onClose={() => {
          setOpenOrderModalReturn(false);
        }}
        order={order}
        close={openOrderModalReturn.show}
        address={address}
      />
      {openDialogOrder && (
        <ConfirmDialog
          message={"Are you sure you wish to cancel this order?"}
          handleCancelDelete={handleCancelDeleteOrder}
          handleConfirmDelete={handleConfirmDeleteOrder}
          isOpen={isOpenDialog}
        />
      )}
    </div>
  );
}
