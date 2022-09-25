import React from 'react';
import './Product.css'

const Product = (props) => {
    // props call korer age amra destructuring kore nibo shortcut er jonno
    const { name, img, seller, price, ratings } = props.product;
    const { handleAddToCart } = props;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} starts</small></p>
            </div>

            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;