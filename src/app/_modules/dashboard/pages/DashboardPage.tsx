"use client";

import Card from "@/app/_components/fragments/card/Card";
import Layout from "@/app/_layout/about/Layout";
import { ArrowBackIos } from "@mui/icons-material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const AboutPage = () => {
  const { data: session, status } = useSession();
  console.log(session);
  // if (status === "loading") {
  //   return <p>Please wait...</p>;
  // }

  const [storedName, setStoredName] = useState("");

  useEffect(() => {
    // Check if the user is authenticated and has a name
    if (status === "authenticated" && session?.user?.name) {
      // Store the user's name in local storage
      localStorage.setItem("user_name", session.user.name);
      setStoredName(session.user.name);
    } else {
      // If not authenticated, clear the stored name
      localStorage.removeItem("user_name");
      setStoredName("");
    }
  }, [session, status]);

  return (
    <>
      <Layout>
        <div className="flex mb-5 pt-5 px-3 ">
          <div className="flex-1 w-full">
            <Link href="/">
              <button className="flex ">
                <ArrowBackIos />
                <p className="font-semibold">Back</p>
              </button>
            </Link>
          </div>

          <div className="flex-1 w-full ">
            <p className=" w-full font-semibold pl-1 text-center ">
              {status === "authenticated" ? "@" + session.user?.name : status}
            </p>
          </div>

          <div className="flex-1 w-full "></div>
        </div>

        <div className="mx-3">
          <div className="relative w-full h-48 mb-8 overflow-hidden rounded-xl bg-[#162329]">
            <div className="absolute bottom-3 left-3 font-semibold flex justify-items-center  align-middle">
              {status === "authenticated" ? "@" + session.user?.name : status}
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
