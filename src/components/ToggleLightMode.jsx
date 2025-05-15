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
      <div className={`${isLight ? 'bg-white border-black after:bg-black after:border-black' : 'bg-dark border-white after:bg-white after:border-white'} relative w-11 h-6 peer-focus:outline-none ring-2 rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black dark:peer-checked:bg-black`}></div>
      <span className="ms-2 text-sm font-medium">{isLight ? <Moon /> : <Sun />}</span>
    </label>


  );
}

