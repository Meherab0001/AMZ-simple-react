import React from 'react';

const Cart = ({cart}) => {
    
   
    return (
        <div>
            <h2>Cart sumaray</h2>
            <p>Select item:{cart.length}</p>
        </div>
    );
};

export default Cart;