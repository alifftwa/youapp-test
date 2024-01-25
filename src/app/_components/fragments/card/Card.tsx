import { editIcon } from "@/app/_image/image";
import Image from "next/image";
import React from "react";

interface Props {
  CardName: string;
  Text: string;
}

const Card = ({ CardName, Text }: Props) => {
  return (
    <>
      <div className="w-full h-32 rounded-xl bg-[#0E191F] my-4">
        <div className="realtive flex pl-4 pt-3 font-semibold">
          <div>
            <p>{CardName}</p>
          </div>
          <div className="absolute right-7">
            <button>
              <Image src={editIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="pl-4 pt-5 text-[#FFFFF] opacity-50">
          <p>{Text}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
