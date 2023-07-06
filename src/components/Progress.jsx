import React from 'react';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiJavascript, DiReact } from 'react-icons/di'
import { SiTailwindcss, SiAdobephotoshop, SiFigma, SiWordpress } from 'react-icons/si'


export default function Progress() {

  return (
    <div className="stats" >
      <ul className="skills">
        <li>
          <SiAdobephotoshop />
          <h2 className="title">
            Photoshop
          </h2>
        </li>
        <li>
          <SiFigma />
          <h2 className="title">
            Figma
          </h2>
        </li>
        <li>
          <AiFillHtml5 />
          <h2 className="title">
            HTML5
          </h2>
        </li>
        <li>
          <DiCss3 />
          <h2 className="title">
            CSS3
          </h2>
        </li>
        <li>
          <DiSass />
          <h2 className="title">
            Sass
          </h2>
        </li>
        <li>
          <SiTailwindcss />
          <h2 className="title">
            Tailwind
          </h2>
        </li>
        <li>
          <DiJavascript />
          <h2 className="title">
            Javascript
          </h2>
        </li>
        <li>
          <DiReact />
          <h2 className="title">
            React
          </h2>
        </li>
        <li>
          <SiWordpress />
          <h2 className="title">
            Wordpress
          </h2>
        </li>
        <li>
          <AiFillGithub />
          <h2 className="title">
            Git
          </h2>
        </li>
      </ul>
      {/* <Swiper className="mySwiper" navigation={true} modules={[Navigation, Autoplay]} loop={true} autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}>
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

      </Swiper> */}

    </div >
  );
};
