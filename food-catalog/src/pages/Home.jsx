import React from "react";
import NavBar from "../components/NavBar";
import AllItems from "../components/AllItems";
const Home = () => {
    return (
        <>
            <NavBar isFavs = {true} />
            <AllItems />
        </>
    )
}

export default Home;