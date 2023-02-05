import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/splide/css';

const Searched = () => {
    const [searchResult, setSearchResult] = useState([]);
    const param = useParams();

    useEffect(() => {
        searchApi(param.search);
    }, [param.search])

    const searchApi = async (name) => {

        let api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=65bf72d48a254dbdac85a358f66f57e1&query=${name}`);
        let data = await api.json();
        setSearchResult(data.results)
    }


    return (
        <div>
            <div className="container">
                <Heading>{param.search}</Heading>

                <Splide options={{
                    type: 'loop',
                    gap: '1rem',
                    AutoScroll: true,
                    arrows: false,
                    autoScroll: {
                        pauseOnHover: true,
                        pauseOnFocus: true,
                        rewind: false,
                        speed: 1
                    },
                    pagination: false,
                    breakpoints: {
                        1920: {
                            perPage: 4,

                        },
                        1024: {
                            perPage: 3,

                        },
                        767: {
                            perPage: 2,

                        },
                        640: {
                            perPage: 1,

                        },
                    },
                }}
                    extensions={{ AutoScroll }}>
                    {searchResult.map((item) => {
                        return (
                            <SplideSlide>
                                <Card className="card" key={item.id}>
                                    <img src={item.image} alt="" />
                                    <p>{item.title}</p>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </div>
        </div>
    )
}

const Heading = styled.h2`
font-size: 3rem;
`

const Card = styled.div`
    position: relative;
    border-radius: 45px;
    overflow: hidden;
    text-align: center;
  
    &:before {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        content:"";
        background-color: rgba(0,0,0,0.4);
    }
    img {
        width: 100%;
    }
    p {
        position: absolute;
        top: 50%;
        left: 50%;
        content:"";
        transform: translateX(-50%);
        color: #fff;
    }
`

export default Searched