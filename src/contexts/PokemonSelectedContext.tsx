import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { PokemonSelected } from "@custom-types/pokemon";

// 1. Create the context

    // Type
        interface PokemonSelectedContextType {
            pokemonSelected: PokemonSelected | null;
            setPokemonSelected: (value: PokemonSelected | null) => void;
        }

        const defaultValues: PokemonSelectedContextType = {
            pokemonSelected: null,
            setPokemonSelected: () => {},
        };

    // createContext
    export const PokemonSelectedContext = createContext<PokemonSelectedContextType>(defaultValues)


// 2. Provide it

    // Type
    interface PokemonSelectedProviderProps {
        children: ReactNode;
    }

    // Provider
    export default function PokemonSelectedProvider({children}: PokemonSelectedProviderProps) {
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
