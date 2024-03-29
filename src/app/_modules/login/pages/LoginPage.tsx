"use client";

import React, { useState } from "react";
import Layout from "@/app/_layout/login-regis/Layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowBackIos, Visibility, VisibilityOff } from "@mui/icons-material";
import { SessionProvider, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

let validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(32),
});

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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

  const handleFormSubmit = async (data) => {
    // console.log(data);
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    }).then((res) => {
      if (res?.error) {
        setError("email", { message: "Something went wrong.", type: "error" });
      } else {
        router.push("/dashboard");
      }
    });
  };

  return (
    <>
      <Layout>
        <div className="mb-5 ml-3">
          <h1 className="text-2xl font-semibold">Login</h1>
        </div>

        {/* Form Login */}
        <form onSubmit={handleSubmit(handleFormSubmit)} autoComplete="off">
          {/* Username */}
          <div>
            <div className="my-4">
              <input
                className="shadow appearance-none border-none rounded w-full py-3 px-3 text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Username/Email"
                {...register("email")}
              />
              {errors["email"] ? (
                <div className="text-sm text-red-500">
                  {errors["email"].message}
                </div>
              ) : null}
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <div className="w-full my-4">
              <input
                className="shadow appearance-none bordere-non rounded w-full py-3 px-3 text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type={false === open ? "password" : "text"}
                placeholder="Enter Password"
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

          {/* Button Login */}

          <button
            className="w-full py-2 px-4 rounded-lg font-bold text-white bg-gradient-to-r opacity-30 shadow-lg from-[#62CDCB] from-[24.88%] to-[#4599DB] to-[78.49%] hover:opacity-100 hover:shadow-lg hover:backdrop-blur-2xl hover:shadow-[#4599DB]  hover:from-[#62CDCB] hover:from-[24.88%] hover:to-[#4599DB] hover:to-[78.49%] "
            type="submit"
          >
            Login
          </button>
        </form>

        {/* Button Register */}
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
