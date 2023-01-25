import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Category from '../components/Category'
import Italian from './Italian'
import Veggies from './Veggies'

const Recipe = () => {
    return (
        <section>
            <div className="container">
                <Category />
                {/* <Veggies /> */}
            </div>
        </section>
    )
}

export default Recipe
