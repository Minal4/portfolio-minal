import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Italian = () => {
    const [italian, setItalian] = useState([]);
    const param = useParams;
    console.log(param, 'param');


    useEffect(() => {
        ItalianApi();
    }, [])

    const ItalianApi = async (name) => {

        const items = JSON.parse(localStorage.getItem('popular'));

        if (items) {
            setItalian(items);
        } else {
            let api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=06d8dd50dc8545b6884155c62ce064d7&number=9&cuisine=${name}`);
            let data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            console.log(data, 'darta')
        }
    }

    const filteredItem = italian.filter((vegs) => {
        return (vegs.vegetarian === true)
    })

    return (
        <div>
            <div className="container">
                <Heading>Italian</Heading>
                <div className="wrapper">

                    {filteredItem.map((item) => {
                        return (
                            <Card className="wrapper">
                                <img src={item.image} alt="" />
                                <p>{item.title}</p>
                            </Card>
                        )
                    })}
                </div>
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
    p {
        position: absolute;
        top: 50%;
        left: 50%;
        content:"";
        transform: translateX(-50%);
        color: #fff;
    }
`

export default Italian
