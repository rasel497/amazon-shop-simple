import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Selected items: {props.cart.length}</h5>
        </div>
    );
};

export default Cart;