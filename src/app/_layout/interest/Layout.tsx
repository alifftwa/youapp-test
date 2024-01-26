import { ArrowBackIos } from "@mui/icons-material";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="w-full h-screen overflow-hidden bg-cover bg-gradient-to-bl from-[#1F4247] from-[0%] via-[#0D1D23] via-[56.18%] to-[#09141A] to-[100%] ">
        <div className="relative w-full flex pt-5 pl-3">
          <div className="flex">
            <ArrowBackIos />
            <p className="font-semibold">Back</p>
          </div>

          <div className="absolute right-0 mr-4">
            <button className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ABFFFD] from-[2.64%] via-[#4599DB] via-[102.4%] to-[#AADAFF] to-[102.4%]">
              Save
            </button>
          </div>
        </div>

        <div className="flex flex-col h-screen">
          <div className="mx-4 my-5 align-middle">{children}</div>
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
      </div>
    </div>
  );
};

export default Layout;
