import React from "react";
import TextForm from "../fragments/textform/TextForm";
import TextDate from "../fragments/textdate/TextDate";

const Form = () => {
  return (
    <>
      <div className="grid gap-2">
        <TextForm title="Display name:" placeholder="Enter name" type="text" />
        <TextForm title="Gender:" placeholder="Select gender" type="Select" />
        <TextDate
          className="shadow appearance-none border-none rounded-lg w-full py-3 px-3 placeholder:text-end text-white  bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
          title="Birthday:"
          placeholder=""
          type="text"
        />
        <TextForm title="Horoscope:" placeholder="--" type="text" />
        <TextForm title="Zodiac:" placeholder="--" type="text" />
        <TextForm title="Weight:" placeholder="Add weight" type="text" />
        <TextForm title="Height:" placeholder="Add height" type="text" />
      </div>
    </>
  );
};

export default Form;
