import { IoArrowForward } from "react-icons/io5";

// or only core styles
import '@splidejs/splide/css/core';
import portfolioData from '../Datas/portfolioData';
import { Link } from "react-router-dom";

export default function Portfolio() {


  return (
    <section className="section portfolio">
      <div className="container">
        <div className="portfolio-wrapper lg:grid lg:gap-8 md:gap-4 md:grid-cols-2">
          <div className="section__heading text-left">
            <h2>Selected Work</h2>
            <p>"Showcasing diverse projects, my portfolio highlights creativity, skill, and attention to detail in every work."</p>
            <div className="excerpt-btn btn-wrap">
              <Link to={"./portfolio"} className="btn__link inline-flex items-center gap-2 hover:text-dark-color transition-all">See More <IoArrowForward /></Link >
            </div>
          </div>
          <div className="portfolio__content grid md:grid-cols-2 gap-8">
            {
              portfolioData.slice(0, 3).map((data, index) => {
                return (
                  <div className={`project group relative lg:brightness-50 transition-all hover:brightness-100 ${index === 1 && 'lg:mt-10'}`} key={index}>
                    <img src={data.image} alt={data.title} className="aspect-square object-cover object-top" />
                    <a href={data.link} target="_blank" rel="noreferrer" className="lg:-translate-y-3/4 transition lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 caption absolute bottom-6 bg-background-hover-button lg:bg-dark-color lg:text-color-light hover:bg-background-hover-button hover:text-dark-color p-4 w-11/12 mx-auto left-0 right-0 backdrop-blur">{data.title}</a>

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};
