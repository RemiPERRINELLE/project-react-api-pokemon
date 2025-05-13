import { createContext, useContext, useState } from "react";

// Create the context
export const PokemonsDataContext = createContext({
    pokemonsData: [],
    setPokemonsData: () => {},
    pokemonsSpecies: [],
    setPokemonsSpecies: () => {},
    errorPokemonsData: null,
    setErrorPokemonsData: () => {},
})


// Provide it
export default function PokemonsDataProvider({children}) {
    // useState
    const [pokemonsData, setPokemonsData] = useState([]);
    const [pokemonsSpecies, setPokemonsSpecies] = useState([]);
    const [errorPokemonsData, setErrorPokemonsData] = useState(null);

    // Values for Provider
    const pokemonsDataValues = {
        pokemonsData,
        setPokemonsData,
        pokemonsSpecies,
        setPokemonsSpecies,
        errorPokemonsData,
        setErrorPokemonsData,
    }

    // Return <Context.Provider value>
    return(
        <PokemonsDataContext.Provider value={pokemonsDataValues}>
            {children}
        </PokemonsDataContext.Provider>
    )
}

// Use it
export const usePokemonsData = () => useContext(PokemonsDataContext);
