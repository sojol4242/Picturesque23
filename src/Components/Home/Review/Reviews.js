import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import SwiperCore, { Autoplay, Pagination,EffectCoverflow } from "swiper/core";
import "./review.css";
import Review from "./Review";
import ErrorCard from "./ErrorCard";

 

SwiperCore.use([EffectCoverflow,Pagination, Autoplay]);
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://photograpy-backend.onrender.com/getReview")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section id="reviews" className="container-fluid">
      <div className="row">
        <div className="review_head col-md-12 text-center mx-auto">
          <h2 className="title">
            {" "}
            <span>What clients</span> say about us
          </h2>
        </div>
      </div>
      {reviews.length > 0 ? (      
          <div className="review">
            <Swiper
          
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1.1,
          }}
          pagination={true}
          loop= {true}
          className="mySwiper"
         
          slidesPerView={3}
          breakpoints={{
              320: {
                  slidesPerView: 1,
                  spaceBetween: 3,
              },
              768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
              },
              1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
              },
          }}
          autoplay={{
              "delay": 2500,
              "disableOnInteraction": false,
          }}
          spaceBetween={10}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
            >
           
              {reviews.map((rev ) => (
                <SwiperSlide>
                  <Review rev={rev} i={rev._id} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        
      ) : (
        <SwiperSlide>
        <ErrorCard />
        <ErrorCard />
        <ErrorCard />
        
      </SwiperSlide>
      )}
    </section>
  );
};

export default Reviews;
