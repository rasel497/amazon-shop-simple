import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    //state-01 for prodect
    const [products, setPoducts] = useState([]);
    // state-02 for shopping cart
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPoducts(data))
    }, [])

    // btn-hadleCart
    const handleAddToCart = (product) => {
        console.log(product);
        // do not use push cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h4>Order Summary</h4>
                <h5>Selected items: {cart.length}</h5>
            </div>

        </div>
    );
};

export default Shop;


