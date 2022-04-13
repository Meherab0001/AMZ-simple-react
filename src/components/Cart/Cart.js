import React from 'react';
import './Cart.css'

const Cart = ({removeFormCart,cart}) => {
   
    let id='';
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        id=product.id
        quantity=quantity+product.quantity
        total=total+product.price;
        shipping=shipping+product.shipping;
    }
    const tax=parseFloat( total*0.01)
    const grantTotal=tax+total+shipping;
    return (
        <div className='cart'>
            <h2>Cart sumaray</h2>
            <p>Select item:{cart.length}</p>
            <p>Total:${total}</p>
            <p>Shippin price:${shipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h5>Grant Total:${grantTotal.toFixed(2)}</h5>
            <button onClick={()=>removeFormCart(id)}>Clear Cart</button>
        </div>
    );
};

export default Cart;