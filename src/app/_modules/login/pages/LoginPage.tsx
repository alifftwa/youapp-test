"use client";

import Password from "@/app/_components/fragments/password/Password";
import Textfield from "@/app/_components/fragments/textfield/Textfield";
import Layout from "@/app/_layout/login-regis/Layout";
import { ArrowBackIos, Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  return (
    <>
      <Layout>
        <div className="mb-5 ml-3">
          <h1 className="text-2xl font-semibold">Login</h1>
        </div>

        <Textfield placeholder="Enter Username/Email" />

        <Password placeholder="Enter Password" />

        <div>
          <Link href="/dashboard">
            <button className="w-full py-2 px-4 rounded-lg font-bold text-white bg-gradient-to-r opacity-30 shadow-lg from-[#62CDCB] from-[24.88%] to-[#4599DB] to-[78.49%] hover:opacity-100 hover:shadow-lg hover:backdrop-blur-2xl hover:shadow-[#4599DB]  hover:from-[#62CDCB] hover:from-[24.88%] hover:to-[#4599DB] hover:to-[78.49%] ">
              Login
            </button>
          </Link>
        </div>

        <div>
          <div className="flex justify-center mt-5">
            <p className="">No account?</p>
            <Link href="/register">
              <button className="pl-1 underline underline-offset-3">
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F3EDA6] from-[-6.8%] via-[#F8FAE5] via-[89.01%] to-[#D5BE88] to-[100.43%]">
                  Register here
                </p>
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
