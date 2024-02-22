import React from 'react'
import { FaHamburger, FaHouzz, FaCentos, FaEnvira } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Category = () => {
    return (
        <>
            <ListWrap>
                <NavLink to={"/menus/cuisine/American"}><FaHamburger /> American</NavLink>
                <NavLink to={"/menus/cuisine/Italian"} ><FaHouzz /> Italian</NavLink>
                <NavLink to={"/menus/cuisine/Thai"} ><FaCentos />  Thai</NavLink>
                <NavLink to={"/menus/cuisine/Japanese"} ><FaEnvira /> Japanese</NavLink>
            </ListWrap>
        </ >
    )
}

const ListWrap = styled.div`
    display: flex;
    justify-content: center;
    align-center: center;
    gap: 20px;
    flex-wrap: wrap;

    a {
        width: 100px;
        cursor: pointer;
        height: 100px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color:#fff;
        background: #333;
        transform: scale(0.7);
        &:hover {
            background: #0cebeb;
            /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb);
            /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb);
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
    }
`

export default Category
