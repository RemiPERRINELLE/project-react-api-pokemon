import { useTheme } from "@contexts/ThemeContext";
import { ArrowUp } from "lucide-react";

export default function UpButton () {
    const { isLight } = useTheme();
    
    return (
        <button className='appearance-none border-none fixed right-3 bottom-5 rounded-full h-12 w-12 p-2 flex items-center justify-center' style={{backgroundColor: 'var(--color-text)'}} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <ArrowUp color={isLight ? '#f9fafb' : '#1e1d1d'} />
        </button>
    )
}