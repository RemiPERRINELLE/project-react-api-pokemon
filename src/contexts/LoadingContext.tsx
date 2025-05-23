import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
import { ProviderProps } from '@custom-types/contextTypes';

// 1. Create the context

    // Type
    interface LoadingContextType {
        isLoading: boolean;
        setIsLoading: Dispatch<SetStateAction<boolean>>;
    }

    const defaultValues: LoadingContextType = {
        isLoading: true,
        setIsLoading: () => {},
    };
    
    // createContext
    export const LoadingContext = createContext<LoadingContextType>(defaultValues);



// 2. Provide it

    export default function LoadingProvider({children}: ProviderProps) {
        // useState
        const [isLoading, setIsLoading] = useState(true);

        // Values for Provider
        const loadingValues = {
            isLoading,
            setIsLoading,
        }

        // Return <Context.Provider value>
        return(
            <LoadingContext.Provider value={loadingValues}>
                {children}
            </LoadingContext.Provider>
        )
    }


// 3. Use it
    export const useLoading = () => useContext(LoadingContext);
