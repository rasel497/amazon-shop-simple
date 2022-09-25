import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setPoducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPoducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h4>This is for products: {products.length}</h4>
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;