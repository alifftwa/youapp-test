import React from "react";

interface Props {
  placeholder: string;
  type: string;
  title: string;
}

const FormDisabled = ({ placeholder, type, title }: Props) => {
  return (
    <div className="w-full flex my-1">
      <div className="w-2/4 flex items-center opacity-35 text-[#FFFFFF]">
        {title}
      </div>
      <div className="w-full ml-3">
        <input
          disabled
          className="block shadow appearance-none border-none rounded-lg w-full py-3 px-3 text-end placeholder:text-end text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FormDisabled;
