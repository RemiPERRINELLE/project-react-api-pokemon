export interface PokemonData {
    id: number;
    name: string;
    frenchName: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
        [key: string]: any;
    };  stats: {
        base_stat: number;
        stat: { name: string };
    }[];
    types: {
        type: { name: string };
    }[];
}

export interface PokemonType {
  name: string;
  img: string;
  color: string;
}

export interface PokemonSelected {
  pokemon: PokemonData;
  type: PokemonType;
}