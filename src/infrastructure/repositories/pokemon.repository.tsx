import axios from 'axios'
import { PokemonDTO } from '../../models/pokemonDTO'
import { PokemonData, Pokemon, Stats } from '../../models/pokemon'

const url = `https://pokeapi.co/api/v2/pokemon?limit=151`
export const fetchPokemons = async (): Promise<PokemonData[]> => {
  
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
    return validResults
  
}
