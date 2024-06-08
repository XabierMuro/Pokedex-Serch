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
  sprites: string[]
  stats: number[]
  types: string[]
}

type Pokemon = {
  name: string
  url: string
}

function App() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([])
  const url = `https://pokeapi.co/api/v2/pokemon`

  const fetchPokemon = async () => {
    const req = await axios.get(url)
    const pokemones = await req.data.results
    pokemones.map((pokemon: Pokemon) => {
      axios
        .get(pokemon.url)
        .then(response => {
          const data = response.data
          const individual: PokemonData = {
            name: data.name,
            id: data.id,
            weight: data.weight,
            height: data.height,
            sprites: data.sprites.back_default,
            stats: data.stats,
            types: data.types,
          }
          console.log(individual)
          setPokemons([...pokemons, individual])
        })
        .catch(error => {
          console.error('Error al obtener los datos del pokemon:', error)
        })
    })
  }

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
            <Card key={key} {...pokemon} />
          ))}
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
