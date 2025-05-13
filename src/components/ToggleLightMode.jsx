import UseLightMode from "../hooks/useLightMode";
import { useTheme } from "../contexts/ThemeContext"
import { Sun, Moon } from 'lucide-react';


export default function ToggleLightMode() {
  const { isLight } = useTheme();
  const [ toggleLightMode ] = UseLightMode();

  return (
    // <button onClick={toggleLightMode} className="p-2 bg-accent text-white rounded">
    //   {isLight ? 'Mode Dark' : 'Mode Light'}
    // </button>
    
    <label className="inline-flex items-center cursor-pointer absolute right-3 top-5">
      <input type="checkbox" value="" checked={isLight ? '' : 'checked'} onChange={toggleLightMode} className="sr-only peer" />
      <div className="relative w-11 h-6 bg-white peer-focus:outline-none ring-2 border-black rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white peer-checked:bg-white dark:peer-checked:bg-black dark:after:bg-black dark:after:border-black"></div>
      <span className="ms-2 text-sm font-medium">{isLight ? <Moon /> : <Sun />}</span>
    </label>


  );
}

