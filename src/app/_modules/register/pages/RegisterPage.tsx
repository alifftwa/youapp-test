"use client";

import Password from "@/app/_components/fragments/password/Password";
import Textfield from "@/app/_components/fragments/textfield/Textfield";
import Layout from "@/app/_layout/login-regis/Layout";
import { Link } from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

let validationSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required().min(8).max(32),
});

const RegisterPage = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<null | string>(null);

  // Handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  const {
    setError,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Handle Form Submit
  const handleFormSubmit: SubmitHandler<{
    username: string;
    email: string;
    password: string;
  }> = async (data) => {
    setMessage(null);
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/register";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setMessage("User registered succesfully.");
      reset();
    } else {
      const response = await res.json();
      setError("email", {
        message: response?.detail ?? "User Registration Failed",
        type: "error",
      });
    }
  };

  return (
    <>
      <Layout>
        <div>
          <div className="mb-5 ml-3">
            <h1 className="text-2xl font-semibold">Register</h1>
          </div>

          <form onSubmit={handleSubmit(handleFormSubmit)} autoComplete="off">
            {message && <div className="text-sm text-green-500">{message}</div>}
            {/* Enter Email */}
            <div>
              <div className="my-4">
                <input
                  className="shadow appearance-none border-none rounded w-full py-3 px-3 text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter Email"
                  {...register("email")}
                />
                {errors["email"] ? (
                  <div className="text-sm text-red-500">
                    {errors["email"].message}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Create Username */}
            <div>
              <div className="my-4">
                <input
                  className="shadow appearance-none border-none rounded w-full py-3 px-3 text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Create Username"
                  {...register("username")}
                />
                {errors["username"] ? (
                  <div className="text-sm text-red-500">
                    {errors["username"].message}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Create Password */}
            <div className="relative">
              <div className="w-full my-4">
                <input
                  className="shadow appearance-none bordere-non rounded w-full py-3 px-3 text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type={false === open ? "password" : "text"}
                  placeholder="Create Password"
                  {...register("password")}
                />
                {errors["password"] ? (
                  <div className="text-sm text-red-500">
                    {errors["password"].message}
                  </div>
                ) : null}
              </div>

              <div className="absolute top-2 right-1 pr-2">
                {open === false ? (
                  <VisibilityOff onClick={toggle} />
                ) : (
                  <Visibility onClick={toggle} />
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <div className="w-full my-4">
                <input
                  className="shadow appearance-none bordere-non rounded w-full py-3 px-3 text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type={false === open ? "password" : "text"}
                  placeholder="Confirm Password"
                  {...register("password")}
                />
                {errors["password"] ? (
                  <div className="text-sm text-red-500">
                    {errors["password"].message}
                  </div>
                ) : null}
              </div>

              <div className="absolute top-2 right-1 pr-2">
                {open === false ? (
                  <VisibilityOff onClick={toggle} />
                ) : (
                  <Visibility onClick={toggle} />
                )}
              </div>
            </div>

            <div>
              <Link href="/dashboard">
                <button className="w-full py-2 px-4 rounded-lg font-bold text-white bg-gradient-to-r opacity-30 shadow-lg from-[#62CDCB] from-[24.88%] to-[#4599DB] to-[78.49%] hover:opacity-100 hover:shadow-lg hover:backdrop-blur-2xl hover:shadow-[#4599DB]  hover:from-[#62CDCB] hover:from-[24.88%] hover:to-[#4599DB] hover:to-[78.49%] ">
                  Register
                </button>
              </Link>
            </div>
          </form>

          <div>
            <div className="flex justify-center mt-5">
              <p className="">No account?</p>
              <Link href="/">
                <button className="pl-1 underline underline-offset-3">
                  <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F3EDA6] from-[-6.8%] via-[#F8FAE5] via-[89.01%] to-[#D5BE88] to-[100.43%]">
                    Login Here
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RegisterPage;
