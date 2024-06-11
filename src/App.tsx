import './index.css'
import { Card } from './components/card/card'
import { Header } from './components/header/header'
import { SearchBar } from './components/searchBar/searchBar'
import { Footer } from './components/footer/footer'
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

type PokemonDataApi = {
  name: string
  id: number
  weight: number
  height: number
  sprites: string[]
  stats: any
  type: any
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
  const url = `https://pokeapi.co/api/v2/pokemon?limit=151`

  const fetchPokemon = async () => {
    try {
      const req = await axios.get(url)
      const pokemones = req.data.results

      const promises = pokemones.map(async (pokemon: Pokemon) => {
        const response = await axios.get(pokemon.url)
        console.log(response)
        const data = response.data
        const types = data.types.map((type: any) => type.type.name)
        const stats = data.stats.map(stats => stats.base_stat)
        const stats2: Stats = {
          hp: stats[0],
          atk: stats[1],
          def: stats[2],
          sat: stats[3],
          sdf: stats[4],
          spd: stats[5],
        }
        return {
          name: data.name,
          id: data.id,
          weight: data.weight,
          height: data.height,
          sprites: data.sprites.front_default,
          stats: stats2,
          types: types,
        }
      })

      const results = await Promise.all(promises)
      const validResults = results.filter(result => result !== null)
      setPokemons(validResults)
    } catch (error) {
      console.error('Error al obtener los datos de los pokemones:', error)
    }
  }

  /*const fetchPokemon = async () => {
    try {
      let url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
      const allPokemons = []

      while (url) {
        const req = await axios.get(url)
        const pokemones = req.data.results

        const promises = pokemones.map((pokemon: Pokemon) =>
          axios
            .get(pokemon.url)
            .then(response => {
              const data = response.data
              console.log(data)
              const types = data.types.map((type: any) => type.type.name)
              const stats = data.stats.map((stats: any) => stats.base_stat)

              return {
                name: data.name,
                id: data.id,
                weight: data.weight,
                height: data.height,
                sprites: data.sprites.front_default,
                stats: stats,
                types: types,
              }
            })
            .catch(error => {
              console.error('Error al obtener los datos del pokemon:', error)
              return null
            }),
        )

        const results = await Promise.all(promises)
        const validResults = results.filter(result => result !== null)
        allPokemons.push(...validResults)

        url = req.data.next
      }

      setPokemons(allPokemons)
    } catch (error) {
      console.error('Error al obtener los datos de los pokemones:', error)
    }
  }*/

  useEffect(() => {
    fetchPokemon()
  }, [])
  return (
    <>
      <div className="container">
        <Header></Header>
        <SearchBar></SearchBar>
        <div className="container_pokemon">
          {pokemons.map((pokemon, key) => (
            <Card key={key} pokemon={pokemon} />
          ))}
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
