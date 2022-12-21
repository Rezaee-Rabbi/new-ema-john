import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import css from './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufecture: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>

                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;