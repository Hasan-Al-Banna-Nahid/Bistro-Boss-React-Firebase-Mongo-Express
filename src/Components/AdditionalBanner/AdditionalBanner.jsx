/* eslint-disable no-unused-vars */
import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./AdditionalBanner.css";

const AdditionalBanner = () => {
  return (
    <div>
      <SectionTitle subTitle={"Check It Out"} Title={"From Our Menu"} />
      <div className="featured h-[560px] rounded-lg">
        <div className="hero min-h-screen bg-transparent flex justify-center">
          <div className="hero-content text-center text-[#ff9f43] flex-col lg:flex-row">
            <img
              src="../../../public/assets/home/featured.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut <br />
                assumenda excepturi exercitationem quasi. In deleniti eaque{" "}
                <br /> aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalBanner;
