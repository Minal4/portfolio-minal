import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = ({ cartHandler }) => {
    const [data, setData] = useState([])
    const params = useParams()

    const fetchApi = async (id) => {
        const fetchProduct = await fetch(`https://fakestoreapi.com/products/${id}`)
        const res = await fetchProduct.json();
        setData(res)
    }

    useEffect(() => {
        fetchApi(params.id)
    }, [params.id])

    console.log(data, 'data')
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="single-product grid">
                        <div className="single__image">
                            <img src={data.image} alt={data.title} />
                        </div>
                        <div className="single__content shop__content">
                            <span className='cat py-2 px-5 rounded-3xl text-white text-xs '>{data.category}</span>
                            <h2 className='text-3xl font-bold text-black my-7'>{data.title}</h2>
                            <span className='price text-black'>Rs {data.price}</span>
                            <button className='btn__link' onClick={() => cartHandler(data)}> Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleProduct
