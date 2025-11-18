import { typesDatas } from '../datas/typesDatas';
import Pokemon from '@components/Pokemon';
import { usePokemonsData } from "@contexts/PokemonsDataContext";
import { usePokemonSelected } from "@contexts/PokemonSelectedContext";
import { useSorting } from "@contexts/SortingContext";
import { useFilter } from "@contexts/FilterContext";
import { useSearch } from "@contexts/SearchContext";

export default function PokemonList() {
    const { pokemonsData } = usePokemonsData();
    const { setPokemonSelected } = usePokemonSelected();
    const { isSorted } = useSorting();
    const { isFiltered } = useFilter();
    const { isSearched } = useSearch();


    const pokemonsByType = typesDatas.flatMap(type =>
        pokemonsData.filter(
            pokemon => pokemon.types[0].type.name === type.name && pokemon.sprites.front_default
        ).map(pokemon => ({ pokemon, type }))
    );

    return(
        <div className="flex justify-center flex-wrap gap-6 sm:gap-10 mt-10">

            {
                isSearched &&
                pokemonsData.map((pokemon, index) => 
                    typesDatas.map((type) => {
                        if((pokemon.frenchName.toLowerCase().indexOf(isSearched) > -1) && (pokemon.types[0].type.name === type.name) && pokemon.sprites.front_default) {
                            return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={0} onClick={() => setPokemonSelected({pokemon, type})} />
                        }
                    })
                )
            }

            {   
                // no filter and no sorting
                !isSorted &&
                !isSearched &&
                pokemonsData.map((pokemon, index) => 
                    typesDatas.map((type) => {
                        if(!isFiltered && (pokemon.types[0].type.name === type.name) && pokemon.sprites.front_default){
                            // console.log(pokemon.frenchName.toLowerCase().indexOf('bulbizarre') > -1 && pokemon.frenchName);
                            return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={index} onClick={() => setPokemonSelected({pokemon, type})} />
                            
                        } else if(isFiltered && (type.order === isFiltered) && (typesDatas.find(t => t.name === pokemon.types[0].type.name)?.order === isFiltered)) {
                           return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={0} onClick={() => setPokemonSelected({pokemon, type})} />
                        }
                    })
                )
            }

            {
                // sorting by name A-Z
                isSorted === 1 &&
                !isSearched &&
                [...pokemonsData]
                    .sort((a, b) => a.frenchName.localeCompare(b.frenchName))
                    .map((pokemon, index) => 
                        typesDatas.map((type) => {
                            if(!isFiltered && (pokemon.types[0].type.name === type.name) && pokemon.sprites.front_default){
                                return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={index} onClick={() => setPokemonSelected({pokemon, type})} />
                            } else if(isFiltered && (type.order === isFiltered) && (typesDatas.find(t => t.name === pokemon.types[0].type.name)?.order === isFiltered)) {
                            return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={0} onClick={() => setPokemonSelected({pokemon, type})} />
                            }
                        })
                    )
            }

            {
                // sorting by name Z-A
                isSorted === 2 && 
                !isSearched &&
                [...pokemonsData]
                    .sort((a, b) => b.frenchName.localeCompare(a.frenchName))
                    .map((pokemon, index) => 
                        typesDatas.map((type) => {
                            if(!isFiltered && (pokemon.types[0].type.name === type.name) && pokemon.sprites.front_default){
                                return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={index} onClick={() => setPokemonSelected({pokemon, type})} />
                            } else if(isFiltered && (type.order === isFiltered) && (typesDatas.find(t => t.name === pokemon.types[0].type.name)?.order === isFiltered)) {
                            return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={0} onClick={() => setPokemonSelected({pokemon, type})} />
                            }
                        })
                    )
            }

            {
                // sorting by type
                isSorted === 3 && 
                !isSearched &&
                pokemonsByType.map(({ pokemon, type }, index) => {
                    if(!isFiltered && (pokemon.types[0].type.name === type.name) && pokemon.sprites.front_default){
                        return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={index} onClick={() => setPokemonSelected({pokemon, type})} />
                    } else if(isFiltered && (type.order === isFiltered) && (typesDatas.find(t => t.name === pokemon.types[0].type.name)?.order === isFiltered)) {
                        return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} index={0} onClick={() => setPokemonSelected({pokemon, type})} />
                    }
                })
            }

        </div>
    ) 
}