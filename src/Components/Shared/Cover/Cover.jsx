/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Cover = ({ img, title, subTitle }) => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <div className="ourMenuBanner absolute top-40 left-72 fixed text-white p-48 h-48 rounded-md">
          <h3 className="text-6xl font-bold text-center">{title}</h3>
          <p className="text-3xl font-semibold my-6 text-center">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
