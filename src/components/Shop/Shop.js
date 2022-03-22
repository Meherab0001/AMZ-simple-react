import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    const[cart,setCart]=useState([])

    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])

    const handleToAddCart =(product)=>{
        console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
   

    }

    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                 
                    {
                        products.map(product=><Product 
                            product={product}
                            key={product.id}
                            handleToAddCart ={handleToAddCart }
                            ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h2>Product sumary</h2>
                    <p>Select itme:{cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;