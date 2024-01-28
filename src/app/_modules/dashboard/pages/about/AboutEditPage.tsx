import Card from "@/app/_components/fragments/card/Card";
import Form from "@/app/_components/form/Form";
import { ArrowBackIos } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

const AboutEditPage = () => {
  const pathname = usePathname();
  const finalSlashIndex = pathname.lastIndexOf("/");
  const previousPathname = pathname.slice(0, finalSlashIndex);

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
      <div className="h-full overflow-hidden bg-[#09141A]">
        {/* Button back */}
        <Link href={previousPathname}>
          <div className="relative flex mb-5 pt-5 pl-3">
            <ArrowBackIos />
            <label className="font-semibold">Back</label>
            <p className="absolute font-semibold pl-1 left-36">
              {" "}
              {status === "authenticated" ? "@" + session.user?.name : status}
            </p>
          </div>
        </Link>

        <div className="mx-3">
          <div className="relative w-full h-48 mb-8 overflow-hidden rounded-xl bg-[#162329]">
            <div className="absolute bottom-3 left-3 font-semibold">
              <p>
                {" "}
                {status === "authenticated" ? "@" + session.user?.name : status}
              </p>
            </div>
          </div>

          <div className="w-full h-full rounded-xl bg-[#0E191F] mt-4">
            <div className="relative flex pl-4 pt-3">
              <div>
                <p className="font-semibold">About</p>
              </div>

              <div className="absolute right-5">
                <Link href="/dashboard">
                  <button>
                    <p className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#F3EDA6] from-[-6.8%] via-[#F8FAE5] via-[89.01%] to-[#D5BE88] to-[100.43%]">
                      save & update
                    </p>
                  </button>
                </Link>
              </div>
            </div>

            {/* Add image */}
            <div className="mx-4">
              <div className="flex">
                <button>
                  <div className="w-14 h-14 mt-10 rounded-xl bg-[#212B31]">
                    <div className="">
                      <label htmlFor="add_image">
                        <p className="font-light text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#F3EDA6] from-[-6.8%] via-[#F8FAE5] via-[89.01%] to-[#D5BE88] to-[100.43%] ">
                          +
                        </p>
                      </label>
                      <input
                        type="file"
                        name=""
                        id="add_image"
                        style={{ visibility: "hidden" }}
                      />
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
            Nav="/dahsboard/interest"
            Text="Add in your interest to find a better match"
          />
        </div>
      </div>
    </>
  );
};

export default AboutEditPage;
