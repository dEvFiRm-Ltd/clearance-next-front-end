"use client";
import React, { FC, ReactNode } from "react";
type modalBodyProps = {
  children: ReactNode;
  modalBodyClass?: string;
};
const ModalBody: FC<modalBodyProps> = ({ children, modalBodyClass }) => {
  return (
    <div
      className={`flex w-full flex-row px-[60px] py-10 gap-y-5 border-y border-ash ${modalBodyClass}`}
    >
      {children}
    </div>
  );
};

export default ModalBody;
