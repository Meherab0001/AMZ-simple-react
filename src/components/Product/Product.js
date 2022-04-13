import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({handleToAddCart ,product}) => {
    const{ name,img,price,seller,ratings,}=product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info">
           <p>{name}</p>
            <p>Price:${price}</p>
            <p><small>Manufauter:{seller}</small></p>
            <p><small>Ratings:{ratings}</small></p>
           </div>
           <button onClick={()=>handleToAddCart (product) } className='btn-cart'>
               <p className='btn-text'>Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
          
        </div>
    );
};

export default Product;