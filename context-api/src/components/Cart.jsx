import React from "react";
import { CartDB } from "../context/Cart";
const Cart = () => {
    const cart = CartDB();
    // const total = cart.items.reduce( (a , b.price) => a + b.price , 0);
    return (
        <div className="cart">
            <h1>Cart</h1>
            {
                cart && cart.items.map((item , i) => <li key={i} >{item.name} -- Rs {item.price}</li>)
            }
            <h5>Total Bill: Rs {cart.items.reduce( (a , b) => a + b.price , 0)}</h5>
        </div>
    )
}

export default Cart;