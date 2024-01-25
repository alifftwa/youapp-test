"use client";

import Password from "@/app/_components/fragments/password/Password";
import Textfield from "@/app/_components/fragments/textfield/Textfield";
import Layout from "@/app/_layout/login-regis/Layout";
import { ArrowBackIos, Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

const LoginPage = () => {
  // const [open, setOpen] = useState(false);

  // // Handle toggle
  // const toggle = () => {
  //   setOpen(!open);
  // };

  return (
    <>
      <Layout>
        <div className="mb-5 ml-3">
          <h1 className="text-2xl font-semibold">Login</h1>
        </div>

        {/* <div className="my-4">
              <input
                className="shadow appearance-none border-none rounded w-full py-3 px-3 bg-[#253D42] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter Username/Email"
              />
            </div> */}

        {/* <div className="relative">
              <div className="w-full my-4">
                <input
                  className="shadow appearance-none bordere-non rounded w-full py-3 px-3 text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type={false === open ? "password" : "text"}
                  placeholder="Enter Password"
                />
              </div>

              <div className="absolute top-2 right-1 pr-2">
                {open === false ? (
                  <VisibilityOff onClick={toggle} />
                ) : (
                  <Visibility onClick={toggle} />
                )}
              </div>
            </div> */}
        <Textfield placeholder="Enter Usernanme/Email" />

        <Password placeholder="Enter Password" />

        <div>
          <button className="w-full py-2 px-4 rounded-lg font-bold text-white bg-gradient-to-r opacity-30 shadow-lg from-[#62CDCB] from-[24.88%] to-[#4599DB] to-[78.49%] hover:opacity-100 hover:shadow-lg hover:backdrop-blur-2xl hover:shadow-[#4599DB]  hover:from-[#62CDCB] hover:from-[24.88%] hover:to-[#4599DB] hover:to-[78.49%] ">
            Login
          </button>
        </div>

        <div>
          <div className="flex justify-center mt-5">
            <p className="">No account?</p>
            <button className="pl-1 underline underline-offset-3">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F3EDA6] from-[-6.8%] via-[#F8FAE5] via-[89.01%] to-[#D5BE88] to-[100.43%]">
                Register here
              </p>
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
