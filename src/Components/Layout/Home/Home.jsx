/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../Navbar/Navbar";
import Banner from "../../Banner/Banner";
import Featured from "../../Featured/Featured";
import PopularMenu from "../../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Featured />
      <PopularMenu />
    </div>
  );
};

export default Home;
