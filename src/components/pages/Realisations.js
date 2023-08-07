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
      <h1 className="text-center text-white italic title-pages py-3 font-bold text-2xl mt-10">
        Nos Réalisations
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
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container my-5 sm:my-20 rounded-lg animate-slide-in-bottom"
      >
        <SwiperSlide>
          <img src="images/pic-1-gal.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/pic-6-gal.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/pic-7-gal.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/pic-8-gal.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/pic-9-gal.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/pic-2-gal.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/pic-3-gal.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/pic-4-gal.jpeg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/pic-5-gal.jpeg" alt="slide_image" />
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
