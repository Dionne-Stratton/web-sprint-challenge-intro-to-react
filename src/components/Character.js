import React from "react";
import styled from "styled-components";

const NameStyle = styled.h1`
  font-size: 2 rem;
  color: #023e8a;
`

const CardStyle = styled.div`
  width: 500px;
  background-color: lightblue;
  display: inline-block;
  margin: 10%;
`

const InfoStyle = styled.div`
  color: #194c9e;
`

const Character = (props) => {
    return(
        <CardStyle className = "starwars-characters">
            <NameStyle>{props.name}</NameStyle>
            <InfoStyle className = "characters-info">
                <p>Birth Year: {props.birthYear}</p>
                <p>Gender: {props.gender}</p>
                <p>Hair Color: {props.hairColor}</p>
                <p>Skin Color: {props.skinColor}</p>
                <p>Eye Color: {props.eyeColor}</p>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
            </InfoStyle>
        </CardStyle>
    )
}

export default Character;
