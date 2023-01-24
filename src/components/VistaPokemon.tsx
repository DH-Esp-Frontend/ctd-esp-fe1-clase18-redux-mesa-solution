import React, { useEffect} from "react";
import { useQuery } from "react-query";
import { getPokemon} from "../queries/pokemon.queries";
import {Pokemon} from "../types/pokemon.types";


interface IVista {
    pokemonSeleccionado: Pokemon | null
}

/**
 * Visualiza un pokemon seleccionado
 *
 * @param {string} pokemonSeleccionado pokemon almacenado con la funcion seleccionarPokemon
 * @author Digital House
 */

const VistaPokemon = ({pokemonSeleccionado}: IVista) => {
    const {data: pokemon, isLoading, refetch} = useQuery("obtenerPokemon",() => getPokemon(pokemonSeleccionado?.name || ""),);

    useEffect(() => {   
        if (pokemonSeleccionado) {
            refetch();
        }
    }, [refetch, pokemonSeleccionado])

    if (!pokemonSeleccionado) return <></>;
    if (isLoading) return <div>Cargando pokemon...</div>

    return pokemon ? (
        <div className="vistaPokemon">
            <h4>Pokemon: {pokemon.name}</h4>
            <h5>#{pokemon.id}</h5>
            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/>
        </div>
    ): null;
}


export default VistaPokemon;
