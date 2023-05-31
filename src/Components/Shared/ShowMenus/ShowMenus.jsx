/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ShowMenus = ({ img, name, info, price }) => {
  return (
    <div className="mx-auto">
      <div>
        <div className="flex px-12 py-4 items-center font-medium">
          <div className="px-2">
            <img src={img} alt="" className="rounded-s-3xl w-56" />
          </div>
          <div className="flex-grow">
            <h3 className="text-orange-600 text-xl font-medium">
              ---{name}---
            </h3>
            <p className="text-slate-400 text-xl font-medium">{info}</p>
          </div>
          <div>
            <p className="text-red-700 text-2xl font-bold">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMenus;
