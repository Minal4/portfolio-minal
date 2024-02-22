import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Product = ({ image, index, brand, title, id, cat, desc, price }) => {


    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <div className='gap-y-1 grid p-3 border-2 border-[var(--border-color)] text-center hover:scale-105 transition duration-300'>
                    <>
                        <Link to={`/gallery/${id}`}>
                            <div><img className="h-64 mb-5 object-cover rounded-full w-64 mx-auto" src={image} alt="gallery-poster"></img></div>
                            <div><strong>Brand:</strong> {brand}</div>
                            <div><strong>Title:</strong> {title}</div>
                            <div><strong>Category:</strong> {cat.toUpperCase()}</div>
                            <div><strong>Desc:</strong> {`${desc.substring(0, 10)}...`}</div>
                            <div><strong>Price:</strong> ${price}</div>
                        </Link>
                    </>
                </div>
            </motion.div >
        </>
    )
}

export default Product