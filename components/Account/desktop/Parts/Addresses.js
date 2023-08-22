import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../../LoadingComponent/mobile";

const Addresses = ({
  openAddressModal,
  setAddress,
  setIsEdit,
  setIsOpenDialog,
}) => {
  const dispatch = useDispatch();
  const checkoutLoading = useSelector(
    (state) => state.CheckoutReducer.checkoutLoading
  );
  const prevAddresses = useSelector(
    (state) => state.CheckoutReducer.prevAddresses
  );
  const handleEdit = (address) => {
    // console.log(address);
    setAddress(address);
    openAddressModal(true);
    setIsEdit(true);
  };
  const handleSetAsDefault = (address) => {
    dispatch({
      type: "SET_DEFAULT_ADDRESS",
      payload: address?.id,
    });
  };
  const handleDelete = (address) => {
    console.log(address);
    setAddress(address);
    setIsOpenDialog(true);
  };
  const handleOpenModal = () => {
    openAddressModal(true);
    setIsEdit(false);
  };
  return (
    <>
      {/* {checkoutLoading && <LoadingComponent />} */}
      <h3 className="text-[rgb(49,53,60)] text-2xl font-semibold leading-[29px] mb-6 pb-4 border-b-2 border-b-[rgb(93,98,106)] border-solid">
        <span>Shipping Address</span>
      </h3>
      <div className="layout-container">
        <button
          onClick={handleOpenModal}
          className="bg-[rgb(51,51,51)] flex items-center justify-center min-h-[48px] border cursor-pointer text-[12px] font-semibold leading-[normal] max-w-full overflow-hidden relative text-center no-underline text-ellipsis transition-all duration-[0.3s] ease-[ease] delay-[0s] whitespace-nowrap z-[1] text-white tracking-[1px] mx-auto my-0 px-2.5 py-[9px] border-solid border-[rgb(49,53,60)]"
        >
          <div className=" inline-block pointer-events-none overflow-hidden text-ellipsis whitespace-nowrap max-w-full font-semibold">
            Add New Address
          </div>
        </button>
        <div className="indexstyle-hvg5dr-0 iVNrrO">
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-2">
            {prevAddresses?.length > 0 &&
              prevAddresses?.map((prevAddress) => {
                return (
                  <div className="border text-[rgb(92,92,92)] text-[15px] mr-[15px] mb-[15px] px-5 py-2.5 border-solid border-[rgb(231,231,231)]">
                    <div className="text-[rgb(51,51,51)] text-base mb-3">
                      Contact Person Name: {prevAddress.contact_person_name} <div></div>
                    </div>
                    {prevAddress?.is_default === 1 ? "default" : null}
                    {prevAddress?.is_default === 1 ? <br /> : null}
                    Address: {prevAddress.address}
                    <br />
                    Address Type: {prevAddress.address_type}
                    <br />
                    Country: {prevAddress.country}
                    <br />
                    City: {prevAddress.city}
                    <br />
                    Phone: {prevAddress.phone}
                    <div className="mt-6">
                      <button
                        onClick={() => handleEdit(prevAddress)}
                        className="w-full hidden hover:underline align-super flex items-center justify-center text-black cursor-pointer text-[13px] font-semibold max-w-full overflow-hidden relative text-center no-underline text-ellipsis uppercase transition-all duration-[0.3s] ease-[ease] delay-[0s] whitespace-nowrap z-[1] tracking-[1px] leading-[unset] min-h-0 mr-5 pt-0 pb-px px-0 rounded-none border-t-[initial] border-b-[rgb(147,147,147)] border-x-[initial] border-[0px_0px_1px]"
                      >
                        <div className="inline-block pointer-events-none overflow-hidden text-ellipsis whitespace-nowrap max-w-full font-semibold">
                          Edit
                        </div>
                      </button>

                      <button
                        onClick={() => handleDelete(prevAddress)}
                        className="hover:underline align-super flex items-center justify-center text-black cursor-pointer text-[13px] font-semibold max-w-full overflow-hidden relative text-center no-underline text-ellipsis uppercase transition-all duration-[0.3s] ease-[ease] delay-[0s] whitespace-nowrap z-[1] tracking-[1px] leading-[unset] min-h-0 mr-5 pt-0 pb-px px-0 rounded-none border-t-[initial] border-b-[rgb(147,147,147)] border-x-[initial] border-[0px_0px_1px]"
                      >
                        <div className="font-semibold">
                          Delete
                        </div>
                      </button>
                      <button
                        onClick={() => handleSetAsDefault(prevAddress)}
                        className={`${
                          prevAddress?.is_default === 1 ? "hidden" : ""
                        } hover:underline flex items-center justify-center text-black cursor-pointer text-[13px] relative w-full right-0 `}
                      >
                        <div className=" inline-block pointer-events-none overflow-hidden text-ellipsis whitespace-nowrap max-w-full font-semibold">
                          SET AS DEFAULT
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Addresses;
