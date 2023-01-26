import React from 'react'
import { Outlet } from 'react-router-dom'
import Veggies from '../pages/Veggies'
import Category from './Category'

const Menus = () => {
    return (
        <section className='section menus'>
            <Category />
            <Veggies />
            <Outlet />
        </section>
    )
}

export default Menus
