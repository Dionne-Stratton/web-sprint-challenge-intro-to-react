import React from "react";
import styled from "styled-components";

const Character = (props) => {
    return(
        <div className = "starwars-characters">
            <div>
            <h1>{props.name}</h1>
            </div>
            <div className = "characters-info">
                <p>Birth Year: {props.birthYear}</p>
                <p>Gender: {props.gender}</p>
                <p>Hair Color: {props.hairColor}</p>
                <p>Skin Color: {props.skinColor}</p>
                <p>Eye Color: {props.eyeColor}</p>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
            </div>
        </div>
    )
}

export default Character;
