import './index.css'
import { Card } from './components/card/card'
import { Header } from './components/header/header'
import { SearchBar } from './components/searchBar/searchBar'
import { Footer } from './components/footer/footer'
import { NotFound } from './components/notFound/notFound'
import { LoadingCard } from './components/loadingCard/loadingCard'
import { ErrorApi } from './components/errorApi/errorApi'
import { fetchPokemon } from './infrastructure/repositories/pokemon.repository'
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

function App() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([])
  const [search, setSearch] = useState<string>('')
  const [errorApi, setErrorApi] = useState<boolean>(false)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    const result = await fetchPokemon()
    if (result !== false) {
      setPokemons(result)
      return
    }
    setErrorApi(true)
  }

  const handleChange = (query: string) => {
    setSearch(query)
  }
  const emptyArray = []
  for (let i = 0; i < 151; i++) {
    emptyArray.push(i)
  }

  if (errorApi) {
    return (
      <div className="container">
        <Header />
        <SearchBar onChange={handleChange} />
        <ErrorApi />
        <Footer />
      </div>
    )
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

  const filteredPokemons: PokemonData[] = pokemons.filter(pokemon =>
    pokemon.name.includes(search),
  )
  if (filteredPokemons.length === 0) {
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
