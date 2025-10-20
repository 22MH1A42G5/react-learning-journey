import React from "react";
import { FaHeart , FaSearch} from "react-icons/fa";
import './NavBar.css'
import { useNavigate } from "react-router-dom";
const NavBar = (props) => {
    const navigate = useNavigate();
    return (
        <div className="nav-container">
            <h3 className="logo">FoodCatalog</h3>
            <div className="inp-srch">
                <input type="text" />
                <button><FaSearch size={20} /></button>
            </div>
            {
                props.isFavs ?
                <button className="fav-butt" onClick={ e => navigate(`/favourites`)}> 
                    <FaHeart size={20}/>
                    <p>Favourites</p>
                </button> :
                <button className="fav-butt" onClick={ e => navigate(`/`)}> 
                    {/* <FaHeart size={20}/> */}
                    <p>Back</p>
                </button> 
            }
        </div>
    )
}

export default NavBar;