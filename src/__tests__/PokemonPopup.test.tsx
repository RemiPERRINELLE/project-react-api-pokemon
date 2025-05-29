import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PokemonPopup from '@components/PokemonPopup';

describe('PokemonPopup', () => {
  const mockPokemonSelected = {
    pokemon: {
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
    },
    type: {
      name: 'electric',
      img: 'url-to-type-img',
      color: '#F8D030',
      order: 5
    },
  };

  it('Affiche correctement les infos et ferme la popup quand on clique sur fermer', () => {
    const onClose = vi.fn();

    render(<PokemonPopup pokemonSelected={mockPokemonSelected} onClose={onClose} />);

    // FrenchName
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Pikachu');

    // Image ALT
    expect(screen.getByAltText('Pikachu')).toHaveAttribute('src', 'url-to-img');
    expect(screen.getByAltText('electric')).toHaveAttribute('src', 'url-to-type-img');

    // Texts
    expect(screen.getByText('Taille :')).toBeInTheDocument();
    expect(screen.getByText('0.4 m')).toBeInTheDocument();

    expect(screen.getByText('Poids :')).toBeInTheDocument();
    expect(screen.getByText('6 kg')).toBeInTheDocument();

    expect(screen.getByText('HP :')).toBeInTheDocument();
    expect(screen.getByText('35')).toBeInTheDocument();

    expect(screen.getByText('Attaque :')).toBeInTheDocument();
    expect(screen.getByText('55')).toBeInTheDocument();

    expect(screen.getByText('Défense :')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();

    // Click on button
    fireEvent.click(screen.getByRole('button'));

    // onClose is called
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
