import React from "react";
import { FaHeart , FaSearch} from "react-icons/fa";
import './NavBar.css'
const NavBar = () => {
    return (
        <div className="nav-container">
            <h3 className="logo">FoodCatalog</h3>
            <div className="inp-srch">
                <input type="text" />
                <button><FaSearch size={20} /></button>
            </div>
            <button className="fav-butt"> 
                <FaHeart size={20}/>
                <p>Favourites</p>
            </button>
        </div>
    )
}

export default NavBar;