import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FaMedal } from 'react-icons/fa';
import { CiTimer } from 'react-icons/ci';
import { MdOutlineArrowBack } from 'react-icons/md';
import Crew from './Crew';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";


const Details = () => {
    const [singleMovie, setSingleMovie] = useState({});
    const [crew, setCrew] = useState([]);
    const params = useParams();
    const navigate = useNavigate();


    const movieApi = async (title) => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/${title}?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US`)
        const data = await api.json();
        setSingleMovie(data)
    }

    const crewApi = async (cred) => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/${cred}/credits?api_key=fcbeecaa82658f6bf032028787c418e4&language=en-US`)
        const data = await api.json();
        setCrew(data.cast)
    }

    useEffect(() => {
        movieApi(params.id)
        crewApi(params.id);
    }, [params.id])



    return (
        <div className='single'>
            <div className="banner" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${singleMovie.backdrop_path})`
            }}>
                <div className="container">

                    <div className="back btn__link" onClick={() => navigate('/movie')}><MdOutlineArrowBack /> GO BACK</div>
                    <div className="single__poster">
                        <div className="poster">
                            <img src={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`} alt="" />
                            <div className="status">
                                {singleMovie.status}
                            </div>
                        </div>
                        <div className="single__content">
                            <div className="title">
                                <h2>{singleMovie.title}
                                    <span className="lang"> ({singleMovie.original_language})</span>
                                    <span>{singleMovie.release_date}</span>
                                </h2>
                            </div>
                            <div className="popularity"><FaMedal /> Popularity: {singleMovie.popularity}</div>
                            <div className="duration"><CiTimer /> Runtime: {singleMovie.runtime}</div>
                            <p className="tagline">{singleMovie.tagline}</p>
                            <h2 className='overview'><strong>Overview</strong>{singleMovie.overview}</h2>
                        </div>
                    </div>
                    <Swiper
                        // modules={[Autoplay]}
                        className="mySwiper"
                        slidesPerView={2}
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
                        {crew.map((cast) => {
                            return <SwiperSlide key={cast.id} className="swiper-slide">
                                {<Crew cast={cast} />}
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default Details