import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import error from '../../assets/images/error.svg'
import { motion } from "framer-motion"
import { uniq, uniqBy } from 'lodash';



export const ProductGallery = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [active, setActive] = useState(0)
    const [search, setSearch] = useState("")
    const fetchApi = () => {
        axios.get(`https://dummyjson.com/products/`)
            .then((res) => {
                setProducts(res.data.products)
                setCategory(res.data.products)
            }
            )
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetchApi()
    }, [])

    const handleOnSubmit = () => {
        if (search === "" || search) {
            setActive(null)
        }
        axios.get(`https://dummyjson.com/products/search?q=${search}`)
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err))
        notify()
    }

    useEffect(() => {
        handleOnSubmit()
        handleOnCat()

    }, [])



    const notify = () => toast.error("Product Not Found");

    const handleOnCat = (cat, i) => {
        if (i !== active) {
            setActive(i)
        } else {
            setActive('0');
        }
        axios.get(`https://dummyjson.com/products/category/${cat}`)
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err))
    }

    return (
        <div className='container section product-gallery-section !bg-transparent'>
            <div className=' mb-5'>
                <form action="" className='flex w-full' onSubmit={handleOnSubmit}>
                    <input className='flex-1 border-2 border-[var(--border-color)]' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className='btn__link !mt-0 !rounded-none'>Search</button>
                </form>
            </div>
            <ul className='flex gap-2 justify-center mb-3 flex-wrap'>
                {
                    uniqBy(category, 'category').map((cat, index) => {
                        return <li key={index} className={`py-2 px-4 border-2 border-[var(--border-color)] capitalize ${index === active ? 'bg-lime-400 border-transparent text-white' : ''} cursor-pointer hover:bg-lime-400 transition duration-500 hover:text-white hover:border-transparent`} onClick={() => handleOnCat(cat.category, index)}>{cat.category}</li>
                    })
                }
            </ul>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
                {products.length > 0 ?
                    products.map((product, index) => {

                        return (
                            <>
                                <Product
                                    id={product.id}
                                    key={product.id}
                                    index={index}
                                    title={product.title}
                                    brand={product.brand}
                                    image={product.images[0]}
                                    cat={product.category}
                                    desc={product.description}
                                    price={product.price}
                                />
                            </>


                        )
                    }) : <><ToastContainer
                        type="error" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}>
                            <img src={error} alt="error" />
                        </motion.div>
                    </>
                }
            </div >
        </div>
    )
}
