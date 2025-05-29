import { render, screen, waitFor } from '@testing-library/react';
import { PokemonsDataContext } from '@contexts/PokemonsDataContext';
import Pokemon from '@components/Pokemon';

const mockPokemon = {
  id: 25,
  name: 'pikachu',
  frenchName: 'Pikachu',
  height: 4,
  weight: 60,
  sprites: {
    front_default: 'url-to-img',
  },
  types: [{ type: { name: 'electric' } }],
  stats: [
    { base_stat: 35, stat: { name: 'hp' } },
    { base_stat: 55, stat: { name: 'attack' } },
    { base_stat: 40, stat: { name: 'defense' } },
  ],
};

const mockType = {
  name: 'electric',
  img: 'url-to-type-img',
  color: '#F8D030',
  order: 5,
};

describe('PokemonCard', () => {
  it('Affiche correctement les infos du pokémon', async () => {
    render(
      <PokemonsDataContext.Provider
        value={{
          pokemonsData: [mockPokemon],
          setPokemonsData: () => {},
          // pokemonsSpecies: [],
          // setPokemonsSpecies: () => {},
          errorPokemonsData: null,
          setErrorPokemonsData: () => {},
        }}
      >
        <Pokemon pokemon={mockPokemon} type={mockType} onClick={() => {}} />
      </PokemonsDataContext.Provider>
    );

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByAltText(/pikachu/i)).toBeInTheDocument();
      expect(screen.getByRole('img')).toHaveAttribute('src', 'url-to-img');
    });
  });
});