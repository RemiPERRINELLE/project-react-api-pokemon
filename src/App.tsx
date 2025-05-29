import { useEffect } from 'react'
import './App.css'
import axios from 'axios';

import { ClipLoader } from 'react-spinners';
import ToggleLightMode from '@components/ToggleLightMode';
import { usePokemonsData } from '@contexts/PokemonsDataContext';
import { useLoading } from '@contexts/LoadingContext';
import { usePokemonSelected } from '@contexts/PokemonSelectedContext';
import PokemonPopup from '@components/PokemonPopup';
import { AnimatePresence } from 'framer-motion';
import Pokemon_logo from'@assets/logo/Pokemon_logo.png';
import { PokemonData } from '@custom-types/pokemonTypes';
import Intro from '@components/Intro';
import GitHubButton from '@components/GitHubButton';
import UpButton from '@components/UpButton';
import PokemonList from '@components/PokemonList';
import MenuSortingFilter from '@components/MenuSortingFilter';

// TYPAGE

interface PokemonItem {
  name: string;
  url: string;
}

interface PokemonSpeciesData {
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
}


function App() {
  const { isLoading, setIsLoading } = useLoading();
  const { setPokemonsData, errorPokemonsData, setErrorPokemonsData } = usePokemonsData();
  const { pokemonSelected, setPokemonSelected } = usePokemonSelected();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=386&offset=0');
        
        const details = await Promise.all(
          data.results.map(async (poke: PokemonItem) => {
            const pokemonData = await axios.get<PokemonData>(poke.url).then(res => res.data);
            const speciesData = await axios.get<PokemonSpeciesData>(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`)
              .then(res => res.data);

            // Cherche le nom en français
            const frenchName = speciesData.names.find(
              name => name.language.name === 'fr'
            )?.name || pokemonData.name;

            return {
              ...pokemonData,
              frenchName,
            };
          })
        );
        setPokemonsData(details);
      } catch (error) {
        setErrorPokemonsData('Une erreur est intervenue lors de la récupération des données.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data }  = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=386&offset=0');
  //       const details = await Promise.all(
  //         data.results.map(poke => axios.get(poke.url).then(res => res.data))
  //       );
  //       setPokemonsData(details);
  //     } catch (error) {
  //       setErrorPokemonsData('Une erreur est intervenue lors de la récupération des données.');
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const promises = pokemonsData.map(async (pokemon) => {
  //         const {data} = await axios.get(pokemon.species.url);
  //         return data;
  //       });
  //       const promisesData = await Promise.all(promises);
  //       setPokemonsSpecies(promisesData);
  //     } catch (error) {
  //       console.error('Erreur :', error);
  //     }
  //   })();
  //   let typeArray = [];
  //   pokemonsData.map((pokemon) => {
  //     if(!typeArray.find(type => type === pokemon.types[0].type.name)) {
  //       typeArray.push(pokemon.types[0].type.name);
  //     }
  //   })
  //   console.log(typeArray);
  // }, [pokemonsData])

  if(isLoading) return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                          <ClipLoader size={50} color="#3498db" loading={isLoading} />
                        </div>;
  if(errorPokemonsData) return <p>{errorPokemonsData}</p>


  return (
    <>
      <GitHubButton />
      <ToggleLightMode />
      <header className='flex flex-col items-center mt-10'>
        <Intro />
        <img className='w-80' src={Pokemon_logo} alt="Mini wiki Pokémon" />
      </header>
      <MenuSortingFilter />
      <PokemonList />
      <AnimatePresence>
        {pokemonSelected && (
          <PokemonPopup
            key="pokemon-popup"
            pokemonSelected={pokemonSelected}
            onClose={() => setPokemonSelected(null)}
          />
        )}
      </AnimatePresence>
      <UpButton />
    </>
  )
}

export default App
