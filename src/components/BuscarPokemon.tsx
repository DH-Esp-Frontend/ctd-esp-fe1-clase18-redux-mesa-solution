import React, {useState} from "react";
import { Pokemon } from "../types/pokemon.types";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";


const BuscarPokemon: React.FC = () => {
    //Aqui deberemos almacenar en estados las entradas del usuario
    const [text, setText] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState<Pokemon | null>(null);


    const onBuscarClick = () => {
        // Aqui debemos guardar la entrada del usuario
        setName(text)
    }


    const onSeleccionarPokemon = (pokemon: Pokemon) => {
        setPokemonSeleccionado(pokemon)
    }

    return (
        <>
            <div id="buscarPokemon">
                <label>Buscar pokemon</label>
                <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"} onChange={(e) => setText(e.target.value)}/>
                <button onClick={() => onBuscarClick()}>Buscar</button>
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <ListadoPokemons name={name || text} seleccionarPokemon={onSeleccionarPokemon} />
                <VistaPokemon pokemonSeleccionado={pokemonSeleccionado} /> 
             </div>
        </>
    );
}

export default BuscarPokemon;
