import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

const Password = ({ placeholder }) => {
  const [open, setOpen] = useState(false);

  // Handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="relative">
        <div className="w-full my-4">
          <input
            className="shadow appearance-none bordere-non rounded w-full py-3 px-3 text-white bg-[#253D42] leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type={false === open ? "password" : "text"}
            placeholder={placeholder}
          />
        </div>

        <div className="absolute top-2 right-1 pr-2">
          {open === false ? (
            <VisibilityOff onClick={toggle} />
          ) : (
            <Visibility onClick={toggle} />
          )}
        </div>
      </div>
    </>
  );
};

export default Password;
