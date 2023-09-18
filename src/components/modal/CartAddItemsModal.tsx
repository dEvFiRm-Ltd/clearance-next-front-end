"use client";
import React, { FC, useState } from "react";
import Modal from "../base/Modal";
import ModalBody from "../common/ModalBody";
import { commonModalProps } from "@/utils/type";
import FlashSaleCard from "../common/FlashSaleCard";
import CartModal from "./CartModal";
import Pagination from "../cartPage/Pagination";

const addItemArr = [
  {
    text: "this is the prefect choice for you",
    img: "https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-09-17-6506e3f8c2b64.png",
    salePrice: "10",
    price: "15",
    discount: "5",
    url: "",
  },
  {
    text: "this is the prefect choice for you",
    img: "https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-09-17-6506e3f8c2b64.png",
    salePrice: "10",
    price: "15",
    discount: "5",
    url: "",
  },
  {
    text: "this is the prefect choice for you",
    img: "https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-09-17-6506e3f8c2b64.png",
    salePrice: "10",
    price: "15",
    discount: "5",
    url: "",
  },
  {
    text: "this is the prefect choice for you",
    img: "https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-09-17-6506e3f8c2b64.png",
    salePrice: "10",
    price: "15",
    discount: "5",
    url: "",
  },
  {
    text: "this is the prefect choice for you",
    img: "https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-09-17-6506e3f8c2b64.png",
    salePrice: "10",
    price: "15",
    discount: "5",
    url: "",
  },
  {
    text: "this is the prefect choice for you",
    img: "https://sstorage.clearance.ae/production/storage/product/thumbnail/2023-09-17-6506e3f8c2b64.png",
    salePrice: "10",
    price: "15",
    discount: "5",
    url: "",
  },
];

const CartAddItemsModal: FC<commonModalProps> = ({
  closeStateCb,
  viewState,
}) => {
  const [modals, setModals] = useState(false);
  const [modalData, setModalData] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 265;

  const onPageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <Modal visible={viewState} closeCb={closeStateCb} title="">
      <ModalBody modalBodyClass="!w-[1200px] !px-[72px] !py-[27px]">
        <h1 className="text-xl lg:text-2xl xl:text-[32px] xl:leading-[38px] mb-5 text-black-primary font-bold text-center">
          Add Items
        </h1>
        <p className="text-black-primary text-base text-center">
          <i className="fa-solid fa-truck mr-2"></i>
          Spend <span className="font-bold text-[#DC2829]">30.63 AED</span>{" "}
          <span>more and get</span>{" "}
          <span className="font-bold uppercase text-[#DC2829]">
            FREE SHIPPING
          </span>
          ! <span>(Except final sale items)</span>
        </p>
        <div className="mt-8 w-full flex flex-row flex-wrap gap-y-[30px] gap-x-5">
          {addItemArr.map((item: any, idx: number) => (
            <FlashSaleCard
              key={idx}
              img={item.img}
              text={item.text}
              salePrice={item.salePrice}
              price={item.price}
              discount={item.discount}
              url={item.url}
              imgVariantSmall={true}
              actionCb={() => {
                //   setModalData(item);
                setModals(!modals);
              }}
              groupClass="w-40 md:w-52 lg:w-60 xl:w-[194px]"
              imgClass="!h-[259px]"
              btnClass="!w-[170px]"
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center gap-x-10 mt-8">
            <p>total of {totalPages} pages</p>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </div>
        <CartModal
          closeStateCb={() => {
            setModals(false);
          }}
          viewState={modals}
          data={modalData}
        />
      </ModalBody>
    </Modal>
  );
};

export default CartAddItemsModal;
