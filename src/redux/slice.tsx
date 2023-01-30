import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
  url: string;
}
export interface PokemonsState {

  busqueda: string;
  pokemon: Pokemon;
  allPokemons: any[];
}
const initialState: PokemonsState = {
 
  busqueda: "",
  pokemon: { name: "", url: "" },
  allPokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    buscarPokemon: (state, action: PayloadAction<string>) => {
      state.busqueda = action.payload;
    },
    allPokemons: (state, action: PayloadAction<any>) => {
      state.allPokemons.push(action.payload);
    },
  },
});

export const {  allPokemons, buscarPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
