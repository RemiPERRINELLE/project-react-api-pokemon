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
    },
  };

  it('affiche correctement les infos et ferme la popup quand on clique sur fermer', () => {
    const onClose = vi.fn();

    render(<PokemonPopup pokemonSelected={mockPokemonSelected} onClose={onClose} />);

    // Vérifie que le nom français capitalisé est affiché
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Pikachu');

    // Vérifie que l'image du Pokémon est présente avec le bon alt
    expect(screen.getByAltText('Pikachu')).toHaveAttribute('src', 'url-to-img');

    // Vérifie que l'image du type est présente avec le bon alt
    expect(screen.getByAltText('electric')).toHaveAttribute('src', 'url-to-type-img');

    // Vérifie que le span "Taille :" est là
    expect(screen.getByText('Taille :')).toBeInTheDocument();
    // Vérifie qu'après il y a le texte "0.4 m"
    expect(screen.getByText('0.4 m')).toBeInTheDocument();
    // Vérifie que le span "Poids :" est là
    expect(screen.getByText('Poids :')).toBeInTheDocument();
    // Vérifie qu'après il y a le texte "6 kg"
    expect(screen.getByText('6 kg')).toBeInTheDocument();

    // Vérifie que le span "HP :" est là
    expect(screen.getByText('HP :')).toBeInTheDocument();
    // Vérifie qu'après il y a le texte "35"
    expect(screen.getByText('35')).toBeInTheDocument();
    // Vérifie que le span "Attaque :" est là
    expect(screen.getByText('Attaque :')).toBeInTheDocument();
    // Vérifie qu'après il y a le texte "55"
    expect(screen.getByText('55')).toBeInTheDocument();
    // Vérifie que le span "Défense :" est là
    expect(screen.getByText('Défense :')).toBeInTheDocument();
    // Vérifie qu'après il y a le texte "40"
    expect(screen.getByText('40')).toBeInTheDocument();

    // Clique sur le bouton fermer (bouton avec texte "✕")
    fireEvent.click(screen.getByRole('button'));

    // Vérifie que la fonction onClose a bien été appelée
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
