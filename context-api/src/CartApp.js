import React from "react";
import App from "./App";
import Item from "./components/Item";
import Cart from "./components/Cart";


const CartApp = () => {
    return (
        <div className="container">
            <div className="App">
                <Item name = "laptop" price = {65000}/>
                <Item name = "mobile" price = {15000} />
                <Item name = "AC"  price = {30000} />
                <Item name = "Refrigenrater"  price = {50000} />
                <Item name = "Cooler"  price = {6000} />
                <Item name = "Washing Machine"  price = {50000} />
                <Item name = "Beruva"  price = {1100} />
                {/* <Item name = "Remote" price = {1000} /> */}
            </div>
            <Cart />
        </div>
    )
}
export default CartApp;