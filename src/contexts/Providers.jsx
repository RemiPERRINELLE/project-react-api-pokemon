import PokemonsDataProvider from "./PokemonsDataContext";
import LoadingProvider from "./LoadingContext";
import ThemeProvider from "./ThemeContext";
import PokemonSelectedProvider from "./PokemonSelectedContext";

export default function AppProviders({children}) {
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