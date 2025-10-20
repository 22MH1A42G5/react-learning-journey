import React , {useState, createContext , useContext, useEffect} from "react";
import { getAllItems } from "../api/Items";
const ItemsContext = createContext(null);


export const getData = () => {
    return useContext(ItemsContext);
}
export const ItemsProvider = (props) => {
    const [items , setItems] = useState([]);
    const [favs , setFavs] = useState([]);
    const [isLoved , setIsLoved] = useState(Array(14).fill(false));
    // console.log(isLoved);
    const fetchData = async () => {
        const response = await getAllItems();
        console.log(response);
        setItems(response.categories);
    }
    useEffect( () =>{ fetchData()} , []);
    return (
        <ItemsContext.Provider value = {{items , setItems , favs , setFavs , isLoved , setIsLoved}}>
            {props.children}
        </ItemsContext.Provider>
    )

}