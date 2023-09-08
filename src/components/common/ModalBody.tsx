"use client";
import React, { FC, ReactNode } from "react";
type modalBodyProps = {
  children: ReactNode;
  modalBodyClass?: string;
};
const ModalBody: FC<modalBodyProps> = ({ children, modalBodyClass }) => {
  return (
    <div
      className={`w-full px-4 py-2.5 lg:px-6 lg:py-4 border-ash ${modalBodyClass}`}
    >
      {children}
    </div>
  );
};

export default ModalBody;
