import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { ProviderProps } from '@custom-types/contextTypes';

// 1. Create the context

    // Type
    interface ThemeContextType {
        isLight: boolean;
        setIsLight: Dispatch<SetStateAction<boolean>>;
    }

    const defaultValues : ThemeContextType = {
        isLight: false,
        setIsLight: () => {},
    };

    // createContext
    export const ThemeContext = createContext<ThemeContextType>(defaultValues);


// 2. Provide it

    export default function ThemeProvider({children}: ProviderProps) {
        // useState
        const [isLight, setIsLight] = useState(() => {
            // const savedTheme = localStorage.getItem('theme');

            // // Si un thème est sauvegardé dans le localStorage, on le retourne
            // if (savedTheme === 'light') {
            //     return true;
            // }

            // // Sinon, vérifie la préférence système de l'utilisateur
            // const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
            // return prefersLight;
            const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            const savedTheme = localStorage.getItem('theme');
        
            const useLight = savedTheme === 'light' || (!savedTheme && prefersLight);
        
            if (useLight) {
            return true;
            } else {
            return false;
            }
        });

        // useEffect
        useEffect(() => {
            // Sauvegarde le thème dans le localStorage chaque fois que isLight change
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            isLight ? document.body.classList.add('light') : document.body.classList.remove('light');
        }, [isLight]);

        // Values for Provider
        const themeValues = {
            isLight,
            setIsLight,
        }

        // Return <Context.Provider value>
        return(
            <ThemeContext.Provider value={themeValues}>
                {children}
            </ThemeContext.Provider>
        )
    }


// 3. Use it
    export const useTheme = () => useContext(ThemeContext);
