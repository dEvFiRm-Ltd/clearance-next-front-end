import { AuthSm } from "@/components/auth/AuthSm";
import { AuthXl } from "@/components/auth/AuthXl";
import { Login } from "@/components/auth/Login";
import { Signup } from "@/components/auth/Signup";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[80vh] py-10">
      <div className="hidden xl:block">
        <AuthXl />
      </div>
      <div className="block xl:hidden">
        <AuthSm />
      </div>
    </div>
  );
};

export default page;
