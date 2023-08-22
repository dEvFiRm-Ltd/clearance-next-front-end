"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import LoadingComponent from "../../../LoadingComponent/mobile"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { useRouter, useParams } from "next/navigation"
import { log } from "next/dist/server/typescript/utils"

import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility"
import { LoaderLogo } from "../../../../helpers/Loader/Loading"

const Orders = ({
        activeTab,
        openOrderModal,
        setOrder,
        setIsOpenDialog,
        customerInfo,
        openOrderModalReturn,
}) => {
        // Create a ref for each status
        const params = useParams()
        const { status } = params
        const orderStatus = useSelector(
                state => state?.CheckoutReducer?.orderStatus
        )
        const sync = useSelector(state => state?.CheckoutReducer?.sync)
        const orderStatusTypes = useSelector(
                state => state?.CheckoutReducer?.orderStatusTypes
        )
        const orders = useSelector(state => state?.CheckoutReducer?.orders)
        const [isCancelOrder, setIsCancelOrder] = useState(false)
        const [orderId, setOrderId] = useState(null)
        const [buttonClicked, setButtonClicked] = useState(false)
        const [deleteConfirmed, setDeleteConfirmed] = useState(false)
        const dispatch = useDispatch()
        const checkoutLoading = useSelector(
                state => state.CheckoutReducer.checkoutLoading
        )
        const [active, setActive] = useState("all")
        const [orderFiltered, setOrderFiltered] = useState([])
        const [buttonStates, setButtonStates] = useState([])

        function formatString(inputString) {
                // console.log("formatString");
                const removeUnderscores = inputString.replace(/_/g, " ")

                const formattedString = removeUnderscores
                        .split(" ")
                        .map(
                                word =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                        )
                        .join(" ")

                return formattedString
        }

        const handleEdit = order => {
                setOrder(order)
                setOrderId(order?.id)
                // console.log(order?.id, "order?.id");
                openOrderModal(true)
        }
        const handleDelete = order => {
                // console.log("handleDelete");
                // console.log(order);
                setOrder(order)
                setIsOpenDialog(true)
        }
        SwiperCore.use([Navigation, Pagination])
        const navigationPrevRef = React.useRef(null)
        const navigationNextRef = React.useRef(null)
        const swiperOptions = {
                navigation: false,
                slidesPerView: "auto",
                pagination: false,
                spaceBetween: 10,
        }

        useEffect(() => {
                if (active === "all") {
                        setOrderFiltered(orders)
                } else {
                        const aa = orderStatusTypes[active]
                        setOrderFiltered(aa)
                }
        }, [active, orders])
        useEffect(() => {
                setOrderFiltered(orders)
        }, [orders])
        useEffect(() => {
                const order = orders.filter(one => one.id === orderId)[0]
                setOrder(order)
        }, [orders])

        function isShow(order) {
                if (customerInfo?.length > 0) {
                        return (
                                customerInfo?.filter(
                                        one => one === order?.order_status
                                )[0]?.length > 0
                        )
                }
        }

        function handleEditReturn(order, type) {
                setOrder(order)
                // setOrderId(order?.id);
                // console.log(order, "order");
                openOrderModalReturn({ show: true, type: type })
        }

        function handleDeleteReturn(order) {
                // setOrder(order);
                // setOrderId(order?.id);
                // console.log(order, "order");
                // openOrderModalReturn(true);
        }

        function handleAddReturn(order) {
                setOrder(order)
                // setOrderId(order?.id);
                // console.log(order, "order");
                openOrderModalReturn({ show: true, type: "Add" })
        }

        const handleClick = index => {
                const newButtonStates = [...buttonStates]
                newButtonStates[index] = !newButtonStates[index]
                setButtonStates(newButtonStates)

                setDeleteConfirmed(false)
        }

        function handleDeleteReturnRequest(order) {
                setButtonStates([])
                dispatch({
                        type: "DELETE_RETURN_REQUEST",
                        payload: { id: order?.return_request_id },
                })
        }

        return (
                <>
                        {checkoutLoading && <LoadingComponent />}
                        <h3 className="text-[rgb(49,53,60)] text-2xl font-semibold leading-[29px] mb-6 pb-4 border-b-2 border-b-[rgb(93,98,106)] border-solid">
                                <span>Order List</span>
                        </h3>
                        <Swiper
                                className="sideer"
                                wrapperClass="swiper-wrapper swiper-wrapper-side"
                                {...swiperOptions}
                        >
                                {!orderStatus?.length > 0 && checkoutLoading ? (
                                        <SwiperSlide className=" w-auto ">
                                                <LoaderLogo
                                                        width={60}
                                                        height={40}
                                                        viewBox={"0 0 400 150"}
                                                        rotate={"200"}
                                                />
                                        </SwiperSlide>
                                ) : (
                                        <SwiperSlide
                                                onClick={() => setActive("all")}
                                                className={`${
                                                        orderStatus?.length > 0
                                                                ? ""
                                                                : "hidden "
                                                } ${
                                                        active === "all"
                                                                ? "bg-black text-white p-3 rounded-[5px] "
                                                                : "bg-white text-black p-3 rounded-[5px] "
                                                }  flex cursor-pointer flex-col w-auto justify-center items-center`}
                                                aria-hidden="true"
                                        >
                                                <div>
                                                        <span className="w-full break-words text-center">
                                                                All
                                                        </span>
                                                        <span className="absolute right-0 z-[9999] top-[0] flex justify-center items-center h-[16px] min-w-[16px] px-1 gap-2.5 py-px rounded-[40px] bg-red-600 text-xs text-white notranslate">
                                                                {orders.length}
                                                        </span>
                                                </div>
                                        </SwiperSlide>
                                )}
                                {/*!orderStatus?.length > 0*/}
                                {!orderStatus?.length > 0 && checkoutLoading ? (
                                        <>
                                                <SwiperSlide className=" w-auto ">
                                                        <LoaderLogo
                                                                width={60}
                                                                height={40}
                                                                viewBox={
                                                                        "0 0 400 150"
                                                                }
                                                                rotate={"200"}
                                                        />
                                                </SwiperSlide>
                                                <SwiperSlide className=" w-auto ">
                                                        <LoaderLogo
                                                                width={60}
                                                                height={40}
                                                                viewBox={
                                                                        "0 0 400 150"
                                                                }
                                                                rotate={"200"}
                                                        />
                                                </SwiperSlide>
                                                <SwiperSlide className=" w-auto ">
                                                        <LoaderLogo
                                                                width={60}
                                                                height={40}
                                                                viewBox={
                                                                        "0 0 400 150"
                                                                }
                                                                rotate={"200"}
                                                        />
                                                </SwiperSlide>
                                        </>
                                ) : (
                                        orderStatus?.map(one => {
                                                return (
                                                        one.count_orders !==
                                                                0 && (
                                                                <SwiperSlide
                                                                        onClick={() =>
                                                                                setActive(
                                                                                        one?.status
                                                                                )
                                                                        }
                                                                        className={`${
                                                                                active ===
                                                                                one?.status
                                                                                        ? "bg-black text-white p-3 rounded-[5px] "
                                                                                        : "bg-white text-black p-3 rounded-[5px] "
                                                                        } flex flex-col cursor-pointer w-auto justify-center items-center`}
                                                                >
                                                                        <div aria-hidden="true">
                                                                                <span className="w-full break-words text-center">
                                                                                        {formatString(
                                                                                                one?.status
                                                                                        )}
                                                                                </span>
                                                                        </div>
                                                                        <span className="absolute right-0 z-[9999] top-[0] flex justify-center items-center h-[16px] min-w-[16px] px-1 gap-2.5 py-px rounded-[40px] bg-red-600 text-xs text-white notranslate">
                                                                                {
                                                                                        one.count_orders
                                                                                }
                                                                        </span>
                                                                </SwiperSlide>
                                                        )
                                                )
                                        })
                                )}
                        </Swiper>
                        {!orderFiltered?.length > 0 && !checkoutLoading ? (
                                <div
                                        className={`${
                                                orderFiltered?.length > 0 ||
                                                checkoutLoading
                                                        ? ""
                                                        : "hidden"
                                        } flex flex-col space-y-4 pt-20 h-full items-center justify-center`}
                                >
                                        <img
                                                alt="sad"
                                                src="/image/catalog/activity/empty-order.png"
                                        />
                                        <span>it is empty here</span>
                                </div>
                        ) : //  !orderFiltered?.length > 0 && checkoutLoading
                        !orderFiltered?.length > 0 && checkoutLoading ? (
                                <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-2">
                                        <div className="w-[330px] h-[220px] border border-b-[#e7e7e7] h-[200px] gap-y-2 pt-2 flex flex-col">
                                                <div className="flex items-center justify-center p-5">
                                                        <LoaderLogo
                                                                width={"90%"}
                                                                height={"100%"}
                                                                viewBox={
                                                                        "0 0 110 10"
                                                                }
                                                                rotate={"0"}
                                                        />
                                                </div>
                                                <div className="flex items-center justify-center p-3">
                                                        <LoaderLogo
                                                                width={"70%"}
                                                                height={"100%"}
                                                                viewBox={
                                                                        "0 0 110 10"
                                                                }
                                                                rotate={"0"}
                                                        />
                                                </div>
                                                <div className="flex items-center justify-center p-3">
                                                        <LoaderLogo
                                                                width={"70%"}
                                                                height={"100%"}
                                                                viewBox={
                                                                        "0 0 110 10"
                                                                }
                                                                rotate={"0"}
                                                        />
                                                </div>
                                                <div className="flex items-center justify-center p-3">
                                                        <LoaderLogo
                                                                width={"70%"}
                                                                height={"100%"}
                                                                viewBox={
                                                                        "0 0 110 10"
                                                                }
                                                                rotate={"0"}
                                                        />
                                                </div>
                                        </div>
                                        <div className="w-[330px] h-[220px] border border-b-[#e7e7e7] h-[200px] gap-y-2 pt-2 flex flex-col">
                                                <div className="flex items-center justify-center p-5">
                                                        <LoaderLogo
                                                                width={"90%"}
                                                                height={"100%"}
                                                                viewBox={
                                                                        "0 0 110 10"
                                                                }
                                                                rotate={"0"}
                                                        />
                                                </div>
                                                <div className="flex items-center justify-center p-3">
                                                        <LoaderLogo
                                                                width={"70%"}
                                                                height={"100%"}
                                                                viewBox={
                                                                        "0 0 110 10"
                                                                }
                                                                rotate={"0"}
                                                        />
                                                </div>
                                                <div className="flex items-center justify-center p-3">
                                                        <LoaderLogo
                                                                width={"70%"}
                                                                height={"100%"}
                                                                viewBox={
                                                                        "0 0 110 10"
                                                                }
                                                                rotate={"0"}
                                                        />
                                                </div>
                                                <div className="flex items-center justify-center p-3">
                                                        <LoaderLogo
                                                                width={"70%"}
                                                                height={"100%"}
                                                                viewBox={
                                                                        "0 0 110 10"
                                                                }
                                                                rotate={"0"}
                                                        />
                                                </div>
                                        </div>
                                </div>
                        ) : (
                                <div className="layout-container">
                                        <div className="indexstyle-hvg5dr-0 iVNrrO">
                                                <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-2">
                                                        {orderFiltered?.map(
                                                                (
                                                                        order,
                                                                        index
                                                                ) => {
                                                                        return (
                                                                                <div
                                                                                        key={
                                                                                                index
                                                                                        }
                                                                                        className="border text-[rgb(92,92,92)] text-[15px] mr-[15px] mb-[15px] px-5 py-2.5 border-solid border-[rgb(231,231,231)]"
                                                                                >
                                                                                        <div className="bg-white rounded-[50px] text-center text-[rgb(51,51,51)] font-[700] text-base mb-3">
                                                                                                {
                                                                                                        order.payment_method
                                                                                                }
                                                                                                <div></div>
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        "border border-b-[#e7e7e7] border-t-0 border-l-0 border-r-0 p-2"
                                                                                                }
                                                                                        >
                                                                                                <span className="font-[700]">
                                                                                                        Created
                                                                                                        at:
                                                                                                </span>{" "}
                                                                                                {
                                                                                                        order.created_at
                                                                                                }
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        "border border-b-[#e7e7e7] border-t-0 border-l-0 border-r-0 p-2"
                                                                                                }
                                                                                        >
                                                                                                <span className="font-[700]">
                                                                                                        Email:
                                                                                                </span>{" "}
                                                                                                <span className="w-full">
                                                                                                        {
                                                                                                                order
                                                                                                                        ?.shipping_address_data
                                                                                                                        ?.email
                                                                                                        }
                                                                                                </span>
                                                                                        </div>
                                                                                        <div
                                                                                                className={`${
                                                                                                        order.payment_status ===
                                                                                                        "unpaid"
                                                                                                                ? "bg-red-600"
                                                                                                                : "bg-green-600"
                                                                                                } rounded-[5px] text-center text-white font-[700] text-base mt-3 mb-3 `}
                                                                                        >
                                                                                                {
                                                                                                        order?.payment_status
                                                                                                }
                                                                                        </div>
                                                                                        <div
                                                                                                className={`${
                                                                                                        order?.order_status ===
                                                                                                        "pending"
                                                                                                                ? "bg-blue-400"
                                                                                                                : order?.order_status ===
                                                                                                                  "canceled"
                                                                                                                ? "bg-red-600"
                                                                                                                : "bg-green-600"
                                                                                                } rounded-[5px] text-center text-white font-[700] text-base mt-3 mb-3 `}
                                                                                        >
                                                                                                {
                                                                                                        order.order_status
                                                                                                }
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        "border border-b-[#e7e7e7] border-t-0 border-l-0 border-r-0 p-2"
                                                                                                }
                                                                                        >
                                                                                                <span className="font-[700]">
                                                                                                        Seller:
                                                                                                </span>{" "}
                                                                                                {
                                                                                                        order?.seller_id
                                                                                                }
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        "border border-b-[#e7e7e7] border-t-0 border-l-0 border-r-0 p-2"
                                                                                                }
                                                                                        >
                                                                                                <span className="font-[700]">
                                                                                                        City:
                                                                                                </span>{" "}
                                                                                                {
                                                                                                        order
                                                                                                                ?.shipping_address_data
                                                                                                                ?.city
                                                                                                }
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        "border border-b-[#e7e7e7] border-t-0 border-l-0 border-r-0 p-2"
                                                                                                }
                                                                                        >
                                                                                                <span className="font-[700]">
                                                                                                        Country:
                                                                                                </span>{" "}
                                                                                                {
                                                                                                        order
                                                                                                                ?.shipping_address_data
                                                                                                                ?.country
                                                                                                }
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        "border border-b-[#e7e7e7] border-t-0 border-l-0 border-r-0 p-2"
                                                                                                }
                                                                                        >
                                                                                                <span className="font-[700]">
                                                                                                        Phone:
                                                                                                </span>{" "}
                                                                                                {
                                                                                                        order
                                                                                                                ?.shipping_address_data
                                                                                                                ?.phone
                                                                                                }
                                                                                        </div>
                                                                                        <div
                                                                                                className={
                                                                                                        "border border-b-[#e7e7e7] border-t-0 border-l-0 border-r-0 p-2"
                                                                                                }
                                                                                        >
                                                                                                <span className="font-[700]">
                                                                                                        Address:
                                                                                                </span>{" "}
                                                                                                {
                                                                                                        order
                                                                                                                ?.shipping_address_data
                                                                                                                ?.address
                                                                                                }
                                                                                        </div>
                                                                                        {/*{order.details.length} Product*/}
                                                                                        {
                                                                                                order?.details?.filter(
                                                                                                        ord =>
                                                                                                                ord?.qty >
                                                                                                                0
                                                                                                )
                                                                                                        ?.length
                                                                                        }{" "}
                                                                                        Product
                                                                                        <div className="mt-6 flex items-center justify-between">
                                                                                                <button
                                                                                                        onClick={() =>
                                                                                                                handleEdit(
                                                                                                                        order
                                                                                                                )
                                                                                                        }
                                                                                                        className="w-full hover:underline align-super flex items-center justify-center text-black cursor-pointer text-[13px] font-semibold max-w-full overflow-hidden relative text-center no-underline text-ellipsis uppercase transition-all duration-[0.3s] ease-[ease] delay-[0s] whitespace-nowrap z-[1] tracking-[1px] leading-[unset] min-h-0 mr-5 pt-0 pb-px px-0 rounded-none border-t-[initial] border-b-[rgb(147,147,147)] border-x-[initial] border-[0px_0px_1px]"
                                                                                                >
                                                                                                        <div className="font-semibold">
                                                                                                                Show
                                                                                                        </div>
                                                                                                </button>
                                                                                                <button
                                                                                                        className={`${
                                                                                                                order?.order_can_return &&
                                                                                                                !order?.order_has_return_request
                                                                                                                        ? ""
                                                                                                                        : " hidden"
                                                                                                        }`}
                                                                                                        onClick={() =>
                                                                                                                handleAddReturn(
                                                                                                                        order
                                                                                                                )
                                                                                                        }
                                                                                                >
                                                                                                        <div className="flex items-center justify-center gap-x-1 bg-black px-3 p-1 text-white inline-block hover:underline">
                                                                                                                <EditIcon
                                                                                                                        fontSize="12"
                                                                                                                        className="mb-1"
                                                                                                                />{" "}
                                                                                                                Add
                                                                                                                Return
                                                                                                                Request
                                                                                                        </div>
                                                                                                </button>
                                                                                                <div
                                                                                                        className={`${
                                                                                                                order?.order_can_return &&
                                                                                                                order?.order_has_return_request &&
                                                                                                                !order?.show_return_request &&
                                                                                                                order?.edit_return_request
                                                                                                                        ? ""
                                                                                                                        : " hidden"
                                                                                                        } flex max-w-[180px] flex-col gap-y-2 items-center justify-center `}
                                                                                                >
                                                                                                        <button
                                                                                                                className={`w-full hover:underline align-super flex items-center justify-center text-black cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] whitespace-nowrap z-[1] tracking-[1px] leading-[unset] min-h-0 mr-5 pt-0 pb-px px-0 rounded-none border-t-[initial] border-b-[rgb(147,147,147)] border-x-[initial] border-[0px_0px_1px]`}
                                                                                                                onClick={() =>
                                                                                                                        handleEditReturn(
                                                                                                                                order,
                                                                                                                                "Edit"
                                                                                                                        )
                                                                                                                }
                                                                                                        >
                                                                                                                <div className="flex items-center justify-center gap-x-1 bg-black px-3 p-1 text-white inline-block hover:underline">
                                                                                                                        <EditIcon
                                                                                                                                fontSize="12"
                                                                                                                                className="mb-1"
                                                                                                                        />{" "}
                                                                                                                        Edit
                                                                                                                        Return
                                                                                                                        Request
                                                                                                                </div>
                                                                                                        </button>
                                                                                                        <button
                                                                                                                className={`align-super flex items-center justify-center text-black cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] whitespace-nowrap z-[1] tracking-[1px] leading-[unset] min-h-0 mr-5 pt-0 pb-px px-0 rounded-none border-t-[initial] border-b-[rgb(147,147,147)] border-x-[initial] border-[0px_0px_1px]`}
                                                                                                                onClick={() =>
                                                                                                                        handleClick(
                                                                                                                                index
                                                                                                                        )
                                                                                                                }
                                                                                                        >
                                                                                                                <div
                                                                                                                        className={`flex transition-all transition-duration-300 items-center justify-center gap-x-1 ${
                                                                                                                                buttonStates[
                                                                                                                                        index
                                                                                                                                ]
                                                                                                                                        ? "pl-5"
                                                                                                                                        : ""
                                                                                                                        }`}
                                                                                                                >
                                                                                                                        {buttonStates[
                                                                                                                                index
                                                                                                                        ] &&
                                                                                                                        !deleteConfirmed ? (
                                                                                                                                <>
                                                                                                                                        <div className="flex items-center justify-between space-x-5">
                                                                                                                                                <span
                                                                                                                                                        className="cursor-pointer"
                                                                                                                                                        onClick={() =>
                                                                                                                                                                handleDeleteReturnRequest(
                                                                                                                                                                        order
                                                                                                                                                                )
                                                                                                                                                        }
                                                                                                                                                >
                                                                                                                                                        ✔️
                                                                                                                                                </span>
                                                                                                                                                <span
                                                                                                                                                        className="cursor-pointer"
                                                                                                                                                        onClick={() => {
                                                                                                                                                                const newButtonStates =
                                                                                                                                                                        [
                                                                                                                                                                                ...buttonStates,
                                                                                                                                                                        ]
                                                                                                                                                                newButtonStates[
                                                                                                                                                                        index
                                                                                                                                                                ] = false
                                                                                                                                                                setButtonStates(
                                                                                                                                                                        newButtonStates
                                                                                                                                                                )
                                                                                                                                                        }}
                                                                                                                                                >
                                                                                                                                                        ❌
                                                                                                                                                </span>
                                                                                                                                        </div>
                                                                                                                                        <div
                                                                                                                                                className={`flex items-center gap-x-1 bg-red-600 p-1 text-white ${
                                                                                                                                                        buttonStates[
                                                                                                                                                                index
                                                                                                                                                        ]
                                                                                                                                                                ? "w-1/2"
                                                                                                                                                                : ""
                                                                                                                                                }`}
                                                                                                                                        >
                                                                                                                                                <DeleteIcon
                                                                                                                                                        fontSize="12"
                                                                                                                                                        className="mb-1"
                                                                                                                                                />
                                                                                                                                                <span className="w-full">
                                                                                                                                                        Delete
                                                                                                                                                        Return
                                                                                                                                                        Request
                                                                                                                                                </span>
                                                                                                                                        </div>
                                                                                                                                </>
                                                                                                                        ) : (
                                                                                                                                <div
                                                                                                                                        className={`bg-red-600 p-1 text-white ${
                                                                                                                                                buttonStates[
                                                                                                                                                        index
                                                                                                                                                ]
                                                                                                                                                        ? "opacity-0 w-0"
                                                                                                                                                        : ""
                                                                                                                                        }`}
                                                                                                                                >
                                                                                                                                        <DeleteIcon
                                                                                                                                                fontSize="12"
                                                                                                                                                className="mb-1"
                                                                                                                                        />
                                                                                                                                        Delete
                                                                                                                                        Return
                                                                                                                                        Request
                                                                                                                                </div>
                                                                                                                        )}
                                                                                                                </div>
                                                                                                        </button>
                                                                                                </div>

                                                                                                <button
                                                                                                        onClick={() =>
                                                                                                                handleEditReturn(
                                                                                                                        order,
                                                                                                                        "Show"
                                                                                                                )
                                                                                                        }
                                                                                                        className={`${
                                                                                                                order?.order_can_return &&
                                                                                                                order?.order_has_return_request &&
                                                                                                                order?.show_return_request &&
                                                                                                                !order?.edit_return_request
                                                                                                                        ? ""
                                                                                                                        : " hidden"
                                                                                                        } w-full hover:underline align-super flex items-center justify-end text-black cursor-pointer transition-all duration-[0.3s] ease-[ease] delay-[0s] whitespace-nowrap z-[1] tracking-[1px] leading-[unset] min-h-0 mr-5 pt-0 pb-px px-0 rounded-none border-t-[initial] border-b-[rgb(147,147,147)] border-x-[initial] border-[0px_0px_1px]`}
                                                                                                >
                                                                                                        <div className="flex items-center justify-center gap-x-1 bg-black p-1 text-white hover:underline">
                                                                                                                <VisibilityIcon
                                                                                                                        fontSize="12"
                                                                                                                        className="mb-1"
                                                                                                                />{" "}
                                                                                                                Show
                                                                                                                Return
                                                                                                                Request
                                                                                                        </div>
                                                                                                </button>

                                                                                                {/*{&& (*/}
                                                                                                <button
                                                                                                        onClick={() =>
                                                                                                                handleDelete(
                                                                                                                        order
                                                                                                                )
                                                                                                        }
                                                                                                        className={`${
                                                                                                                isShow(
                                                                                                                        order
                                                                                                                )
                                                                                                                        ? ""
                                                                                                                        : "hidden "
                                                                                                        } hover:underline align-super flex items-center justify-center text-black cursor-pointer text-[13px] font-semibold max-w-full overflow-hidden relative text-center no-underline text-ellipsis uppercase transition-all duration-[0.3s] ease-[ease] delay-[0s] whitespace-nowrap z-[1] tracking-[1px] leading-[unset] min-h-0 mr-5 pt-0 pb-px px-0 rounded-none border-t-[initial] border-b-[rgb(147,147,147)] border-x-[initial] border-[0px_0px_1px]`}
                                                                                                >
                                                                                                        <div className=" font-semibold">
                                                                                                                Cancel
                                                                                                        </div>
                                                                                                </button>
                                                                                                {/*)}*/}
                                                                                        </div>
                                                                                </div>
                                                                        )
                                                                }
                                                        )}
                                                </div>
                                        </div>
                                </div>
                        )}
                </>
        )
}
export default Orders
