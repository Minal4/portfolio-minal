import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/splide/css';

// or only core styles
import '@splidejs/splide/css/core';

const Cuisine = () => {
    const [italian, setItalian] = useState([]);
    const param = useParams();

    useEffect(() => {
        ItalianApi(param.type);
    }, [param.type])

    const ItalianApi = async (name) => {

        let api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=65bf72d48a254dbdac85a358f66f57e1&cuisine=${name}`);
        let data = await api.json();
        setItalian(data.results)
    }

    return (
        <>
            <div className="cuisine-container px-14 my-5">
                <Heading>{param.type}</Heading>
                <Wrap className="wrapper">
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
                        {italian.map((item, index) => {
                            return (
                                <SplideSlide key={index}>
                                    <Card className="card" >
                                        <img src={item.image} alt="" />
                                        <p>{item.title}</p>
                                    </Card>
                                </SplideSlide>
                            )
                        })}
                    </Splide>
                </Wrap>
            </div>
        </>
    )
}

const Heading = styled.h2`
font-size: 3rem;
`
const Wrap = styled.div`

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

export default Cuisine
