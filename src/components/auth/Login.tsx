import Link from "next/link";
import React from "react";

export const Login = () => {
  return (
    <section className="w-[400px] w flex flex-col space-y-4">
      <div className="flex flex-col space-y-2 md:space-y-4 text-center text-[#5c5c5c] text-2xl">
        <h1>Login</h1>
        <p className="text-[#999999] text-sm">
          Please enter your e-mail and password:
        </p>
      </div>


      <div className="flex flex-col">
        <input
          className="border border-zinc-400 hover:border-black focus:border-black  outline-none p-3"
          type="email"
          placeholder="Email"
        />
        <input
          className="border border-zinc-400 hover:border-black focus:border-black  outline-none p-3 mt-6 mb-1"
          type="password"
          placeholder="Password"
        />
        <Link href={"#"} className="text-right underline text-sm text-[#111111]">
          Forgot Password
        </Link>
        <button
          className="bg-black hover:bg-black text-white font-semibold py-3 tracking-wide px-4 mt-6 mb-1 uppercase text-[13px]"
          type="submit"
        >Login</button>
      </div>


      {/* <div className="flex items-center">
        <div className="flex-1 h-px bg-[#ebebeb]"></div>
        <div className="px-2 text-center text-[#999999]">OR</div>
        <div className="flex-1 h-px bg-[#ebebeb]"></div>
      </div>

      <div className="flex flex-col">
        <p>Use Your Account Form</p>
      </div> */}

    </section>
  );
};
