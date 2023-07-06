import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from "framer-motion"
import Blog from '../../assets/images/blog.jpg';



export const ProductDetail = () => {
    const [singleProduct, setSingleProduct] = useState([])
    const params = useParams()
    const fetchApi = async (id) => {
        const api = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await api.json()
        setSingleProduct(data)
    }
    useEffect(() => {
        fetchApi(params.id)
    }, [params.id])
    console.log(singleProduct.images)
    const navigate = useNavigate()
    return (
        <div className='section container'>
            <button onClick={() => navigate('/gallery')}>Back</button>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <div className='gap-y-1 flex gap-4 p-3 border-2 text-center hover:scale-105 transition duration-300'>
                    <div>
                        <img className="h-64 mb-5 object-cover rounded-divl w-64 mx-auto" src={Blog} alt={`${singleProduct.brand}`} />
                    </div>
                    <div className="content text-left flex-1">
                        <p><strong className='text-lg uppercase mr-3'>Brand:</strong> {singleProduct.brand}</p>
                        <p><strong className='text-lg uppercase mr-3'>Title:</strong> {singleProduct.title}</p>
                        <p><strong className='text-lg uppercase mr-3'>Category:</strong> {singleProduct.cat}</p>
                        <p><strong className='text-lg uppercase mr-3'>Desc:</strong>{singleProduct.description}</p>
                        <p><strong className='text-lg uppercase mr-3'>Price:</strong> {singleProduct.price}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
