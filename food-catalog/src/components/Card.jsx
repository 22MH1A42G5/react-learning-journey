import React, { useState } from "react";
import { getData } from "../context/ItemsCont";
import './Card.css';
import { RiHeartAdd2Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate();
    const data = getData();
    const isLoved = data.isLoved;
    console.log(data)
    const setIsLoved = data.setIsLoved;
    const addFavourites = () => {
        const arr = [...data.favs];
        // const loves = [...data.isLoved]
        if(isLoved[props.id-1]){
            const updatingArr = arr.filter(items => {
                return data.idCategory != props.id;
            })
            data.setFavs(updatingArr);
        }
        else{
            const adding = (data.items[props.id-1]);
            arr.push(adding);
            data.setFavs(arr);
        }
        isLoved[props.id-1] = !isLoved[props.id-1];
        setIsLoved(isLoved);

        // console.log(isLoved);
    }
    return (
        <div className="card-container">
            {
                props.visible ?
                    isLoved[props.id-1  ] ? <FaHeart className="love" color="red" onClick={addFavourites}/> : 
                    <RiHeartAdd2Fill className="love" onClick={addFavourites} />
                    :
                    <></>
            }
            <img src={props.image1} alt="" />
            <h1>{props.title}</h1>
            <p>{props.des}</p>
            <button onClick={e => navigate(`/about/:${props.id}`)}>About</button>
        </div>
    )
}

export default Card;
