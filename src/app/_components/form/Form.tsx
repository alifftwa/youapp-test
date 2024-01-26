import React, { useState } from "react";
import TextForm from "../fragments/textform/TextForm";
import TextDate from "../fragments/textdate/TextDate";
import FormDisabled from "../fragments/formdisabled/FormDisabled";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ExpandMore } from "@mui/icons-material";

interface Option {
  label: string;
  value: number;
}

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options: Option[] = [
    { label: "Male", value: 1 },
    { label: "Female", value: 2 },
  ];

  return (
    <>
      <div className="grid gap-2">
        <TextForm title="Display name:" placeholder="Enter name" type="text" />
        <TextForm title="Gender:" placeholder="Select gender" type="Select" />

        <div className="w-full flex my-1">
          <div className="w-2/4 flex items-center opacity-35 text-[#FFFFFF]">
            Gender:
          </div>
          <div className="w-full ml-3">
            <button
              className="w-full appearance-none border-non rounded-lg py-3 px-3  bg-[#253D42] text-end"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {!isOpen ? <ExpandLessIcon /> : <ExpandMore />}
            </button>
          </div>
        </div>
        <TextDate
          className="shadow appearance-none border-none rounded-lg w-full py-3 px-3 placeholder:text-end text-white  bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
          title="Birthday:"
          placeholder=""
          type="text"
        />
        <FormDisabled title="Horoscope:" placeholder="--" type="text" />
        <FormDisabled title="Zodiac:" placeholder="--" type="text" />
        <TextForm title="Weight:" placeholder="Add weight" type="text" />
        <TextForm title="Height:" placeholder="Add height" type="text" />
      </div>
    </>
  );
};

export default Form;
