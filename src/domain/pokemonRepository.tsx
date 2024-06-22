import { PokemonData } from './pokemon';

export interface PokemonRepository {
    getPokemon(): Promise<PokemonData[]>;
}
