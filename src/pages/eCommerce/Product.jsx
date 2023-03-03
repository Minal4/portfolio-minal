import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ data, cartHandler }) => {

    return (
        <>
            <Link to={`/singleProduct/${data.id}`}>
                <div className="shop__image">
                    <img src={data.image} alt={data.title} />
                </div>
                <div className="shop__content text-center">
                    <span className='cat py-2 px-5 rounded-3xl text-white text-xs mb-3'>{data.category}</span>
                    <h2 className='my-3'>{data.title}</h2>
                    <span className='rating'>{data.rating.rate}</span><br />
                    <span className='price'>Rs {data.price}</span>
                    <button onClick={() => cartHandler(data)} className='btn__link'>Add to cart</button>
                </div>
            </Link>
        </>
    )
}

export default Product
