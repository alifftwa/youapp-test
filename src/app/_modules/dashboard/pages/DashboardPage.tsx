"use client";
import Card from "@/app/_components/fragments/card/Card";
import Layout from "@/app/_layout/about/Layout";
import { ArrowBackIos } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Layout>
        <Link href="/">
          <button className="relative flex mb-5 pt-5 pl-3">
            <ArrowBackIos />
            <p className="font-semibold">Back</p>
            <p className="absolute font-semibold pl-1 left-36">@username</p>
          </button>
        </Link>
        <div className="mx-3">
          <div className="relative w-full h-48 mb-8 overflow-hidden rounded-xl bg-[#162329]">
            <div className="absolute bottom-3 left-3 font-semibold">
              <p>@username</p>
            </div>
          </div>

          <Card
            CardName="About"
            Nav="/dashboard/about"
            Text="Add in your your to help others know you better"
          />
          <Card
            CardName="Interest"
            Nav="/dashboard/interest"
            Text="Add in your interest to find a better match"
          />
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;
