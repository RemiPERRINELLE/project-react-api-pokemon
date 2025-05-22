import PokemonsDataProvider from "./PokemonsDataContext";
import LoadingProvider from "./LoadingContext";
import ThemeProvider from "./ThemeContext";
import PokemonSelectedProvider from "./PokemonSelectedContext";
import { ReactNode } from "react";


// Type
interface AppProvidersProps {
    children: ReactNode;
}

export default function AppProviders({children}: AppProvidersProps) {
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