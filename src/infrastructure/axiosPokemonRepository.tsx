import axios from 'axios'
import { PokemonDTO } from '../domain/pokemonDTO'
import { PokemonData, Pokemon, Stats } from '../domain/pokemon'
import { PokemonRepository } from '../domain/pokemonRepository'
import { setLocalStorage } from './localStoragePokemonRepository'

type Region = {
  name: string
  offset: number
  limit: number
}
const regions: Region[] = [
  { name: 'kanto', offset: 0, limit: 151 },
  { name: 'johto', offset: 151, limit: 100 },
  { name: 'hoenn', offset: 251, limit: 135 },
  { name: 'sinnoh', offset: 386, limit: 107 },
  { name: 'unova', offset: 493, limit: 156 },
  { name: 'kalos', offset: 649, limit: 72 },
  { name: 'alola', offset: 721, limit: 88 },
  { name: 'galar', offset: 809, limit: 96 },
  { name: 'paldea', offset: 905, limit: 120 },
]

export class AxiosPokemonRepository implements PokemonRepository {
  async getPokemon(generation: string, key: string): Promise<PokemonData[]> {
    const region = regions.find(
      region => region.name.toUpperCase() === generation.toUpperCase(),
    )
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${region?.limit}&offset=${region?.offset}`
    const req = await axios.get(url)
    const pokemones = req.data.results

    const promises = pokemones.map(async (pokemon: Pokemon) => {
      const response = await axios.get(pokemon.url)
      const data: PokemonDTO = response.data
      const types = data.types.map(type => type.type.name)
      const base_stats = data.stats.map(stats => stats.base_stat)
      const stats: Stats = {
        hp: base_stats[0],
        atk: base_stats[1],
        def: base_stats[2],
        sat: base_stats[3],
        sdf: base_stats[4],
        spd: base_stats[5],
      }
      return {
        name: data.name,
        id: data.id,
        weight: data.weight / 10,
        height: data.height / 10,
        sprites: data.sprites.other['official-artwork'].front_default,
        stats: stats,
        types: types,
      }
    })

    const results = await Promise.all(promises)
    const validResults = results.filter(result => result !== null)

    setLocalStorage(key, validResults)

    return validResults
  }
}
