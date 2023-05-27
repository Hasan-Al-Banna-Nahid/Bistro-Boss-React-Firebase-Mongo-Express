/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Featured = () => {
  return (
    <div>
      <SectionTitle
        subTitle={"From 11.00 AM To 10.00 PM"}
        Title={"Order Now"}
      />
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-[50%] my-6"
        >
          <SwiperSlide>
            <img src="assets/home/slide1.jpg" className="rounded-2xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/home/slide2.jpg" className="rounded-2xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/home/slide3.jpg" className="rounded-2xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/home/slide4.jpg" className="rounded-2xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/home/slide5.jpg" className="rounded-2xl" alt="" />
          </SwiperSlide>
          <div className="flex gap-6 mt-4">
            <div>
              <FaArrowLeft />
            </div>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
