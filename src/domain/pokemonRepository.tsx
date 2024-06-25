import { PokemonData } from './pokemon'

export interface PokemonRepository {
  getPokemon(generation: string, key: string): Promise<PokemonData[]>
}
