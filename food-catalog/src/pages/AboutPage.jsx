import React from "react";
import { getData } from "../context/ItemsCont";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import '../components/Card.css'
const AboutPage = () => {
    const params = useParams();
    const data = getData();
    const rawId = params.Id[1];
    const numId = Number(rawId);
    const item = data.items[numId-1];
    // console.log("params" , data.items[numId-1]);
    return (
        <>
            <NavBar />
        <div className="about-div">
            <h1>{item.strCategory}</h1>
            <img src={item.strCategoryThumb} alt="" />
            <p> {item.strCategoryDescription}</p>
        </div>
        </>
    )
}

export default AboutPage;

