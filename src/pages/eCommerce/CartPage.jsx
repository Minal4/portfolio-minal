import { useContext, useEffect } from 'react';
import { CartContext } from '../../context';

const CartPage = () => {
    const { fakeEntry, setFakeEntry } = useContext(CartContext);

    const deleteHandler = (i) => {
        setFakeEntry(fakeEntry.filter((item, index) => {
            return index !== i
        }))
    }

    let intial = 0;
    let sum = fakeEntry.map((item) => item.price * item.quantity).reduce((acc, curr) => {
        return (
            acc + curr
        )
    }, intial)

    useEffect(() => {

    }, [sum])

    const increHandler = (id) => {
        setFakeEntry(fakeEntry.map((item, index) => {
            if (index === id) {
                return {
                    ...item, quantity: item.quantity + 1
                }
            } return item
        }))
    }

    const decreHandler = (id) => {
        setFakeEntry(fakeEntry.map((item, index) => {
            if (index === id) {
                return {
                    ...item, quantity: item.quantity - 1
                }
            } return item
        }))
    }
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="cart-wrapper">
                        <table className="table-auto border-collapse border border-slate-400 w-full">
                            <thead>
                                <tr className='text-left'>
                                    <th className='border-collapse border border-slate-400 p-5'></th>
                                    <th className='border-collapse border border-slate-400 p-5'>Image</th>
                                    <th className='border-collapse border border-slate-400 p-5'>Product</th>
                                    <th className='border-collapse border border-slate-400 p-5'>Quantity</th>
                                    <th className='border-collapse border border-slate-400 p-5'>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fakeEntry.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='border-collapse border border-slate-400 p-2 text-center hover:bg-slate-300' style={{ cursor: "pointer" }} onClick={() => deleteHandler(index)}>X</td>
                                            <td className='border-collapse border border-slate-400 p-2'><img style={{ width: '70px', margin: '0 auto' }} src={item.image} alt={item.title} /></td>
                                            <td className='border-collapse border border-slate-400 p-2'>{item.title}</td>
                                            <td className='border-collapse border border-slate-400 p-2 text-center'><div className="quantity-btn"><button className='decrement' onClick={() => decreHandler(index)}>-</button> {item.quantity} <button onClick={() => increHandler(index)} className='increment'>+</button></div></td>
                                            <td className='border-collapse border border-slate-400 p-2'>Rs {item.price * item.quantity}</td>
                                        </tr>
                                    )
                                })
                                }

                            </tbody>
                        </table>
                        <div className="cart-total">
                            <h2 className='font-extrabold uppercase mb-3'>Cart Totals</h2>
                            <table className='table-auto border-collapse border w-full border-slate-400'>
                                <tbody><tr><th className='p-3 border-collapse border border-slate-400 text-left'>SubTotal</th><td className='p-3 border-collapse border border-slate-400 font-bold'>Rs {Math.floor(sum)}</td></tr>
                                    <tr><th className='p-3 border-collapse border border-slate-400 text-left'>Total</th><td className='p-3 border-collapse border border-slate-400 font-bold'>Rs {Math.floor(sum)}</td></tr></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartPage
