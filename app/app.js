"use client";
import { persistor, store } from "@/store/index";
import { useEffect, useState, Suspense, useRef } from "react";
import i18n from "../i18n";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import Register from "./_register";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { PersistGate } from "redux-persist/integration/react";
import errorMiddleware from "./errorMiddleware";

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default function App({ children }) {
  const [sitting, setSitting] = useState(null);
  useEffect(() => {
    const sitting = JSON.parse(localStorage.getItem("SITTING"));
    if (sitting) {
      setSitting(sitting?.sitting);
    } else {
      store.dispatch({ type: "SETTING" });
    }
    const unsubscribe = store.subscribe(() => {
      const updatedSitting = JSON.parse(localStorage.getItem("SITTING"));
      if (updatedSitting) {
        setSitting(updatedSitting?.sitting);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handleError = (error) => {
      console.error("حدث خطأ في التطبيق:", error);

      errorMiddleware(error).then(r => {});
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);
  const router = useRouter();
  useEffect(() => {
    const language = i18n.language;
    // console.log(language, "language");
    const savedLanguage = localStorage.getItem("language");
    if (language && language !== savedLanguage) {
      localStorage.setItem("language", language);
      i18n.changeLanguage(language);
      router.refresh();
    }
  }, [router]);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Register />
        <I18nextProvider i18n={i18n}>
          {children}
          <ToastContainer />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}
