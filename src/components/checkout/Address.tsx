"use client";
import React, { useState } from "react";
import Modal from "../base/Modal";

export const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-start justify-between min-h-[300px] lg:min-h-[400px]">
        <div className="w-full">
          <h2 className="text-2xl border-b-2 pb-4 border-black-primary mb-6">
            Address
          </h2>
          <div className="flex items-start lg:mb-20">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black-primary border border-slate-400 rounded-sm text-white text-center w-[195px] h-[50px] uppercase p-3"
            >
              Add a new address
            </button>
          </div>
        </div>

        <div className="w-full mx-auto flex flex-col items-center">
          <i className="fa-solid fa-location-dot text-4xl text-slate-400" />
          <p className="text-sm text-slate-500 mt-4">No Address yet</p>
        </div>
      </div>
      <Modal
        visible={isModalOpen}
        closeCb={() => setIsModalOpen(false)}
        title=""
        modalClass="md:w-[720px] lg:w-[620px] h-[580px] lg:h-[600px] px-1"
      >
        <div className="flex flex-col justify-center items-center w-full max-w-[515px] mx-auto">
          <h3 className="mb-3 text-slate-400">Please fill in the information below</h3>
          <form className="w-full flex flex-col justify-between h-[500px]">
            <div className="flex items-center justify-between">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="w-[49%] p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
              />
              <input
                type="text"
                name="lastName"
                placeholder="First name"
                className="w-[49%] p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
              />
            </div>
            <div className="">
              <input
                type="text"
                name="address"
                placeholder="Address: Street name and house number"
                className="w-full p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
              />
            </div>
            <div className="">
              <input
                type="text"
                name="optionalAddress"
                placeholder="Apartment, suite, rtc. (optional)"
                className="w-full p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="w-[32%] p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
              />
              <input
                type="text"
                name="lastName"
                placeholder="First name"
                className="w-[32%] p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
              />
              <select name="cars" id="cars" className="w-[32%] p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800 text-slate-500">
                <option>select coupon</option>
                <option>a</option>
                <option>b</option>
                <option>c</option>
                <option>d</option>
              </select>
            </div>
            <div className="">
              <input
                type="text"
                name="PostalCode"
                placeholder="PostalCode"
                className="w-full p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
              />
            </div>
            <div className="">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input name="default" type='checkbox' />
              <span className="uppercase text-slate-400">set as default</span>
            </div>

            <button type="submit" className="bg-black-primary w-full uppercase text-white py-2 mt-5 text-sm">add a new address</button>
          </form>
        </div>
      </Modal>
    </>
  );
};
