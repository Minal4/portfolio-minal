import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ data, cartHandler }) => {

    return (
        <div>
            <div className="shop__image">
                <Link to={`/singleProduct/${data.id}`}>
                    <img src={data.image} alt={data.title} />
                </Link>
            </div>
            <div className="shop__content text-center">
                <span className='cat py-2 px-5 rounded-3xl text-white text-xs mb-3'>{data.category}</span>
                <h2 className='my-3'>{data.title}</h2>
                <span className='rating'>{data.rating.rate}</span><br />
                <span className='price'>Rs {data.price}</span>
                <button onClick={() => cartHandler(data)} className='btn__link'>Add to cart</button>
            </div>
        </div>
    )
}

export default Product
