/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="btn btn-ghost  border-b-[#222f3e] text-center mx-auto w-56 ms-[550px] ">
        {name}
      </button>
    </div>
  );
};

export default Button;
