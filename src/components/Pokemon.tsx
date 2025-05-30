import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext"
import { capitalize, cssVars } from "../utils";
import { PokemonData, PokemonType } from "@custom-types/pokemonTypes";

interface PokemonProps {
    pokemon: PokemonData;
    type: PokemonType;
    onClick: () => void;
    index?: number;
}

export default function Pokemon({pokemon, type, onClick, index}: PokemonProps) {
    const { isLight } = useTheme();
    const name = capitalize(pokemon.frenchName);


    return(
        <motion.button 
            custom={index}
            initial="hidden"
            animate="visible"
            // transition={{ duration: 0.5, delay: pokemon.id * 0.025 }}
            variants={{
                hidden: { opacity: 0 },
                visible: (i) => ({
                    opacity: 1,
                    transition: { delay: i * 0.0125, duration: 0.5 }
                })
            }}
            className={`appearance-none border-none w-45/100 sm:w-30 flex flex-col justify-center items-center pokemonCard p-4 gap-2 text-sm sm:text-base ${isLight && 'bg-light-pokemonCard'}`}
            style={cssVars({ '--color-pokemonCard': type.color })} 
            onClick={onClick}
        >
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