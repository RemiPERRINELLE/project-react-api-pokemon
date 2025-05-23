import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
import { PokemonSelected } from "@custom-types/pokemonTypes";
import { ProviderProps } from '@custom-types/contextTypes';

// 1. Create the context

    // Type
        interface PokemonSelectedContextType {
            pokemonSelected: PokemonSelected | null;
            setPokemonSelected: Dispatch<SetStateAction<PokemonSelected | null>>;
        }

        const defaultValues: PokemonSelectedContextType = {
            pokemonSelected: null,
            setPokemonSelected: () => {},
        };

    // createContext
    export const PokemonSelectedContext = createContext<PokemonSelectedContextType>(defaultValues)


// 2. Provide it

    export default function PokemonSelectedProvider({children}: ProviderProps) {
        // useState
        const [pokemonSelected, setPokemonSelected] = useState<PokemonSelected  | null>(null);

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


// 3. Use it
    export const usePokemonSelected = () => useContext(PokemonSelectedContext);
