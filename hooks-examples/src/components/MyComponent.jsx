import React, { useEffect ,useState } from "react";

const MyComponent = () => {
    const [count , setCount] = useState(0);
    useEffect( ()=>{
        console.log("My Component is Mounting...") // When the Component is Mounted then it will get executed

        return function() {
            console.log("Unmounting..."); // the return function will execute when the component was unmounted
        }
    } , []); 

    useEffect(() => {
        console.log("Counter Got Updated " , count); // When count is get updated then only it will get updated
        
        return function() {
            console.log("Returning count is" , count)
        }
    } , [count]); 

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={() => setCount(count+1)}>Update</button>
        </div>
    );
}
export default MyComponent;
