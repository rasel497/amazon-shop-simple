import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    // state-02 for shopping cart
    const [cart, setCart] = useState([]);

    // remove all/clear all
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    //01 for Cart storage
    useEffect(() => {
        console.log('Local storage first line', products)
        const storedCart = getStoreCart();
        // set after below quantity
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct);
            }
            // console.log(addedProduct)
        }
        setCart(savedCart);
        // console.log('local storage finished')
    }, [products]);


    // btn-hadlerCart
    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // do not use push cart.push(product);
        setCart(newCart);
        // for local storage after completing calculation
        addToDb(selectedProduct.id)
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
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to={'/orders'}>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;


