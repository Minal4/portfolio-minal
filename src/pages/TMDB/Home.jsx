import { useEffect, useState, useRef } from 'react'
import Card from './Card';
// core version + navigation, pagination modules:
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        movieApi()
    }, [])

    const movieApi = async (title) => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US`)
        const data = await api.json();
        setData(data.results)
    }

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className='section movies'>
            <div className="banner">
                <div className="banner__content">
                    <h2>That's a<br /> Wrap 2022</h2>
                    <p>The best (and worst) from 2022.</p>
                    <button className="btn__link">check it out</button>
                </div>
            </div>
            <div className="container">
                <div className="trending">
                    <Swiper
                        modules={[Autoplay]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                        slidesPerView={7}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={30}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 7,
                            },
                        }}
                    >
                        {data.map((movie) => {
                            return <SwiperSlide className="swiper-slide"><Card key={movie.id} movie={movie} /></SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Home