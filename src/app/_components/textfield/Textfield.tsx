import React from "react";

const Textfield = ({ placeholder }) => {
  return (
    <div>
      <div className="my-4">
        <input
          className="shadow appearance-none border-none rounded w-full py-3 px-3 text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Textfield;
