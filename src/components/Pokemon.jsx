import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext"
import { capitalize } from "../utils";


export default function Pokemon({pokemon, type, onClick}) {
    const { isLight } = useTheme();
    const name = capitalize(pokemon.name);


    return(
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: pokemon.id < 152 ? pokemon.id * 0.025 : 0 }} className={`appearance-none border-none w-30 flex flex-col justify-center items-center pokemonCard p-4 gap-2 ${isLight ? 'bg-light-pokemonCard' : ''}`} style={{ '--color-pokemonCard': type.color }} onClick={onClick} >
            <span></span>
            <img src={pokemon.sprites.front_default} alt={name} />
            <h2>{name}</h2>
        </motion.button>
        /* <button onClick={() => document.getElementById('legacy').play()}>legacy</button>
            <audio id="legacy"><source src="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg" type="audio/ogg" />Votre navigateur ne prend pas en charge l'élément audio HTML5. <a href="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg">Télécharger le fichier audio</a></audio>
            <button onClick={() => document.getElementById('latest').play()}>latest</button>
            <audio id="latest"><source src="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg" type="audio/ogg" />Votre navigateur ne prend pas en charge l'élément audio HTML5. <a href="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg">Télécharger le fichier audio</a></audio> */
    ) 
}