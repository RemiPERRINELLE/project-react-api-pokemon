import { useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { typesDatas } from './datas/typesDatas';
import Pokemon from './components/Pokemon';
import { ClipLoader } from 'react-spinners';
import ToggleLightMode from './components/ToggleLightMode';
import { usePokemonsData } from './contexts/PokemonsDataContext';
import { useLoading } from './contexts/LoadingContext';
import { usePokemonSelected } from './contexts/PokemonSelectedContext';
import PokemonPopup from './components/PokemonPopup';
import { AnimatePresence } from 'framer-motion';
import Pokemon_logo from'./assets/logo/Pokemon_logo.png';



function App() {
  const { isLoading, setIsLoading } = useLoading();
  const { pokemonsData, setPokemonsData, errorPokemonsData, setErrorPokemonsData } = usePokemonsData();
  const { pokemonSelected, setPokemonSelected } = usePokemonSelected();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=386&offset=0');
        
        const details = await Promise.all(
          data.results.map(async (poke) => {
            const pokemonData = await axios.get(poke.url).then(res => res.data);
            const speciesData = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`)
              .then(res => res.data);

            // Cherche le nom en français
            const frenchName = speciesData.names.find(name => name.language.name === 'fr')?.name || pokemonData.name;

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
  if(errorPokemonsData) return <p>{isError}</p>



  return (
    <>
      <ToggleLightMode />
      <header className='flex justify-center mt-10 mb-20'>
        <h1 className='sr-only'>Mini wiki Pokémon</h1>
        <img className='w-80' src={Pokemon_logo} alt="Mini wiki Pokémon" />
      </header>
      <div className="flex justify-center flex-wrap gap-6 sm:gap-10 mt-10">
        {
          pokemonsData.map((pokemon) => 
            typesDatas.map((type) => {
              if((pokemon.types[0].type.name === type.name) && pokemon.sprites.front_default){
                return <Pokemon key={pokemon.id} pokemon={pokemon} type={type} onClick={() => setPokemonSelected({pokemon: pokemon, type: type})} />
              } 
            })
          )
        }
      </div>
      <AnimatePresence>
        {pokemonSelected && (
          <PokemonPopup
            key="pokemon-popup"
            pokemonSelected={pokemonSelected}
            onClose={() => setPokemonSelected(null)}
          />
        )}
      </AnimatePresence>

    </>
  )
}

export default App
