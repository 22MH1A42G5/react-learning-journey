import React from "react";
import { useWeather } from "../context/Weather";
const Input = (props) => {
    const weather = useWeather();
    console.log("Weather" , weather);

    return (
        <input 
        className="input-field"
        placeholder={props.placeholder} 
        value={props.value} 
        onChange = {props.onChange}></input>
    )
}

export default Input;