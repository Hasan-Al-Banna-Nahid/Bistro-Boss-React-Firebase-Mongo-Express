/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SectionTitle = ({ subTitle, Title }) => {
  return (
    <div className="text-center mt-12 ">
      <div className="flex flex-col w-full justify-center">
        <div className=" rounded-box place-items-center text-orange-600">
          ---{subTitle}---
        </div>
        <div className="divider w-96 mx-auto"></div>
        <div className=" rounded-box place-items-center text-2xl font-bold">
          {Title}
        </div>
        <div className="divider  w-96 mx-auto"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
