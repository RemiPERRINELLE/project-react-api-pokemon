import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { ProviderProps } from "@custom-types/contextTypes";


// 1. Create the context

    // Type
    interface SearchContextType {
        isSearched: string;
        setIsSearched: Dispatch<SetStateAction<string>>;
    }

    const defaultValues: SearchContextType = {
        isSearched: "", // 0 for no storing, 1 for sorting by name A-Z, 2 for sorting by name Z-A, 3 for sorting by type
        setIsSearched: () => {},
    }

    // createContext
    export const SearchContext = createContext<SearchContextType>(defaultValues);


// 2. Provide it

    export default function SortingProvider ({children} : ProviderProps) {
        // useState
        const [isSearched, setIsSearched] = useState("");

        
        // Values for Provider
        const searchValues = {
            isSearched,
            setIsSearched,
        }

        // Return <Context.Provider value>
        return(
            <SearchContext.Provider value={searchValues}>
                {children}
            </SearchContext.Provider>
        )
    }


// 3. Use it
    export const useSearch = () => useContext(SearchContext);

