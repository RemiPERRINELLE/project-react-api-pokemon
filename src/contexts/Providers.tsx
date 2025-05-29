import PokemonsDataProvider from "./PokemonsDataContext";
import LoadingProvider from "./LoadingContext";
import ThemeProvider from "./ThemeContext";
import PokemonSelectedProvider from "./PokemonSelectedContext";
import { ProviderProps } from '@custom-types/contextTypes';
import IntroProvider from "./IntroContext";
import FilterProvider from "./FilterContext";
import SortingContext from "./SortingContext";


export default function AppProviders({children}: ProviderProps) {
    return(
        <LoadingProvider>
            <PokemonsDataProvider>
                <SortingContext>
                    <FilterProvider>
                        <PokemonSelectedProvider>
                            <ThemeProvider>
                                <IntroProvider>
                                    {children}
                                </IntroProvider>
                            </ThemeProvider>
                        </PokemonSelectedProvider>
                    </FilterProvider>
                </SortingContext>
            </PokemonsDataProvider>
        </LoadingProvider>
    )
}