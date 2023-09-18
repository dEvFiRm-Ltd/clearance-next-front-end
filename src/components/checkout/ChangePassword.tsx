import React from "react";

export const ChangePassword = () => {
  return (
    <div className="flex flex-col items-start ">
      <h2 className="text-2xl border-b-2 pb-4 border-black-primary mb-6 w-full">
        Change Password
      </h2>

      <div className="w-full flex justify-center">
      <form className="w-full max-w-[385px] flex flex-col space-y-3 lg:h-[230px]">
        <input
          type="password"
          name="oldPassword"
          placeholder="Old Password"
          className="w-full p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
        />
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          className="w-full p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full p-3 border rounded-sm border-slate-300 outline-none focus:border-slate-800"
        />
        <button
          type="submit"
          className="bg-black-primary w-full uppercase text-white py-2 mt-1 text-sm"
        >
          submit
        </button>
      </form>
      </div>
    </div>
  );
};
