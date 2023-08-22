"use client";
import React, { useEffect, useState } from "react";
import AccountIndex from "@/components/Account/mobile/account";

import { useDispatch, useSelector } from "react-redux";
import { store } from "@/store";

const Login = () => {
  const dispatch = useDispatch();
  let loading = useSelector((store) => store.LanguageReducer.loading);
  const lang_code = store.getState().LanguageReducer.langCode;
  let [translations, setTranslations] = useState(
    store.getState().LanguageReducer.data[lang_code]
  );
  useEffect(() => {
    setTranslations(store.getState().LanguageReducer.data[lang_code]);
  }, [loading]);
  useEffect(() => {
    dispatch({ type: "GET_ORDERS_STATUS" });
  }, []);
  return (
    <div>
      <AccountIndex />
    </div>
  );
};

export default Login;
