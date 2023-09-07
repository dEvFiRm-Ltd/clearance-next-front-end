"use client";
import React, { FC, ReactNode } from "react";
type modalBodyProps = {
  children: ReactNode;
  modalBodyClass?: string;
};
const ModalBody: FC<modalBodyProps> = ({ children, modalBodyClass }) => {
  return (
    <div
      className={`w-full px-6 py-4 border-ash ${modalBodyClass}`}
    >
      {children}
    </div>
  );
};

export default ModalBody;
