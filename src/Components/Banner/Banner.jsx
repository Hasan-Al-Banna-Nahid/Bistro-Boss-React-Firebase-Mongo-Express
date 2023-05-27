/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <div>
        <Carousel>
          <div>
            <img src="assets/home/01.jpg" className="max-w-7xl" />
          </div>
          <div>
            <img src="assets/home/02.jpg" className="max-w-7xl" />
          </div>
          <div>
            <img src="assets/home/03.png" className="max-w-7xl" />
          </div>
          <div>
            <img src="assets/home/04.jpg" className="max-w-7xl" />
          </div>
          <div>
            <img src="assets/home/05.png" className="max-w-7xl" />
          </div>
          <div>
            <img src="assets/home/06.png" className="max-w-7xl" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
