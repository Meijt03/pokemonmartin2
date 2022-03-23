import React, {useEffect, useState} from "react";
import './App.css';
import Pokemon from "./components/Pokemon"
import axios from "axios";


function App() {


    const [pokemons, setPokemons] = useState(null);
    const [endpoint,setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon')

    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(`${endpoint}`);
                console.log(result.data.results)
                setPokemons(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();

    }, [endpoint])

     return (
        <div className="geheel">
            {pokemons &&
            <button
                disabled= {!pokemons.previous}
                type="button"
                onClick={() => setEndpoint(pokemons.previous)}>
                Previous
            </button>}
            <button
                type="button"
                onClick= {() => setEndpoint(pokemons.next)}>
                Next
            </button>
            {pokemons && pokemons.results.map((card) =>{
                return  <Pokemon key={card.name} name={card.name}/>
            })}

        </div>
    );
}
export default App;
