"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header/desktop";
import Footer from "@/components/Footer/desktop";
import IndexRegister from "@/components/Account/desktop/Login";
import { useSelector } from "react-redux";
import { store } from "@/store";

const Login = () => {
  return (
    <div>
      <Header collection={false} />
      <div className="flex pt-40 items-start justify-center pb-40">
        <IndexRegister />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
