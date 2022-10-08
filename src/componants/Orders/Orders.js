import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)


    // delete single item handler
    const hnadleRemoveItem = (id) => {
        // console.log(id);
        // filter mne tokee chra sbyke nibo
        // find mnne sudu toke nibo
        const remainning = cart.filter(product => product.id !== id);
        setCart(remainning);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        hnadleRemoveItem={hnadleRemoveItem}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;