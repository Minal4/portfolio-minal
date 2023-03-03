import CartPage from "./CartPage";
import Product from "./Product";

const Shop = ({ shopData, cartHandler }) => {
    return (
        <>
            <div className="banner py-28">
                <div className="section__heading">
                    <h2 className="text-center">Shop</h2>
                </div>
            </div>
            <div className="container section">
                <div className="shop">
                    <div className="shop__wrapper">
                        {
                            shopData.map((data) => {
                                return <Product key={data.id} data={data} cartHandler={cartHandler} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
