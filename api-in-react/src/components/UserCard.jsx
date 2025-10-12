import React from "react";

const UserCard = (props) => {
    const userDetails = props.title;

    return (
        <div className="user-container">
            <img src={userDetails.picture.large} alt="" />
            <h4>Hi , My name is</h4>
            <h2>{userDetails.name.first}</h2>
            <button onClick={props.onClick}>Refresh</button>
        </div>
        // <img src = {props.title}></img>
        // <div>{props.title}</div>
    );
}

export default UserCard;