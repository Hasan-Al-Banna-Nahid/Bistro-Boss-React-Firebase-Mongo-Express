/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ name }) => {
  return (
    <div className="my-8">
      <button className="btn btn-ghost  border-b-[#222f3e] text-center mx-auto w-64 ms-[500px] ">
        {name}
      </button>
    </div>
  );
};

export default Button;
