import { useState } from 'react';
import { BsSearch } from "react-icons/bs";

import portfolioData from '../Datas/portfolioData';

export default function Portfolio() {

  const [datas, setDatas] = useState(portfolioData);

  return (
    <section className="section portfolio">
      <div className="container">
        <div className="section__heading">
          <h2 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">Portfolio</h2>
        </div>
        <div className="portfolio__content" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000">
          <ul>
            {
              datas.map((data) => {
                return (
                  <li key={data.id}>
                    <div className='project group'>
                      <img src={data.image} alt={data.title} />
                      <div className="caption">{data.title}</div>
                      <a className='link absolute md:-translate-y-56 h-full md:opacity-0 opacity-100 transition md:hover:text-white duration-1000 group-hover:translate-y-0 w-full group-hover:opacity-100 text-black top-0 left-0 text-5xl flex justify-center items-center bg-transparent md:bg-gradient-to-b from-emerald-500 to-emerald-500/[0.9]' target="_blank" rel='noopener noreferrer' href={data.link}>{<BsSearch className='hover:scale-150 transition duration-1000 animate-wiggle' />}</a>
                    </div>
                  </li>
                )
              })
            }


          </ul>
        </div>
      </div>
    </section>
  );
};
