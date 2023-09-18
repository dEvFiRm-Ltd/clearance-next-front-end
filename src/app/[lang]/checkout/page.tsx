"use client";
import { Address } from "@/components/checkout/Address";
import { ChangePassword } from "@/components/checkout/ChangePassword";
import { Coupon } from "@/components/checkout/Coupon";
import { OrderList } from "@/components/checkout/OrderList";
import { Sidebar } from "@/components/checkout/Sidebar";
import { Wallet } from "@/components/checkout/Wallet";
import React, { useState } from "react";

const page = () => {
  const [onDisplay, setOnDisplay] = useState("orderList");
  return (
    <div className="py-8 px-1 md:px-2 flex flex-col w-full h-full mx-auto md:flex-row md:items-start md:justify-cente md:space-x-8 md:my-8 md:max-w-[1150px] md:max-h-[470px]">
      <div className="w-full md:max-w-[220px] max-h-[300px] mb-12 md:mb-0">
        <Sidebar setOnDisplay={setOnDisplay} />
      </div>
      {
        <div className="w-full">
          {(onDisplay === "orderList") && <OrderList />}
          {(onDisplay === "wallet") && <Wallet />}
          {(onDisplay === "coupon") && <Coupon />}
          {(onDisplay === "address") && <Address />}
          {(onDisplay === "changePassword") && <ChangePassword />}
        </div>
      }
    </div>
  );
};

export default page;
