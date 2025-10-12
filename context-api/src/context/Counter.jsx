import {createContext , useContext, useState} from "react";

export const ConterContext = createContext(null);

export const useDatabase = () => {
    const temp = useContext(ConterContext);
    return temp;
}

export const CounterProvider = (props) => {
    const [count , setCount] = useState(0);
    return (
        <ConterContext.Provider value = {{count , name:"Sriram" , setCount}}>
            { props.children }
        </ConterContext.Provider>
    );
};