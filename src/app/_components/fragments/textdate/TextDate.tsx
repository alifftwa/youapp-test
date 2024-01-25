import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  placeholder: string;
  type: string;
  title: string;
  className: string;
}

const TextDate = ({ placeholder, type, title, className }: Props) => {
  const [selectedDate, setDate] = useState<Date | null>(null);
  return (
    <div className="w-full flex my-1">
      <div className="w-2/4 flex items-center opacity-35 text-[#FFFFFF]">
        {title}
      </div>
      <div className="w-full ml-3">
        {/* <input
          className={className}
          type={type}
          placeholder={placeholder}
        /> */}
        <div>
          <DatePicker
            className="shadow placeholder:text-white text-end appearance-none border-none rounded-lg w-full py-3 px-3 placeholder:text-end text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
            selected={selectedDate}
            onChange={(date) => setDate(date as Date)}
          />
        </div>
      </div>
    </div>
  );
};

export default TextDate;
