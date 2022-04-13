import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/makedb';

import Cart from '../Cart/Cart';
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

    useEffect(()=>{
        const storedCart=getStoreCart()
        const saveCart=[];
         for(const id in storedCart){
            const addProduct=products.find(product =>product.id ==id)
            if(addProduct){
                const quantity=storedCart[id]
                addProduct.quantity=quantity 
                saveCart.push(addProduct)
                console.log(addProduct)
            }
        }
        setCart(saveCart)
    },[products])

    const handleToAddCart =(product)=>{
        // console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.id)
   
      
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
                    <Cart
                    
                    cart={cart}></Cart>
                
                </div>
            </div>
        </div>
    );
 
};

export default Shop;