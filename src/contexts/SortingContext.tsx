import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { ProviderProps } from "@custom-types/contextTypes";


// 1. Create the context

    // Type
    interface SortingContextType {
        isSorted: number;
        setIsSorted: Dispatch<SetStateAction<number>>;
    }

    const defaultValues:  SortingContextType = {
        isSorted: 0, // 0 for no storing, 1 for sorting by name A-Z, 2 for sorting by name Z-A, 3 for sorting by type
        setIsSorted: () => {},
    }

    // createContext
    export const SortingContext = createContext<SortingContextType>(defaultValues);


// 2. Provide it

    export default function SortingProvider ({children} : ProviderProps) {
        // useState
        const [isSorted, setIsSorted] = useState(0);

        
        // Values for Provider
        const sortingValues = {
            isSorted,
            setIsSorted,
        }

        // Return <Context.Provider value>
        return(
            <SortingContext.Provider value={sortingValues}>
                {children}
            </SortingContext.Provider>
        )
    }


// 3. Use it
    export const useSorting = () => useContext(SortingContext);

