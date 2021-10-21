import React from "react";

export default function Profile(props){
    return(
        <h1 style={{margin: 0, color: "white"}}>Добро пожаловать, {props.profileData.login} !</h1>
    )
}