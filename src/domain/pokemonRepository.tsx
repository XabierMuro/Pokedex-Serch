import { PokemonData } from './pokemon'

export interface PokemonRepository {
  getPokemon(generation: string): Promise<PokemonData[]>
}
