/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../Navbar/Navbar";
import Banner from "../../Banner/Banner";
import Featured from "../../Featured/Featured";
import PopularMenu from "../../PopularMenu/PopularMenu";
import CallUs from "../../Call Us/CallUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Featured />
      <PopularMenu />
      <CallUs />
    </div>
  );
};

export default Home;
