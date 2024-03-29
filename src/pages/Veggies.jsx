import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/splide/css';

// or only core styles
import '@splidejs/splide/css/core';

const Veggies = () => {
    const [veg, setVeg] = useState([]);


    useEffect(() => {
        veggie();
    }, [])

    const veggie = async () => {

        const items = JSON.parse(localStorage.getItem('popular'));

        if (items) {
            setVeg(items);
        } else {
            let api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=06d8dd50dc8545b6884155c62ce064d7&number=9`);
            let data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
        }
    }

    const filteredItem = veg.filter((vegs) => {
        return (vegs.vegetarian === true)
    })

    return (
        <>
            <div className="veggies-container px-14">
                <Heading className="mb-5">Veggies</Heading>
                <div className="wrapper">
                    <Splide options={{
                        type: 'loop',
                        perPage: 3,
                        gap: '1rem',
                        autoScroll: {
                            pauseOnHover: true,
                            pauseOnFocus: true,
                            rewind: false,
                            speed: 1
                        },
                        arrows: false,
                        pagination: false,
                        breakpoints: {
                            1920: {
                                perPage: 3,

                            },
                            1024: {
                                perPage: 2,

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
                        {filteredItem.map((item) => {
                            return (
                                <SplideSlide key={item.id}>
                                    <Card className="wrapper">
                                        <img src={item.image} alt="" />
                                        <p>{item.title}</p>
                                    </Card>
                                </SplideSlide>
                            )
                        })}
                    </Splide>
                </div>
            </div>
        </>
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
    p {
        position: absolute;
        top: 50%;
        left: 50%;
        content:"";
        transform: translateX(-50%);
        color: #fff;
    }
`

export default Veggies
