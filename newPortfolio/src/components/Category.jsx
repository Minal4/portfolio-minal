import React from 'react'
import { FaHamburger, FaHouzz, FaCentos, FaEnvira } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Category = () => {
    return (
        <div>
            <ListWrap>
                <li><FaHamburger /><NavLink to={"/recipe/American"} > American</NavLink></li>
                <li><FaHouzz /> <NavLink to={"/recipe/Italian"} > Italian</NavLink></li>
                <li><FaCentos /> <NavLink to={"/recipe/Thai"} > Thai</NavLink></li>
                <li><FaEnvira /><NavLink to={"/recipe/Japanese"} > Japanese</NavLink></li>
            </ListWrap>
        </div >
    )
}

const ListWrap = styled.ul`
    display: flex;
    justify-content: center;
    align-center: center;
    gap: 20px;

    li {
        width: 100px;
        
        height: 100px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color:#fff;
        background: #bdc3c7;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        transform: scale(0.7);
        a {
            color:#fff;
        }
    }
`

export default Category
