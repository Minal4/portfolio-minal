import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// core version + navigation, pagination modules:
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function Progress() {
  return (
    <div className="stats">
      <Swiper className="mySwiper" navigation={true} modules={[Navigation]}>
        <SwiperSlide className="swiper-slide"><h3>Photoshop</h3>
          <CircularProgressbar value={50} text={`50%`} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><h3>CSS3</h3>
          <CircularProgressbar value={85} text={`85%`} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><h3>HTML5</h3>
          <CircularProgressbar value={85} text={`85%`} /></SwiperSlide>

        <SwiperSlide className="swiper-slide"><h3>JS</h3>
          <CircularProgressbar value={50} text={`50%`} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><h3>SASS</h3>
          <CircularProgressbar value={65} text={`65%`} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><h3>Bootstrap</h3>
          <CircularProgressbar value={75} text={`75%`} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><h3>Wordpress</h3>
          <CircularProgressbar value={55} text={`55%`} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><h3>React (Learning)</h3>
          <CircularProgressbar value={25} text={`25%`} /></SwiperSlide>

      </Swiper>

    </div>
  );
};
