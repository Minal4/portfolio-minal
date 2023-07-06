import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import SearchCard from './SearchCard';

const SearchItem = () => {
    const [searchData, setSearchData] = useState([])
    const { state } = useLocation();
    useEffect(() => {
        setSearchData(state.results)
    }, [state])

    const navigate = useNavigate();

    return (
        <div className='container'>
            <button className='bg-black text-white py-5 px-10 rounded-3xl mt-5' onClick={() => navigate('/movie')}>GO BACK</button>
            <Swiper
                style={{ marginTop: 20 }}
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
                        slidesPerView: 3,
                    }
                }}
            >
                {
                    searchData.map((movie) => {
                        return (
                            <SwiperSlide className="swiper-slide">
                                <SearchCard key={movie.id} movie={movie} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div >
    )
}

export default SearchItem
