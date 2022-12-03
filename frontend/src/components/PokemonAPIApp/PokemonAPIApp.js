import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const PokemonAPIApp = () => {

    const [pokemon, setPokemon] = useState([])
    const navigate = useNavigate()
    // it starts off as pokemon, but the setPokemon updates/adds information to pokemon
    // Line below takes the par "res" and puts the information inside of setPokemon which updates into pokemon

    useEffect(()=>{
        // use to grab information from API
       axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
       .then(response => response.json())
       .then(response => setPokemon(response.results))
        }, []);

    return (
        <div>
            <h1>Pokemon API</h1>
            {pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
};

export default PokemonAPIApp;