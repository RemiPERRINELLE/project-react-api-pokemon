import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

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

     // Type
    interface LoadingProviderProps {
        children: ReactNode;
    }

    // Provider
    export default function LoadingProvider({children}: LoadingProviderProps) {
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
