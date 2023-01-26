import React from 'react'
import { Outlet } from 'react-router-dom'
import Searched from '../pages/Searched'
import Veggies from '../pages/Veggies'
import Category from './Category'

const Menus = () => {
    return (
        <section className='section menus'>
            <Searched />
            <Category />
            <Veggies />
            <Outlet />
        </section>
    )
}

export default Menus
