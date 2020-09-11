import React, {useState, useEffect} from "react";
import axios from "axios";
import Character from "./Character";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/people/`)
        .then(res => {
            console.log("Res data : ", res.data.results);
            setCharacters(res.data.results);
        })
        .catch(err =>{ 
            console.log("Err msg :", err);
        });

    },[]);

    return(
        <div className = "CharacterData">
            {characters.map((character, index) => {
                    return (
                        <Character 
                        key = {index}
                        name = {character.name}
                        gender = {character.gender}
                        birthYear = {character.birth_year}
                        hairColor = {character.hair_color}
                        skinColor = {character.skin_color}
                        eyeColor = {character.eye_color}
                        mass = {character.mass}
                        height = {character.height}
                        />
                    );
                })
            }
        </div>
    )
} 
