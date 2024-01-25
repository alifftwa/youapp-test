import Card from "@/app/_components/fragments/card/Card";
import Form from "@/app/_components/form/Form";
import Layout from "@/app/_layout/about/Layout";
import { ArrowBackIos } from "@mui/icons-material";
import React from "react";

const AboutEditPage = () => {
  return (
    <>
      <div className="h-full overflow-hidden bg-[#09141A]">
        {/* <Layout> */}
        <button className="relative flex mb-5 pt-5 pl-3">
          <ArrowBackIos />
          <p className="font-semibold">Back</p>
          <p className="absolute font-semibold pl-1 left-36">@username</p>
        </button>
        <div className="mx-3">
          <div className="relative w-full h-48 mb-8 overflow-hidden rounded-xl bg-[#162329]">
            <div className="absolute bottom-3 left-3 font-semibold">
              <p>@username</p>
            </div>
          </div>

          <div className="w-full h-full rounded-xl bg-[#0E191F] mt-4">
            <div className="relative flex pl-4 pt-3">
              <div>
                <p className="font-semibold">About</p>
              </div>

              <div className="absolute right-5">
                <button>
                  <p className="font-normal text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#F3EDA6] from-[-6.8%] via-[#F8FAE5] via-[89.01%] to-[#D5BE88] to-[100.43%]">
                    save & update
                  </p>
                </button>
              </div>
            </div>

            {/* Add image */}
            <div className="mx-4">
              <div className="flex">
                <button>
                  <div className="w-14 h-14 mt-10 rounded-xl bg-[#212B31]">
                    <div className="">
                      <p className="font-light text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#F3EDA6] from-[-6.8%] via-[#F8FAE5] via-[89.01%] to-[#D5BE88] to-[100.43%] ">
                        +
                      </p>
                    </div>
                  </div>
                </button>
                <div className="mt-14 ml-4">
                  <p>Add image</p>
                </div>
              </div>
              <div className="py-5">
                <Form />
              </div>
            </div>
          </div>

          <Card
            CardName="Interest"
            Text="Add in your interest to find a better match"
          />
        </div>
        {/* </Layout> */}
      </div>
    </>
  );
};

export default AboutEditPage;
