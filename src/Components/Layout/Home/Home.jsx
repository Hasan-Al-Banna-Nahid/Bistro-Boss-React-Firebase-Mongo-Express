/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../Navbar/Navbar";
import Banner from "../../Banner/Banner";
import Featured from "../../Featured/Featured";
import PopularMenu from "../../PopularMenu/PopularMenu";
import CallUs from "../../Call Us/CallUs";
import ChefRecommendation from "../../Chef Recommendation/ChefRecommendation";
import AdditionalBanner from "../../AdditionalBanner/AdditionalBanner";
import Testimonials from "../../Testimonials/Testimonials";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Featured />
      <PopularMenu />
      <CallUs />
      <ChefRecommendation />
      <AdditionalBanner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
