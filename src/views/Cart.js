import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useProductContext } from '../ProductContext';

function Cart(){

    const context = useProductContext()
    console.log(context)

    return(
        <div>
            <Navbar/>
            {context.selectedProduct.product_name ? 
            <h1>{context.selectedProduct.product_name}</h1>
            :
            <h1>Your cart is empty</h1>
            }
        </div>
    )


}

export default Cart;