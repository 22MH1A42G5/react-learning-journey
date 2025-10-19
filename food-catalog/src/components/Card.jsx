import React from "react";
import { getData } from "../context/ItemsCont";
import './Card.css'

const Card = (props) => {
    return (
        <div className="card-container">
            <img src={props.image1} alt="" />
            <h1>{props.title}</h1>
            <p>{props.des}</p>
            <button>Add to Favourates</button>
        </div>
    )
}

export default Card;
