import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const PostmanPokemonApp = () => {
        const [pokemonData, setPokemonData] = useState([])
        useEffect(()=>{ //UseEffect - 3 Steps to Display API Information
            // fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807") // Fetching Data from API
            // .then(res => res.json()) //Takes Response Data and makes it .Json Format (Strings to Values)
            // .then(result => setPokemonData(result.results)) //Displays the results from the API Fetch
            axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")
            .then(result => setPokemonData(result.data.results.slice(0,4)))
        },[])

    return (
        <div>
       <h1>Postman Poke App</h1>     
       {pokemonData?.map(pokemon => <p>{pokemon.name}</p>)}
       
        </div>
    );
};

export default PostmanPokemonApp;