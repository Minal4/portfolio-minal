import { useEffect, useState } from 'react'
import Card from './Card';
// core version + navigation, pagination modules:
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import SearchItem from './SearchItem';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
    const [latest, setLatest] = useState([]);
    useEffect(() => {
        movieApi()
        latestMovie()
    }, [])


    let navigate = useNavigate();


    const clickHandler = async (e) => {
        const api = await fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US&query=${searchInput}&page=1&include_adult=false`)
        const data = await api.json();
        setSearch(data.results)
        navigate('/searchitem')
        setSearchInput('')
    }


    const movieApi = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US`)
        const data = await api.json();
        setData(data.results)
    }

    const latestMovie = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US`)
        const data = await api.json();
        setLatest(data.results)
    }

    return (
        <section className='section movies'>
            <div className="banner">
                <div className="banner__content">
                    <h2>That's a<br /> Wrap 2022</h2>
                    <p>The best (and worst) from 2022.</p>
                    <button className="btn__link">check it out</button>
                </div>
                <div className="search-movie"><input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} /><button className="search-btn btn__link" onClick={(clickHandler)}>Search</button></div>
            </div>
            <div className="container">
                <div className="movie-wrapper">
                    <div className="trending">
                        <div className="section__heading">
                            <h2>Now Playing</h2>
                        </div>
                        <Swiper
                            // modules={[Autoplay]}
                            className="mySwiper"
                            slidesPerView={1}
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
                                return <SwiperSlide key={movie.id} className="swiper-slide"><Card movie={movie} /></SwiperSlide>
                            })}
                        </Swiper>
                    </div>

                    <div className="popular trending">
                        <div className="section__heading">
                            <h2>Upcoming</h2>
                        </div>
                        <Swiper
                            modules={[Autoplay]}
                            className="mySwiper"
                            slidesPerView={1}
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
                            {latest.map((movie) => {
                                return <SwiperSlide key={movie.id} className="swiper-slide"><Card movie={movie} /></SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home