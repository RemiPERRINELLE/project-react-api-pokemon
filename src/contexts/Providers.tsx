import PokemonsDataProvider from "./PokemonsDataContext";
import LoadingProvider from "./LoadingContext";
import ThemeProvider from "./ThemeContext";
import PokemonSelectedProvider from "./PokemonSelectedContext";
import { ProviderProps } from '@custom-types/contextTypes';
import IntroProvider from "./IntroContext";
import FilterProvider from "./FilterContext";
import SortingContext from "./SortingContext";
import SearchProvider from "./SearchContext";

export default function AppProviders({children}: ProviderProps) {
    return(
        <LoadingProvider>
            <PokemonsDataProvider>
                <SortingContext>
                    <FilterProvider>
                        <SearchProvider>
                            <PokemonSelectedProvider>
                                <ThemeProvider>
                                    <IntroProvider>
                                        {children}
                                    </IntroProvider>
                                </ThemeProvider>
                            </PokemonSelectedProvider>
                        </SearchProvider>
                    </FilterProvider>
                </SortingContext>
            </PokemonsDataProvider>
        </LoadingProvider>
    )
}