import React from "react";
import { getData } from "../context/ItemsCont";
import { getAllItems } from "../api/Items";
import Card from "./Card";
import './Card.css'

const AllItems = () => {
    const allItems = getData();
    console.log(allItems);
    // console.log(items)
    return (
        <>
        <h1 className="heading">Yummies</h1>
        <div className="big-container">
            {
                allItems.items.map((item , index) => {
                    return (<Card id = {item.idCategory} title = {item.strCategory} image1 = {item.strCategoryThumb} visible = {true} />)
                })
            }
        </div>
        </>
    )
}

export default AllItems;