import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Pokemon({name}) {

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                console.log(result.data)
                setPokemon(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();

    }, [])


    return (
        <div className="pokemon-card">
            {pokemon && <>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={`afbeelding pokemon ${pokemon.name}`}/>
                <p>Moves: {pokemon.moves.length}</p>
                <p>Weight: {pokemon.weight}</p>
                <ul>
                    {pokemon.abilities.map((ability)  => {
                        return (
                            <li key={ability.slot}>
                                {ability.ability.name}
                            </li>
                        )
                    })
                    }
                </ul>
            </>}

        </div>
    );
}

export default Pokemon