/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import { FaLeanpub } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle subTitle={"What Our Clients Say"} Title={"TESTIMONIALS"} />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review._id} className="mx-auto text-center">
                <div>
                  <div className="mx-auto w-72">
                    <Rating value={review.rating} readOnly />
                  </div>
                  <div></div>
                  <div>
                    <p className="font-bold text-center">{review.details}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-3xl text-orange-500">
                      {review.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
