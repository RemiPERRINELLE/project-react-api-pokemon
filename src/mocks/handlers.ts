import { rest } from 'msw';

export const handlers = [
  // Mock de la liste des Pokémon
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
        ],
      })
    );
  }),

  // Mock des détails du Pokémon
  rest.get('https://pokeapi.co/api/v2/pokemon/25/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 25,
        name: 'pikachu',
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        },
        stats: [
          { base_stat: 35, stat: { name: 'hp' } },
          { base_stat: 55, stat: { name: 'attack' } },
          { base_stat: 40, stat: { name: 'defense' } },
        ],
        types: [{ type: { name: 'electric' } }],
      })
    );
  }),

  // Mock des species pour avoir le nom FR
  rest.get('https://pokeapi.co/api/v2/pokemon-species/25', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        names: [
          { language: { name: 'fr' }, name: 'Pikachu' },
          { language: { name: 'en' }, name: 'Pikachu' },
        ],
      })
    );
  }),
];