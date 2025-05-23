import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
import { PokemonData } from "@custom-types/pokemonTypes"
import { ProviderProps } from '@custom-types/contextTypes';


// 1. Create the context

    // Type
    // interface Species {
    //     frenchName: string;
    // }

    interface PokemonsDataContextType {
        pokemonsData: PokemonData[];
        setPokemonsData: Dispatch<SetStateAction<PokemonData[]>>;
        // pokemonsSpecies: Species[];
        // setPokemonsSpecies: Dispatch<SetStateAction<Species[]>>;
        errorPokemonsData: string | null;
        setErrorPokemonsData: Dispatch<SetStateAction<string | null>>;
    }

    const defaultValues: PokemonsDataContextType = {
        pokemonsData: [],
        setPokemonsData: () => {},
        // pokemonsSpecies: [],
        // setPokemonsSpecies: () => {},
        errorPokemonsData: null,
        setErrorPokemonsData: () => {},
    };

    // createContext
    export const PokemonsDataContext = createContext<PokemonsDataContextType>(defaultValues);


// 2. Provide it

    export default function PokemonsDataProvider({children}: ProviderProps) {
        // useState
        const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
        // const [pokemonsSpecies, setPokemonsSpecies] = useState<Species[]>([]);
        const [errorPokemonsData, setErrorPokemonsData] = useState<string | null>(null);

        // Values for Provider
        const pokemonsDataValues = {
            pokemonsData,
            setPokemonsData,
            // pokemonsSpecies,
            // setPokemonsSpecies,
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


// 3. Use it
    export const usePokemonsData = () => useContext(PokemonsDataContext);
