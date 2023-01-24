import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
    name: string;
    url: string;
}
export interface PokemonsState {
  message: string;
  busqueda: string;
  pokemon: Pokemon
}
const initialState: PokemonsState = {
  message: "",
  busqueda:"",
  pokemon:{name:"",url:""}
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    seleccionarPokemon:(state, action:PayloadAction<Pokemon>)=>{
      state.busqueda = action.payload.name
    }
  },
});

export const { showMessage,seleccionarPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
