import './index.css'
import { Card } from './components/card/card'
import { Header } from './components/header/header'
import { SearchBar } from './components/searchBar/searchBar'
import { Footer } from './components/footer/footer'
import { NotFound } from './components/notFound/notFound'
import { LoadingCard } from './components/loadingCard/loadingCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

type PokemonData = {
  name: string
  id: number
  weight: number
  height: number
  sprites: string
  stats: Stats
  types: PokemonType[]
}

type Stats = {
  hp: number
  atk: number
  def: number
  sat: number
  sdf: number
  spd: number
}

type StatsDTO = {
  base_stat: number
}

type TypeDTO = {
  type: {
    name: string
  }
}

type SpritesDTO = {
  front_default: string
}

type PokemonDTO = {
  name: string
  id: number
  weight: number
  height: number
  sprites: SpritesDTO
  stats: StatsDTO[]
  types: TypeDTO[]
}

type PokemonType =
  | 'grass'
  | 'bug'
  | 'electric'
  | 'ground'
  | 'fighting'
  | 'fire'
  | 'water'
  | 'poison'
  | 'flying'
  | 'psychic'
  | 'fairy'
  | 'dragon'
  | 'ghost'
  | 'ice'
  | 'normal'
  | 'rock'
  | 'steel'
  | 'dark'

type Pokemon = {
  name: string
  url: string
}

function App() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([])
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonData[]>([])
  const [search, setSearch] = useState<String>('')

  useEffect(() => {
    fetchPokemon()
  }, [])

  const handleChange = (query: string) => {
    setFilteredPokemons(
      pokemons.filter(pokemon => pokemon.name.includes(query)),
    )
    setSearch(query)
  }
  const emptyArray = []
  for (let i = 0; i < 151; i++) {
    emptyArray.push(i)
  }

  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`

  const fetchPokemon = async () => {
    try {
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
          sprites: data.sprites.front_default,
          stats: stats,
          types: types,
        }
      })

      const results = await Promise.all(promises)
      const validResults = results.filter(result => result !== null)
      setPokemons(validResults)
      setFilteredPokemons(validResults)
    } catch (error) {
      console.error('Error al obtener los datos de los pokemones:', error)
    }
  }

  if (pokemons.length === 0) {
    return (
      <div className="container">
        <Header />
        <SearchBar onChange={handleChange} />
        <div className="container_pokemon">
          {emptyArray.map(() => (
            <LoadingCard />
          ))}
        </div>
        <Footer />
      </div>
    )
  }

  if (filteredPokemons.length === 0 && pokemons.length !== 0) {
    return (
      <div className="container">
        <Header />
        <SearchBar onChange={handleChange} />
        <NotFound notFoundMessage={search} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="container">
      <Header />
      <SearchBar onChange={handleChange} />
      <div className="container_pokemon">
        {filteredPokemons.map((pokemon, key) => (
          <Card key={key} pokemon={pokemon} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
