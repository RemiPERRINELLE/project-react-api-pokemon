import { useTheme } from '../contexts/ThemeContext'

export default function UseLightMode() {
  const {setIsLight} = useTheme(false);

  const bodyClass = document.body.classList;

  const toggleLightMode = () => {
    if (bodyClass.contains('light')) {
        bodyClass.remove('light');
        localStorage.setItem('theme', 'dark');
        setIsLight(false);
    } else {
        bodyClass.add('light');
        localStorage.setItem('theme', 'light');
        setIsLight(true);
    }
  };

  return [toggleLightMode]

  // return (
  //   <button onClick={toggleLightMode} className="p-2 bg-accent text-white rounded">
  //     {isLight ? 'Mode Dark' : 'Mode Light'}
  //   </button>
  // );
}

