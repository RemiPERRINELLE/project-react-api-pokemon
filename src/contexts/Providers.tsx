import PokemonsDataProvider from "./PokemonsDataContext";
import LoadingProvider from "./LoadingContext";
import ThemeProvider from "./ThemeContext";
import PokemonSelectedProvider from "./PokemonSelectedContext";
import { ProviderProps } from '@custom-types/contextTypes';


export default function AppProviders({children}: ProviderProps) {
    return(
        <LoadingProvider>
            <PokemonsDataProvider>
                <PokemonSelectedProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </PokemonSelectedProvider>
            </PokemonsDataProvider>
        </LoadingProvider>
    )
}