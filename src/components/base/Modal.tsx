import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import Button from "./Button";
type modalProps = {
  visible: boolean;
  modalClass?: string;
  title?: string;
  children: ReactElement;
  closeCb: () => void;
};

const Modal: FC<modalProps> = ({
  title,
  children,
  closeCb,
  visible,
  modalClass,
}) => {
  const modalBody = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (modalBody.current && !modalBody.current.contains(event.target)) {
        closeCb();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalBody, closeCb]);
  return (
    <section
      className={`w-screen h-screen fixed inset-0 z-[9999] flex justify-center items-center transition bg-[#000000]/30 duration-300 delay-150 ${
        visible ? "scale-100 " : "scale-0"
      } `}
    >
      <div
        ref={modalBody}
        className={`max-w-[1012px] max-h-screen overflow-y-auto rounded-md flex flex-col bg-white transition-all duration-300 delay-100 ${
          visible ? "opacity-100" : "opacity-0"
        } ${modalClass} `}
      >
        <div className="w-full flex flex-row justify-between px-4 items-center pt-2">
          <div className="capitalize text-black-primary text-lg font-semibold leading-[22px] ">
            {title}
          </div>
          <div className="">
            <Button
              icon="fas fa-times !text-2xl !text-center !text-black-primary"
              btnClass="!w-7 !h-7 !rounded-full !flex !justify-center !items-center"
              actionCb={closeCb}
              variant="naked"
              btnType="button"
            />
          </div>
        </div>
        {/* header ends */}
        {children}
      </div>
    </section>
  );
};

export default Modal;
