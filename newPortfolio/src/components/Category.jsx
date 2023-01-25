import React from 'react'
import { FaHamburger, FaHouzz, FaCentos, FaEnvira } from "react-icons/fa";
import styled from 'styled-components';

const Category = () => {
    return (
        <div>
            <ListWrap>
                <li><FaHamburger />American</li>
                <li><FaHouzz /> Italian</li>
                <li><FaCentos /> Thai</li>
                <li><FaEnvira />Japanese</li>
            </ListWrap>
        </div>
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
    }
`

export default Category
