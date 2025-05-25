import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { ProviderProps } from "@custom-types/contextTypes";


// 1. Create the context

    // Type
    interface IntroContextType {
        isIntroOpen: boolean;
        setIntroOpen: Dispatch<SetStateAction<boolean>>;
        isIntroAnimate: boolean;
        setIntroAnimate: Dispatch<SetStateAction<boolean>>;
    }

    const defaultValues:  IntroContextType = {
        isIntroOpen: false,
        setIntroOpen: () => {},
        isIntroAnimate: true,
        setIntroAnimate: () => {},
    }

    // createContext
    export const IntroContext = createContext<IntroContextType>(defaultValues);


// 2. Provide it

    export default function IntroProvider ({children} : ProviderProps) {
        // useState
        const [isIntroOpen, setIntroOpen] = useState(false);
        const [isIntroAnimate, setIntroAnimate] = useState(true);
        
        // Values for Provider
        const introValues = {
            isIntroOpen,
            setIntroOpen,
            isIntroAnimate,
            setIntroAnimate,
        }

        // Return <Context.Provider value>
        return(
            <IntroContext.Provider value={introValues}>
                {children}
            </IntroContext.Provider>
        )
    }


// 3. Use it
    export const useIntro = () => useContext(IntroContext);

