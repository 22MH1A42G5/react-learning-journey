import React from "react";
import { getData } from "../context/ItemsCont";
import { getAllItems } from "../api/Items";
import Card from "./Card";
import './Card.css'

const AllItems = () => {
    const allItems = getData();
    // console.log(items)
    return (
        <>
        <h1 className="heading">Yummies</h1>
        <div className="big-container">
            {
                allItems.items.map((item , index) => {
                    return (<Card title = {item.strCategory} image1 = {item.strCategoryThumb} />)
                })
            }
        </div>
        </>
    )
}

export default AllItems;