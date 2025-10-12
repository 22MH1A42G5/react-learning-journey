import { useContext } from "react";
import React  from "react";
import { ConterContext } from "../context/Counter";

const Counter = () => {
    const context = useContext(ConterContext);

    return (
        <div>
            <button onClick={() => context.setCount(context.count+1)}>Increment</button>
            <button onClick={() => context.setCount(context.count-1)}>Decrement</button>
        </div>
    )
}

export default Counter;