/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Banner = ({ img, title, info }) => {
  return (
    <div className="my-4">
      <div className="card w-1/2 h-80  shadow-xl mx-auto image-full">
        <figure>
          <img src={img} alt="banner" className="w-full" />
        </figure>
        <div className="card-body text-center my-12">
          <h2 className="card-title mx-auto text-3xl font-bold text-white">
            {title}
          </h2>
          <p className="text-[#ee5253]  font-bold">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
