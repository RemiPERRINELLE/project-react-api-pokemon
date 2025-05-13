import { createContext, useContext, useState } from "react";

// Create the context
export const LoadingContext = createContext({
    isLoading: true,
    setIsLoading: () => {},
})


// Provide it
export default function LoadingProvider({children}) {
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

// Use it
export const useLoading = () => useContext(LoadingContext);
