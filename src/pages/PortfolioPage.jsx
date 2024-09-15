import { IoArrowForward } from "react-icons/io5";
import _ from 'lodash';
// or only core styles
import '@splidejs/splide/css/core';
import portfolioData from '../Datas/portfolioData';
import { Link, useLocation } from "react-router-dom";
import InnerBanner from "../components/InnerBanner";

export default function PortfolioPage() {
    const location = useLocation();
    const pageTitle = location.pathname.substring(1);

    return (
        <>
            <InnerBanner pageTitle={_.capitalize(pageTitle)} />
            <section className="section portfolio">
                <div className="container">
                    <div className="section__heading flex justify-between items-center">
                        <h2>Selected Work</h2>
                        <div className="btn-wrap">
                            <Link to={"./portfolio"} className="flex items-center gap-4 hover:gap-2 transition-all">See More <IoArrowForward /></Link >
                        </div>
                    </div>
                    <div className="portfolio__content grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {
                            portfolioData.map((data, index) => {
                                return (
                                    <div className='project group relative brightness-50 transition-all hover:brightness-100' key={index}>
                                        <img src={data.image} alt={data.title} className="aspect-square object-cover object-top" />
                                        <a href={data.link} className="-translate-y-3/4 transition opacity-0 group-hover:translate-y-0 group-hover:opacity-100 caption absolute bottom-6 bg-dark-color text-color-light hover:bg-background-hover-button hover:text-color-light p-4 w-11/12 mx-auto left-0 right-0 backdrop-blur">{data.title}</a>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};
