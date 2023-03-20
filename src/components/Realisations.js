import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function Realisations() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div>
      <h1 className="text-center text-white border border-l-0 border-r-0 font-bold text-3xl mt-10">
        Nos différentes réalisations
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true}}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container mt-10 rounded-lg"
      >
        <SwiperSlide>
          <img src="images/Jardin-bg.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/Jardin-bg3.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/Jardin-bg.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/Jardin-bg3.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/Jardin-bg.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/Jardin-bg3.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/Jardin-bg.jpeg" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <Footer />
    </>
  );
}
export default Realisations;
