import { typesDatas } from '../datas/typesDatas';
import Pokemon from '@components/Pokemon';
import { usePokemonsData } from "@contexts/PokemonsDataContext";
import { usePokemonSelected } from "@contexts/PokemonSelectedContext";
import { useSorting } from "@contexts/SortingContext";
import { useFilter } from "@contexts/FilterContext";

export default function PokemonList() {
    const { pokemonsData } = usePokemonsData();
    const { setPokemonSelected } = usePokemonSelected();
    const { isSorted } = useSorting();
    const { isFiltered } = useFilter();

    // À placer avant le return
    const pokemonsByType = typesDatas.flatMap(type =>
        pokemonsData.filter(
            pokemon => pokemon.types[0].type.name === type.name && pokemon.sprites.front_default
        ).map(pokemon => ({ pokemon, type }))
    );

    return(
        <div className="flex justify-center flex-wrap gap-6 sm:gap-10 mt-10">

            {   
                // no filter and no sorting
                !isSorted &&
                !isFiltered &&
                pokemonsData.map((pokemon, index) => 
                    typesDatas.map((type) => {
                        if((pokemon.types[0].type.name === type.name) && pokemon.sprites.front_default){
                            return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={index} onClick={() => setPokemonSelected({pokemon, type})} />
                        } 
                    })
                )
            }


            {
                // sorting by name A-Z
                isSorted === 1 && 
                [...pokemonsData]
                    .sort((a, b) => a.frenchName.localeCompare(b.frenchName))
                    .map((pokemon, index) => 
                        typesDatas.map((type) => {
                            if((pokemon.types[0].type.name === type.name) && pokemon.sprites.front_default){
                                return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={index} onClick={() => setPokemonSelected({pokemon, type})} />
                            } 
                        })
                    )
            }

            {
                // sorting by name Z-A
                isSorted === 2 && 
                [...pokemonsData]
                    .sort((a, b) => b.frenchName.localeCompare(a.frenchName))
                    .map((pokemon, index) => 
                        typesDatas.map((type) => {
                            if((pokemon.types[0].type.name === type.name) && pokemon.sprites.front_default){
                                return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={index} onClick={() => setPokemonSelected({pokemon, type})} />
                            } 
                        })
                    )
            }

            {
                // sorting by type
                isSorted === 3 && 
                pokemonsByType.map(({ pokemon, type }, index) => (
                    <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={index} onClick={() => setPokemonSelected({pokemon, type})} />
                ))
            }

        </div>
    ) 
}