import { useState } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Product = ({ image, index, brand, title, id, cat, desc, price }) => {


    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <ul className='gap-y-1 grid p-3 border-2 text-center hover:scale-105 transition duration-300'>
                    <>
                        <Link to={`/gallery/${id}`}>
                            <li><img className="h-64 mb-5 object-cover rounded-full w-64 mx-auto" src={image}></img></li>
                            <li><strong>Brand:</strong> {brand}</li>
                            <li><strong>Title:</strong> {title}</li>
                            <li><strong>Category:</strong> {cat.toUpperCase()}</li>
                            <li><strong>Desc:</strong> {`${desc.substring(0, 10)}...`}</li>
                            <li><strong>Price:</strong> ${price}</li>
                        </Link>
                    </>
                </ul>
            </motion.div >
        </>
    )
}

export default Product