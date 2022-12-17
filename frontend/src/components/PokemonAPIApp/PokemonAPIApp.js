import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

//JSON.stringify()
// const data =[
//     {
//         anme: "asif",
//         age: 22
//     }
// ]
const PokemonAPIApp = () => {
    const [pokemonData, setPokemonData] = useState([])
    useEffect(()=>{ //UseEffect - 3 Steps to Display API Information
        // fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807") // Fetching Data from API
        // .then(res => res.json()) //Takes Response Data and makes it .Json Format (Strings to Values)
        // .then(result => setPokemonData(result.results)) //Displays the results from the API Fetch
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")
        .then(result => setPokemonData(result.data.results))
    },[])
    console.log(pokemonData)
    return (
        <div>
            <h1>Pokemon API</h1>
            {
                pokemonData?.map(pokemon => <p>{pokemon.name}</p>)
                //pokemonData is all of the information from the API Fetch
                //so each of the object array is then mapped indivially to the value "pokemon"
                //then pokemon is set to diaplay only the name value out of each object's line.
            }
        </div>
    );
};

export default PokemonAPIApp;