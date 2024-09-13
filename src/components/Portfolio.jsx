import { IoArrowForward } from "react-icons/io5";

// or only core styles
import '@splidejs/splide/css/core';
import portfolioData from '../Datas/portfolioData';
import { Link } from "react-router-dom";

export default function Portfolio() {


  return (
    <section className="section portfolio">
      <div className="container">
        <div className="section__heading flex justify-between items-center">
          <h2>Selected Work</h2>
          <div className="btn-wrap">
            <Link to={"./PortfolioPage"} className="flex items-center gap-4 hover:gap-2 transition-all">See More <IoArrowForward /></Link >
          </div>
        </div>
        <div className="portfolio__content grid grid-cols-2 gap-8">
          {
            portfolioData.slice(0, 4).map((data, index) => {
              return (
                <div className='project group relative brightness-50 transition-all hover:brightness-100' key={index}>
                  <img src={data.image} alt={data.title} className="aspect-square object-cover object-top" />
                  <a href={data.link} className="-translate-y-3/4 transition opacity-0 group-hover:translate-y-0 group-hover:opacity-100 caption absolute bottom-6 bg-dark-color text-color-light hover:bg-background-hover-button hover:text-dark-color p-4 w-11/12 mx-auto left-0 right-0 backdrop-blur">{data.title}</a>

                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};
