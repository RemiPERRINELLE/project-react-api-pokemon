import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { ProviderProps } from "@custom-types/contextTypes";


// 1. Create the context

    // Type
    interface FilterContextType {
        isFiltered: number;
        setIsFiltered: Dispatch<SetStateAction<number>>;
    }

    const defaultValues:  FilterContextType = {
        isFiltered: 0, // 0 for no filter, 1-18 fitler with order number of type (for example fire is 3)
        setIsFiltered: () => {},
    }

    // createContext
    export const FilterContext = createContext<FilterContextType>(defaultValues);


// 2. Provide it

    export default function FilterProvider ({children} : ProviderProps) {
        // useState
        const [isFiltered, setIsFiltered] = useState(0);
        
        // Values for Provider
        const filterValues = {
            isFiltered,
            setIsFiltered,
        }

        // Return <Context.Provider value>
        return(
            <FilterContext.Provider value={filterValues}>
                {children}
            </FilterContext.Provider>
        )
    }


// 3. Use it
    export const useFilter = () => useContext(FilterContext);

