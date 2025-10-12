import {React ,useState ,createContext, useContext} from "react";

const CartContext = createContext(null);

export const CartDB = () => {
    const temp = useContext(CartContext)
    return temp;
}

export const CartProvider = (props) => {
    const [items , setItems] = useState([]);
    return (
        <CartContext.Provider value = {{items , setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}