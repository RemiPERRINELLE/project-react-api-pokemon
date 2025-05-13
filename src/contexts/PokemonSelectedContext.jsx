import { createContext, useContext, useState } from "react";

// Create the context
export const PokemonSelectedContext = createContext({
    pokemonSelected: {},
    setPokemonSelected: () => {},
})


// Provide it
export default function PokemonSelectedProvider({children}) {
    // useState
    const [pokemonSelected, setPokemonSelected] = useState(null);

    // Values for Provider
    const pokemonSelectedValues = {
        pokemonSelected,
        setPokemonSelected,
    }

    // Return <Context.Provider value>
    return(
        <PokemonSelectedContext.Provider value={pokemonSelectedValues}>
            {children}
        </PokemonSelectedContext.Provider>
    )
}

// Use it
export const usePokemonSelected = () => useContext(PokemonSelectedContext);
