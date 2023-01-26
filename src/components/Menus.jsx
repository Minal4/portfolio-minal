import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Veggies from '../pages/Veggies'
import Category from './Category'


const Menus = () => {
    const [input, setInput] = useState('');
    let navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`searched/${input}`)
    }
    return (
        <section className='section menus'>
            <div className="container" onSubmit={submitHandler}>
                <form className="search-input"> <input placeholder='SEARCH PRODUCTS...' onChange={(e) => setInput(e.target.value)} type="text" value={input} />
                </form>
            </div>
            <Category />
            <Veggies />
            <Outlet />
        </section>
    )
}

export default Menus
