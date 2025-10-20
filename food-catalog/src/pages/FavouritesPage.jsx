import React from "react";
import Card from "../components/Card";
import { getData } from "../context/ItemsCont";
import "../components/Card.css";
import NavBar from "../components/NavBar";

const FavouritesPage = () => {
    const data = getData();
    return (
        <>
            <NavBar isFavs = {false}/>
            <h1 className="heading">Favorites</h1>
            <div className="big-container">
                {
                    data.favs.map((item , index) => {
                        return (<Card id = {item.idCategory} title = {item.strCategory} image1 = {item.strCategoryThumb} visible = {false} />)
                    })
                }
            </div>
        </>
    )
}

export default FavouritesPage;