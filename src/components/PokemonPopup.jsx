import { motion } from "framer-motion";
import { capitalize } from "../utils";



export default function PokemonPopup({pokemonSelected, onClose}) {
    const pokemon = pokemonSelected.pokemon;
    const type = pokemonSelected.type;
    const name = capitalize(pokemon.name);
    const height = pokemon.height / 10;
    const weight = pokemon.weight / 10;


    return(
        <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                id="pokemon-popup"
                className="rounded-2xl shadow-lg p-6 sm:p-16 w-[90%] max-w-md text-center relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()} // empêcher la fermeture au clic intérieur
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 hover:text-red-500 transition"
                >
                    ✕
                </button>

                <h2 className="text-2xl sm:text-3xl font-bold capitalize mb-4 sm:mb-7">
                {name}
                </h2>

                <div className="flex justify-center gap-10 sm:gap-18 sm:text-xl">
                    <div className="flex flex-col">
                        <img
                            src={pokemon.sprites.front_default}
                            alt={name}
                            className="h-24"
                        />
                        <div className="space-y-1">
                            <p><span className="font-semibold">Taille :</span> {height} m</p>
                            <p><span className="font-semibold">Poids :</span> {weight} kg</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img
                            src={type.img}
                            alt={type.name}
                            className="h-10 mb-7 mt-7"
                        />
                        <div className="space-y-1">
                            <p><span className="font-semibold">HP :</span> {pokemon.stats[0].base_stat}</p>
                            <p><span className="font-semibold">Attaque :</span> {pokemon.stats[1].base_stat}</p>
                            <p><span className="font-semibold">Défense :</span> {pokemon.stats[2].base_stat}</p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    ) 
}



// id={pokemon.id} name={capitalize(pokemon.name)} pokemonDefaultImg={pokemon.sprites.front_default} pokemonImgs={pokemon.sprites} color={type.color} type={type.name} typeImg={type.img} hp={pokemon.stats[0].base_stat} attack={pokemon.stats[1].base_stat} defense={pokemon.stats[2].base_stat} height={pokemon.height / 10} weight={pokemon.weight / 10}