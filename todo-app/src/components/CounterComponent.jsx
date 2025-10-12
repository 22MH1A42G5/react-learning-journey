import React, {useState} from 'react'

const CounterComponent = () => {
    const [count , setCount] = useState(0);
    return (
        <div>
            <p>Count Component - {count}</p>
            <p>The number is {count % 2 === 0 ? "Even" : "Odd"}</p>
            <button onClick={() => {setCount(count+1); }}>Increment</button>
        </div>
    )
}

export default CounterComponent;